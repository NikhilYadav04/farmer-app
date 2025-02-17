import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const uploadMutation = useMutation((formData) => {
  return axios.post('http://localhost:5715/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
});
const handleSubmit = async () => {
  if (!selectedFile) return toast.error('No file selected');

  const formData = new FormData();
  formData.append('image', selectedFile);

  uploadMutation.mutate(formData, {
    onSuccess: (data) => {
      toast.success('Upload successfully');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Upload failed');
    },
  });
};
