import axios from 'axios';

const API_URL = 'http://13.229.215.2:13001';

export const methodService = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const config = {
  baseURL: API_URL,
  timeout: 10000,
  headers: {'Content-Type': 'text/xml'}
}

const instance = axios.create(config);

export const apiService = async (url, method, data, params) => {  
  const service = await instance({
    url: url,
    method: method,
    data: data,
    params: params,
    timeout: 15000,
  });
  return service;
};