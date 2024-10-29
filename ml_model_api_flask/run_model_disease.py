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

# Load the model
model_potato = load_model('potato_model.keras')
model_strawberry = load_model('strawberry_model.keras')
model_apple = load_model('apple_model.keras')
model_cherry = load_model('cherry_model.keras')
model_corn = load_model('corn_model.keras')
model_grape = load_model('grape_model.keras')
model_tomato = load_model('tomato_model.keras')


class_labels_potato = ['Potato_EarlyBlight', 'Healthy', 'Potato_LateBlight']
class_labels_corn = ['Corn_CommonRust', 'Corn_GrayLeafSpot', 'Healthy', 'Corn_NorthernLeafBlight']
class_labels_cherry = ['Cherry(including_sour)_Powderymildew', 'Healthy']
class_labels_tomato = ['Tomato_Bacterialspot', 'Tomato_Earlyblight', 'Tomato_Lateblight', 'Tomato_LeafMold', 'Tomato_Septorialeafspot', 'Tomato_SpidermitesTwospottedspidermite', 'Tomato_TargetSpot', 'Tomato_TomatoYellowLeafCurlVirus', 'Tomato_Tomatomosaicvirus']
class_labels_grape = ['Grape_Black_rot', 'Grape_Esca(Black-Measles)', 'Grape_Leafblight(Isariopsis-LeafSpot)', 'Grape_healthy']
class_labels_strawberry = ['Strawberry_Leafscorch', 'Healthy']
class_labels_apple = ['Apple_Apple-scab', 'Apple_Black-rot', 'Apple_Cedar-apple-rust', 'Healthy']


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

@app.route('/predict/potato', methods=['POST'])
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
            img_array = preprocess_image(image,(256,256))
            img_array = img_array*255.0
            # Predict the class
            predictions = model_potato.predict(img_array)

            # Extract the highest prediction
            max_index = np.argmax(predictions)
            predicted_class = class_labels_potato[max_index]
            prompt = ""

            if predicted_class != 'Healthy':
                 crop, disease= predicted_class.split('_')
                 prompt = f"I have an {crop} that is affected by {disease}. Please provide a list of 5 effective local remedies or cures that farmers can use to manage or treat this disease. The remedies should be practical, easily accessible, and cost-effective for farmers. Additionally, include a list of 4 general medicinal treatments (chemical or biological) that are commonly recommended for treating {disease}. Provide all information in bullet points."
                 response = get_gemini_response("AIzaSyA4_k9WkCaP9zT_z5Bbf82nfTk-tNB5FRE", prompt)
            else:
                response = "Your crop is healthy"


            return jsonify({
                "prompt": prompt,
                "max_index": int(max_index),
                "disease": predicted_class,
                "response":response
            
            }), 200

        except Exception as e:
            return jsonify({'error': str(e)}), 500

    return jsonify({'error': 'Unknown error occurred'}), 500

@app.route('/predict/strawberry', methods=['POST'])
def strawberry():
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
            predictions = model_strawberry.predict(img_array)

            # Extract the highest prediction
            max_index = np.argmax(predictions)
            predicted_class = class_labels_strawberry[max_index]
            prompt = ""

            if predicted_class != 'Healthy':
                 crop, disease= predicted_class.split('_')
                 prompt = f"I have an {crop} that is affected by {disease}. Please provide a list of 5 effective local remedies or cures that farmers can use to manage or treat this disease. The remedies should be practical, easily accessible, and cost-effective for farmers. Additionally, include a list of 4 general medicinal treatments (chemical or biological) that are commonly recommended for treating {disease}. Provide all information in bullet points."
                 response = get_gemini_response("AIzaSyA4_k9WkCaP9zT_z5Bbf82nfTk-tNB5FRE", prompt)
            else:
                response = "Your crop is healthy"


            return jsonify({
                "prompt": prompt,
                "max_index": int(max_index),
                "disease": predicted_class,
                "response":response
            
            }), 200

        except Exception as e:
            return jsonify({'error': str(e)}), 500

    return jsonify({'error': 'Unknown error occurred'}), 500

@app.route('/predict/tomato', methods=['POST'])
def tomato():
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
            predictions = model_tomato.predict(img_array)

            # Extract the highest prediction
            max_index = np.argmax(predictions)
            predicted_class = class_labels_tomato[max_index]
            prompt = ""

            if predicted_class != 'Healthy':
                 crop, disease= predicted_class.split('_')
                 prompt = f"I have an {crop} that is affected by {disease}. Please provide a list of 5 effective local remedies or cures that farmers can use to manage or treat this disease. The remedies should be practical, easily accessible, and cost-effective for farmers. Additionally, include a list of 4 general medicinal treatments (chemical or biological) that are commonly recommended for treating {disease}.Also tell the me the appropriate conditions for soil type, temperature,water needed for {crop} . Provide all information in bullet points."
                 response = get_gemini_response("AIzaSyA4_k9WkCaP9zT_z5Bbf82nfTk-tNB5FRE", prompt)
            else:
                response = "Your crop is healthy"


            return jsonify({
                "prompt": prompt,
                "max_index": int(max_index),
                "disease": predicted_class,
                "response":response
            
            }), 200

        except Exception as e:
            return jsonify({'error': str(e)}), 500

    return jsonify({'error': 'Unknown error occurred'}), 500

