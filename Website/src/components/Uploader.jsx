import { useState } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Dropdown from './Dropdown';
import './Uploader.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  setImage,
  setFileName,
  setSelectedFile,
  resetUpload,
} from '../hooks/uploaderSlice';

const Uploader = () => {
  // const [image, setImage] = useState(null);
  // const [fileName, setFileName] = useState('Upload Image');
  // const [selectedFile, setSelectedFile] = useState(null);

  const dispatch = useDispatch();
  const image = useSelector((state) => state.uploader.image);
  const fileName = useSelector((state) => state.uploader.fileName);
  const selectedFile = useSelector((state) => state.uploader.selectedFile);

  const [loading, setLoading] = useState(false); // Loader state
  const [showResponse, setShowResponse] = useState(false); // To control when to show the response
  const navigate = useNavigate();

  const upload_image = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      toast.error('No file selected', { position: 'bottom-center' });
      return;
    }

    const body = JSON.parse(localStorage.getItem('userdata'));
    const formData = new FormData();
    // formData.append("name", body.name);
    // formData.append("phone", body.phone);
    formData.append('image', selectedFile);
    const token = JSON.parse(localStorage.getItem('token')).token;

    try {
      const response = await axios.post(
        'http://localhost:2000/store/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + token,
          },
        }
      );
      console.log(response.data.message);
    } catch (error) {
      handleError(error);
    }
  };

  const find_disease = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      toast.error('No file selected', { position: 'bottom-center' });
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    const storedData = JSON.parse(localStorage.getItem('itemdata'));
    const item = storedData.item;

    try {
      const response = await axios.post(
        `http://localhost:3000/predict/${item}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response.data.disease);
      console.log(response.data.response);

      localStorage.setItem(
        'plant',
        JSON.stringify({
          disease: response.data.disease,
          cure: response.data.response,
        })
      );
    } catch (error) {
      handleError(error);
    }
  };

  const upload_response = async (response_gemini) => {
    try {
      const body = JSON.parse(localStorage.getItem('userdata'));
      const token = JSON.parse(localStorage.getItem('token')).token;
      const response = await axios.post(
        `http://localhost:2000/store/store-response`,
        {
          // name: body.name,
          // phone: body.phone,
          response: response_gemini,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      );
      console.log(response.data.message);
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    if (error.response) {
      console.error(error.response.data.message);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error:', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loader
    setShowResponse(false); // Hide the response initially

    try {
      if (selectedFile) {
        await upload_image();
        await find_disease();
        await upload_response(
          JSON.parse(localStorage.getItem('plant') || '{}').disease
        );
      } else {
        toast.error('No file selected', { position: 'bottom-center' });
      }

      setShowResponse(true);
    } finally {
      setLoading(false);
    }
  };

  let response = JSON.parse(localStorage.getItem('plant') || '{}').cure || '';

  let formattedResponse = response.replace(/\.\s+/g, '.\n');
  let responseArray = formattedResponse.split('**\n');
  let newResponse = '';

  for (let i = 0; i < responseArray.length; i++) {
    if (i === 0 || i % 2 !== 1) {
      newResponse += responseArray[i];
    } else {
      newResponse += '<b>' + responseArray[i] + '</b>';
    }
  }

  let newResponse2 = newResponse.split('*').join('<br>');
  let formattedResponseWithIndentation = newResponse2
    .split('   ')
    .map((word) => `<span style="margin-left: 20px;">${word}</span>`)
    .join('');

  return (
    <>
      <div className="mx-5 flex flex-row flex-wrap items-center justify-center gap-3 rounded-3xl border border-transparent p-5 hover:border-green-500 lg:justify-between">
        <h1 className="w-1/2 text-center text-4xl font-bold">
          Upload Crop images and get{' '}
          <span className="bg-gradient-to-r from-green-900 to-green-600 bg-clip-text text-transparent">
            disease prediction
          </span>
        </h1>
        <main className="flex flex-col gap-4 rounded-3xl border border-transparent bg-black/10 px-10 pt-10">
          <form
            action=""
            onClick={() => document.querySelector('.input-field').click()}
            className="flex h-[300px] w-[500px] cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed"
          >
            <input
              type="file"
              accept="image/*"
              className="input-field"
              hidden
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  dispatch(setFileName(file.name));
                  dispatch(setImage(URL.createObjectURL(file)));
                  dispatch(setSelectedFile(file));
                }
              }}
            />
            {image ? (
              <img src={image} width={200} height={200} alt="fileName" />
            ) : (
              <>
                <MdCloudUpload size={60} />
                <p>Browse files to upload</p>
              </>
            )}
          </form>
          <section className="mx-0 my-3 flex items-center justify-between rounded-3xl border px-1 py-1">
            <AiFillFileImage size={25} className="ml-3" />
            <span className="flex flex-row items-center justify-center gap-1">
              {fileName}
              <MdDelete
                size={45}
                className="cursor-pointer rounded-full p-3"
                onClick={() => {
                  setFileName('No selected file');
                  setImage(null);
                  setSelectedFile(null);
                }}
              />
            </span>
          </section>
          <Dropdown />
          <div className="mx-auto">
            <Button type="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </main>
      </div>

      {/* Loader */}
      {loading && (
        <div className="flex items-center justify-center">
          <div className="loader-wrapper">
            <span className="loader">
              <span className="loader-inner"></span>
            </span>
          </div>
          <p>Processing... Please wait</p>
        </div>
      )}

      {/* Response */}
      {showResponse && (
        <div className="overflow-container mx-auto mb-5 mt-1 min-h-[80%] w-[60%] flex-1 rounded-3xl border border-neutral-600 bg-gradient-to-r px-[0.2rem] py-[0.2rem]">
          <div className="overflow-container relative min-h-[100%] flex-1 rounded-3xl bg-neutral-900">
            <div className="flex items-center justify-between px-1 py-1 text-base"></div>
            <div className="mx-auto max-w-5xl">
              <div className="result max-h-[70vh] overflow-y-auto px-[5%] py-0">
                <div className="mx-0 my-10 flex flex-col items-start gap-5 text-neutral-400">
                  <h1>
                    Predicted Disease:{' '}
                    {JSON.parse(localStorage.getItem('plant') || '{}').disease}
                  </h1>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: formattedResponseWithIndentation,
                    }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default Uploader;
