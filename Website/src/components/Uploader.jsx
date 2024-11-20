import { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./Uploader.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Uploader = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("Upload Image");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false); // Loader state
  const [showResponse, setShowResponse] = useState(false); // To control when to show the response
  const navigate = useNavigate();

  const upload_image = async () => {
    if (!selectedFile) {
      console.error("No file selected");
      toast.error("No file selected", { position: "bottom-center" });
      return;
    }

    const body = JSON.parse(localStorage.getItem("userdata"));
    const formData = new FormData();
    // formData.append("name", body.name);
    // formData.append("phone", body.phone);
    formData.append("image", selectedFile);
    const token = JSON.parse(localStorage.getItem("token")).token;

    try {
      const response = await axios.post(
        "http://localhost:2000/store/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
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
      console.error("No file selected");
      toast.error("No file selected", { position: "bottom-center" });
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    const storedData = JSON.parse(localStorage.getItem("itemdata"));
    const item = storedData.item;

    try {
      const response = await axios.post(
        `http://localhost:3000/predict/${item}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data.disease);
      console.log(response.data.response);

      localStorage.setItem(
        "plant",
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
      const body = JSON.parse(localStorage.getItem("userdata"));
      const token = JSON.parse(localStorage.getItem("token")).token;
      const response = await axios.post(
        `http://localhost:2000/store/store-response`,
        {
          // name: body.name,
          // phone: body.phone,
          response: response_gemini,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
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
      console.error("No response received:", error.request);
    } else {
      console.error("Error:", error.message);
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
          JSON.parse(localStorage.getItem("plant") || "{}").disease
        );
      } else {
        toast.error("No file selected", { position: "bottom-center" });
      }

      setShowResponse(true);
    } finally {
      setLoading(false);
    }
  };

  let response = JSON.parse(localStorage.getItem("plant") || "{}").cure || "";

  let formattedResponse = response.replace(/\.\s+/g, ".\n");
  let responseArray = formattedResponse.split("**\n");
  let newResponse = "";

  for (let i = 0; i < responseArray.length; i++) {
    if (i === 0 || i % 2 !== 1) {
      newResponse += responseArray[i];
    } else {
      newResponse += "<b>" + responseArray[i] + "</b>";
    }
  }

  let newResponse2 = newResponse.split("*").join("<br>");
  let formattedResponseWithIndentation = newResponse2
    .split("   ")
    .map((word) => `<span style="margin-left: 20px;">${word}</span>`)
    .join("");

  return (
    <>
      <div className="mx-5 my-[100px] flex flex-row flex-wrap justify-center lg:justify-between items-center rounded-3xl p-5 border border-transparent hover:border-green-500 gap-3">
        <h1 className="text-4xl text-center font-bold w-1/2">
          Upload Crop images and get{" "}
          <span className="bg-gradient-to-r from-green-900 to-green-600 text-transparent bg-clip-text">
            disease prediction
          </span>
        </h1>
        <main className="border border-transparent pt-10 px-10 rounded-3xl bg-black/10 flex flex-col gap-4">
          <form
            action=""
            onClick={() => document.querySelector(".input-field").click()}
            className="flex flex-col items-center justify-center border border-dashed w-[500px] h-[300px] cursor-pointer rounded-3xl"
          >
            <input
              type="file"
              accept="image/*"
              className="input-field"
              hidden
              onChange={({ target: { files } }) => {
                if (files[0]) {
                  setFileName(files[0].name);
                  setImage(URL.createObjectURL(files[0]));
                  setSelectedFile(files[0]);
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
          <section className="my-3 mx-0 flex justify-between items-center py-1 px-1 rounded-3xl border">
            <AiFillFileImage size={25} className="ml-3" />
            <span className="flex flex-row justify-center items-center gap-1">
              {fileName}
              <MdDelete
                size={45}
                className="p-3 rounded-full cursor-pointer"
                onClick={() => {
                  setFileName("No selected file");
                  setImage(null);
                  setSelectedFile(null);
                }}
              />
            </span>
          </section>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-green-500 text-white py-3 px-10 rounded-lg mb-2 mx-auto"
          >
            Submit
          </button>
          <Dropdown />
        </main>
      </div>

      {/* Loader */}
      {loading && (
        <div className="flex justify-center items-center">
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
        <div className="flex-1 min-h-[80%] mb-5 mt-1 border border-neutral-600 rounded-3xl border-neutral-700 overflow-container bg-gradient-to-r py-[0.2rem] px-[0.2rem] w-[60%] mx-auto">
          <div className="flex-1 min-h-[100%] relative bg-neutral-900 rounded-3xl overflow-container">
            <div className="flex items-center justify-between text-base py-1 px-1"></div>
            <div className="max-w-5xl mx-auto">
              <div className="py-0 px-[5%] max-h-[70vh] overflow-y-auto result">
                <div className="my-10 mx-0 flex flex-col items-start gap-5 text-neutral-400">
                  <h1>
                    Predicted Disease:{" "}
                    {JSON.parse(localStorage.getItem("plant") || "{}").disease}
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
