import streamlit as st
import cv2
import shutil
import numpy as np
from ultralytics import YOLO
from pathlib import Path
from PIL import Image

st.title("🦴 Bone Fracture Detection using YOLOv8")
MODEL_PATH = "yolov8_bone_fracture.pt"
model = YOLO(MODEL_PATH)
OUTPUT_DIR = Path("predictions")
OUTPUT_DIR.mkdir(exist_ok=True)

uploaded_file = st.file_uploader("Upload an X-ray Image", type=["jpg", "png", "jpeg"])
if uploaded_file:
    image = Image.open(uploaded_file)
    image_np = np.array(image)
    temp_input_path = "temp_input.jpg"
    cv2.imwrite(temp_input_path, cv2.cvtColor(image_np, cv2.COLOR_RGB2BGR))

    st.write("Running inference...")
    results = model.predict(temp_input_path, save=True, conf=0.25)
    result = results[0]

    if len(result.boxes) == 0:
        st.warning("No predictions found.")
    else:
        st.success("Fracture detected.")

    yolo_output_folder = Path(result.save_dir)
    output_images = sorted(yolo_output_folder.glob("*.jpg"), key=lambda x: x.stat().st_mtime, reverse=True)

    if output_images:
        output_image_path = OUTPUT_DIR / "output.jpg"
        if output_image_path.exists():
            output_image_path.unlink()
        shutil.move(str(output_images[0]), str(output_image_path))

        col1, col2 = st.columns(2)
        with col1:
            st.image(image, caption="Uploaded Image", use_column_width=True)
        with col2:
            st.image(str(output_image_path), caption="Detected Fractures", use_column_width=True)
        st.write(f"Saved to: `{output_image_path}`")
    else:
        st.error("No output images found!")
