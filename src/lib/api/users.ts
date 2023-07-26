import axiosInstance from 'lib/axios';
import { toast } from 'react-toastify';
export const createUser = async (payload: { name: string; email: string; password: string }) => {
  try {
    const response = await axiosInstance.post('/users', payload);

    return response.data;
  } catch (error) {
    const err: any = error;

    toast.error(err?.response?.data?.error);
    throw Error(err?.response?.data?.error);
  }
};
