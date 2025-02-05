import cv2
import torch
import matplotlib.pyplot as plt
from ultralytics import YOLO
from tkinter import Tk, filedialog
from pathlib import Path

# ==========================
# 📌 Step 1: Load the Trained Model
# ==========================
MODEL_PATH = "yolov11_bone_fracture.pt"  # Update this path if needed
model = YOLO(MODEL_PATH)
print("✅ Model Loaded Successfully!")

# ==========================
# 📌 Step 2: Select an Image File
# ==========================
Tk().withdraw()  # Hide the root Tkinter window
image_path = filedialog.askopenfilename(
    title="Select an Image", filetypes=[("Image Files", "*.jpg;*.png;*.jpeg")]
)

if not image_path:
    print("❌ No Image Selected! Exiting...")
    exit()

print(f"✅ Image Selected: {image_path}")

# ==========================
# 📌 Step 3: Run Inference on the Image
# ==========================
results = model.predict(image_path, save=True, conf=0.25)

# 🔹 Access the first result object
result = results[0]

# 🔹 Get the directory where results are saved
output_folder = Path(result.save_dir) / "predict"

# 🔹 Get the saved image path
output_images = list(
    output_folder.glob("*.jpg")
)  # Adjust if different format (e.g., .png)
if not output_images:
    print("❌ No output images found!")
    exit()

output_image_path = output_images[0]
print(f"✅ Inference Completed! Output Image Saved at: {output_image_path}")

# ==========================
# 📌 Step 4: Display the Output Image
# ==========================
img = cv2.imread(str(output_image_path))
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
plt.imshow(img)
plt.axis("off")
plt.show()
