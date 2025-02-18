import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';
import axios from 'axios';
import Dropdown from './Dropdown';
// import { toast } from 'react-toastify';
import Button from '../ui/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
// import { useForm } from 'react-hook-form';
import {
  setImage,
  setFileName,
  setSelectedFile,
  resetUpload,
} from '../hooks/uploaderSlice';
import { useRef } from 'react';

const Uploader = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const image = useSelector((state) => state.uploader.image);
  const fileName = useSelector((state) => state.uploader.fileName);
  const selectedFile = useSelector((state) => state.uploader.selectedFile);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    dispatch(setImage(file));
    dispatch(setFileName(file.name));
  };

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
            onClick={handleImageClick}
            className="flex h-[300px] w-[500px] cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed"
          >
            <input
              type="file"
              ref={inputRef}
              hidden
              onChange={handleImageChange}
            />
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                width={200}
                height={200}
                alt={fileName}
              />
            ) : (
              <>
                <MdCloudUpload
                  size={60}
                  onClick={() => dispatch(resetUpload())}
                />
                <p>Browse files to upload</p>
              </>
            )}
          </form>
          <section className="mx-0 my-3 flex items-center justify-between rounded-3xl border px-1 py-1">
            <AiFillFileImage size={25} className="ml-3" />
            <span className="flex flex-row items-center justify-center gap-1">
              {fileName || 'No selected file'}
              <MdDelete
                size={45}
                className="cursor-pointer rounded-full p-3"
                onClick={() => dispatch(resetUpload())}
              />
            </span>
          </section>
          <Dropdown />
          <div className="mx-auto">
            <Button type="primary">Submit</Button>
          </div>
        </main>
      </div>

      {/* {uploadMutation.isLoading && (
        <div className="flex items-center justify-center">
          <div className="loader-wrapper">
            <span className="loader">
              <span className="loader-inner"></span>
            </span>
          </div>
          <p>Processing... Please wait</p>
        </div>
      )} */}
    </>
  );
};

export default Uploader;
