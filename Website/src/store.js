import { configureStore } from '@reduxjs/toolkit';
import uploaderReducer from './hooks/uploaderSlice';

export const store = configureStore({
  reducer: {
    uploader: uploaderReducer,
  },
});
