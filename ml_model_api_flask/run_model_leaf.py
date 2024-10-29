from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from gemini import get_gemini_response
import numpy as np
import io
from PIL import Image
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

leaf_model = load_model("leaf_detection_model.h5");

def preprocess_image(image_data,image_size):
    """Converts the image byte data into a format the model can process."""
    img = Image.open(io.BytesIO(image_data))  # Open image from byte stream

    # Ensure the image has 3 channels (RGB)
    if img.mode != 'RGB':
        img = img.convert('RGB')

    img = img.resize(image_size)  # Resize image to model's expected size
    img_array = img_to_array(img) 
    # Convert image to array (shape: 256x256x3)
    img_array = np.expand_dims(img_array, axis=0) 
    img_array = img_array / 255.0
    # Normalize the image if needed (e.g., img_array = img_array / 255.0)

    return img_array


@app.route('/predict/leaf', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['file']  # Get the file from the request

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file:
        try:
            # Clear and fresh read for every API call
            image = file.read()  # Read the image file as byte stream

            # Preprocess the image for prediction
            img_array = preprocess_image(image,(128,128))
            img_array = img_array*255.0
            # Predict the class
            predictions = leaf_model.predict(img_array)

            # Extract the highest prediction
            if predictions[0][0] > 0.5:
                return jsonify({
                    "response": "Prediction: Class 1 (Not Leaf)",
                    "predict":  float(predictions[0][0] )
                }), 200
            else:
                return jsonify({
                    "response": "Prediction: Class 0 (Leaf)",
                    "predict":  float(predictions[0][0] )
                }), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 500

    return jsonify({'error': 'Unknown error occurred'}), 500

if __name__ == '__main__':
    app.run(debug=True,port= 3000)