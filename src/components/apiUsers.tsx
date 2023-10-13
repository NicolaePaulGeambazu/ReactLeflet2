import axios, { AxiosError } from 'axios';

interface ApiResponse<T = any> {
  data?: T;
  error?: string;
}

const handleApiError = (error: AxiosError<any>): ApiResponse<undefined> => {
    console.log(error);
    if(error?.message) {
    return { error: `Server responded with status ${error.message}` };
    }
  if (error.response) {
    // The request was made, but the server responded with a status code that falls out of the range of 2xx
    return { error: `Server responded with status ${error.response.status}` };
  } else if (error.request) {
    // The request was made, but no response was received
    return { error: 'No response received from the server' };
  } else {
    // Something happened in setting up the request that triggered an Error
    return { error: 'Error setting up the request' };
  }
};

export const getAllData = async (url: string): Promise<ApiResponse> => {
  try {
    const response = await axios.get(url);
    return { data: response.data };
  } catch (error) {
    return handleApiError(error as AxiosError<any>);
  }
};

export const createData = async (url: string, data: any): Promise<ApiResponse> => {
  try {
    const response = await axios.post(url, data);
    return { data: response.data };
  } catch (error) {
    return handleApiError(error as AxiosError<any>);
  }
};

export const updateData = async (id: number, url: string, data: any): Promise<ApiResponse> => {
  try {
    const response = await axios.put(`${url}/${id}`, data);
    return { data: response.data };
  } catch (error) {
    return handleApiError(error as AxiosError<any>);
  }
};

export const deleteData = async (id: number, url: string): Promise<ApiResponse> => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return { data: response.data };
  } catch (error) {
    return handleApiError(error as AxiosError<any>);
  }
};
