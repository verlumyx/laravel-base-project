import axios from 'axios'

export const axiosInstance = axios.create();

export const postAxioApi = async (url, params) => {
  return await axiosInstance.post(url, params, {headers: {'authorization': getToken()}});
}

export const getAxioApi = async (url) => {
  return await axiosInstance.get(url, {headers: {'authorization': getToken()}});
}

export const putAxioApi = async (url, params) => {
  return await axiosInstance.put(url, params, {headers: {'authorization': getToken()}});
}

export const deleteAxioApi = async (url) => {
  return await axiosInstance.delete(url, {headers: {'authorization': getToken()}});
}

const getToken = () => {
  return `Bearer ${localStorage.getItem('x-token')}` ?? '';
}