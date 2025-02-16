import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  image: null,
  fileName: 'Upload Image',
  selectedFile: null,
};

const uploaderSlice = createSlice({
  name: 'uploader',
  initialState,
  renders: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setFileName: (state, action) => {
      state.fileName = action.payload;
    },
    setSelectedFile: (state, action) => {
      state.selectedFile = action.payload;
    },
    resetUpload: () => initialState,
  },
});

export const { setImage, setFileName, setSelectedFile, resetUpload } =
  uploaderSlice.actions;
export default uploaderSlice.reducer;