@app.route('/predict/corn', methods=['POST'])
def corn():
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
            predictions = model_corn.predict(img_array)

            # Extract the highest prediction
            max_index = np.argmax(predictions)
            predicted_class = class_labels_corn[max_index]
            prompt = ""

            if predicted_class != 'Healthy':
                 crop, disease= predicted_class.split('_')
                 prompt = f"I have an {crop} that is affected by {disease}. Please provide a list of 5 effective local remedies or cures that farmers can use to manage or treat this disease. The remedies should be practical, easily accessible, and cost-effective for farmers. Additionally, include a list of 4 general medicinal treatments (chemical or biological) that are commonly recommended for treating {disease}. Provide all information in bullet points."
                 response = get_gemini_response("AIzaSyA4_k9WkCaP9zT_z5Bbf82nfTk-tNB5FRE", prompt)
            else:
                response = "Your crop is healthy"


            return jsonify({
                "prompt": prompt,
                "max_index": int(max_index),
                "disease": predicted_class,
                "response":response
            
            }), 200

        except Exception as e:
            return jsonify({'error': str(e)}), 500

    return jsonify({'error': 'Unknown error occurred'}), 500

@app.route('/predict/grape', methods=['POST'])
def grape():
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
            predictions = model_grape.predict(img_array)

            # Extract the highest prediction
            max_index = np.argmax(predictions)
            predicted_class = class_labels_grape[max_index]
            prompt = ""

            if predicted_class != 'Healthy':
                 crop, disease= predicted_class.split('_')
                 prompt = f"I have an {crop} that is affected by {disease}. Please provide a list of 5 effective local remedies or cures that farmers can use to manage or treat this disease. The remedies should be practical, easily accessible, and cost-effective for farmers. Additionally, include a list of 4 general medicinal treatments (chemical or biological) that are commonly recommended for treating {disease}. Provide all information in bullet points."
                 response = get_gemini_response("AIzaSyA4_k9WkCaP9zT_z5Bbf82nfTk-tNB5FRE", prompt)
            else:
                response = "Your crop is healthy"


            return jsonify({
                "prompt": prompt,
                "max_index": int(max_index),
                "disease": predicted_class,
                "response":response
            
            }), 200

        except Exception as e:
            return jsonify({'error': str(e)}), 500

    return jsonify({'error': 'Unknown error occurred'}), 500

@app.route('/predict/apple', methods=['POST'])
def apple():
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
            predictions = model_apple.predict(img_array)

            # Extract the highest prediction
            max_index = np.argmax(predictions)
            predicted_class = class_labels_apple[max_index]
            prompt = ""

            if predicted_class != 'Healthy':
                 crop, disease= predicted_class.split('_')
                 prompt = f"I have an {crop} that is affected by {disease}. Please provide a list of 5 effective local remedies or cures that farmers can use to manage or treat this disease. The remedies should be practical, easily accessible, and cost-effective for farmers. Additionally, include a list of 4 general medicinal treatments (chemical or biological) that are commonly recommended for treating {disease}. Provide all information in bullet points."
                 response = get_gemini_response("AIzaSyA4_k9WkCaP9zT_z5Bbf82nfTk-tNB5FRE", prompt)
            else:
                response = "Your crop is healthy"


            return jsonify({
                "prompt": prompt,
                "max_index": int(max_index),
                "disease": predicted_class,
                "response":response
            
            }), 200

        except Exception as e:
            return jsonify({'error': str(e)}), 500

    return jsonify({'error': 'Unknown error occurred'}), 500

@app.route('/predict/cherry', methods=['POST'])
def cherry():
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
            predictions = model_cherry.predict(img_array)

            # Extract the highest prediction
            max_index = np.argmax(predictions)
            predicted_class = class_labels_cherry[max_index]
            prompt = ""

            if predicted_class != 'Healthy':
                 crop, disease= predicted_class.split('_')
                 prompt = f"I have an {crop} that is affected by {disease}. Please provide a list of 5 effective local remedies or cures that farmers can use to manage or treat this disease. The remedies should be practical, easily accessible, and cost-effective for farmers. Additionally, include a list of 4 general medicinal treatments (chemical or biological) that are commonly recommended for treating {disease}. Provide all information in bullet points."
                 response = get_gemini_response("AIzaSyA4_k9WkCaP9zT_z5Bbf82nfTk-tNB5FRE", prompt)
            else:
                response = "Your crop is healthy"


            return jsonify({
                "prompt": prompt,
                "max_index": int(max_index),
                "disease": predicted_class,
                "response":response
            
            }), 200

        except Exception as e:
            return jsonify({'error': str(e)}), 500

    return jsonify({'error': 'Unknown error occurred'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=3000)