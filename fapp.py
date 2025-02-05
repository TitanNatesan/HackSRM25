import io
import cv2
import base64
import numpy as np
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from ultralytics import YOLO
import uvicorn

# Initialize FastAPI app
app = FastAPI()

# Set CORS policy to allow all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================
# 📌 Load the Trained Model
# ==========================
MODEL_PATH = "yolov11_bone_fracture.pt"  # Update this path if needed
model = YOLO(MODEL_PATH)
print("✅ Model Loaded Successfully!")

# ==========================
# 📌 Helper Function: Convert Image to Base64
# ==========================
def encode_image_to_base64(image):
    """Encode a NumPy image array to base64 string."""
    _, buffer = cv2.imencode('.png', image)
    base64_str = base64.b64encode(buffer).decode('utf-8')
    return base64_str

# ==========================
# 📌 Define the Inference Endpoint
# ==========================
@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    """
    Endpoint to run inference on an uploaded image.
    Returns original, processed (with bounding boxes), and segmentation mask in JSON.
    """
    # Read the uploaded file
    contents = await file.read()
    np_arr = np.frombuffer(contents, np.uint8)
    original_img = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

    if original_img is None:
        return {"error": "Invalid image file."}

    # --------------------------
    # 📌 Run Inference on the Image
    # --------------------------
    results = model.predict(original_img, conf=0.25)

    # Get the processed image with bounding boxes
    processed_img = results[0].plot()

    # Generate segmentation mask (if available)
    mask = np.zeros(original_img.shape[:2], dtype=np.uint8)
    if results[0].masks is not None:
        for result_mask in results[0].masks.xy:
            cv2.fillPoly(mask, [np.int32(result_mask)], 255)

    # Convert mask to 3-channel for visualization
    mask_3ch = cv2.cvtColor(mask, cv2.COLOR_GRAY2BGR)

    # --------------------------
    # 📌 Convert Images to Base64 Strings
    # --------------------------
    original_b64 = encode_image_to_base64(original_img)
    processed_b64 = encode_image_to_base64(processed_img)
    mask_b64 = encode_image_to_base64(mask_3ch)

    # --------------------------
    # 📌 Prepare JSON Response
    # --------------------------
    response_data = {
        "original_image": original_b64,
        "processed_image": processed_b64,
        "segmentation_mask": mask_b64
    }

    return JSONResponse(content=response_data)

# ==========================
# 📌 Run the FastAPI App
# ==========================
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
