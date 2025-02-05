# Model Setup and Running Instructions

This project provides different ways to run inference using the YOLOv11 bone fracture detection model. Below are the instructions for setting up and running the model with each available approach.

---

## Prerequisites
- **Python 3.x**: Ensure you have Python 3 installed.
- **Required Packages**: Install the necessary dependencies using:
    ```bash
    pip install -r requirements.txt
    ```
- **Model File**: Place the YOLOv11 model file (`yolov11_bone_fracture.pt`) in the project root or update the `MODEL_PATH` in the code if located elsewhere.

---

## Running via Command-Line Interface (main.py)
- **Purpose**: Provides a simple GUI using Tkinter for file selection and displays the inference result using Matplotlib.
- **Usage**:
    1. Run the script:
         ```bash
         python main.py
         ```
    2. A file dialog will appear. Select an X-ray image (supported types: JPEG, PNG).
    3. The script will run the model on the selected image, save the result, and open a Matplotlib window to display the output.

---

## Running the FastAPI Server (fapp.py) and Testing with index.html
- **Purpose**: Launches a FastAPI server that provides an API endpoint for running inference. The endpoint accepts an image file and returns the original image, processed image (with bounding boxes), and the segmentation mask (all encoded as Base64).
- **Usage**:
    1. Start the FastAPI app by running:
         ```bash
         python fapp.py
         ```
         Alternatively, you can use:
         ```bash
         uvicorn fapp:app --host 0.0.0.0 --port 8000
         ```
    2. For testing the API endpoint, open the provided `index.html` in a web browser.
    3. Use the interface in `index.html` to select an X-ray image. The page will send a POST request to the `/predict` endpoint.
    4. The API will return a JSON response containing the inference results, which will be displayed on the page.

---

## Running the Streamlit App (sapp.py)
- **Purpose**: Provides a user-friendly web interface using Streamlit to upload an image, run inference, and display both the original and the processed images.
- **Usage**:
    1. Launch the Streamlit app:
         ```bash
         streamlit run sapp.py
         ```
    2. Open the provided URL in your browser.
    3. Upload an X-ray image using the file uploader.
    4. The app runs inference on the uploaded image, shows the original and output images side-by-side, and displays the result status.

---

## Notes
- **Model Path**: Ensure that the `MODEL_PATH` variable in each script correctly points to your `yolov11_bone_fracture.pt` file.
- **Confidence Threshold**: The inference confidence is set to `0.25` by default in the scripts. Adjust the threshold if needed.
- **Output Management**: The outputs (predicted images) are saved to a directory (e.g., `predictions` for the Streamlit app and the default output folder for `main.py`). Check and ensure write permissions for these directories.
- **Image Formats**: The scripts are configured to work with common image formats such as JPEG and PNG.

By following these steps, you can set up and run the model using your preferred interface.