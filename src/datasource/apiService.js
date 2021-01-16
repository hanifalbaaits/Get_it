import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import XMLParser from 'react-xml-parser';
import { sha256 } from 'react-native-sha256';
import store from '../redux/configureStore';
import { apiSessionCreate } from './authRepo';

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

const getNewSessionToken = () => {
  return new Promise(async function (resolve, reject){
    try {
      const credential = store().getState().auth.credential;
      let plainText = credential.email+credential.password;
      const signature = await sha256(plainText);
      let payload = {
        email: credential.email,
        signature: signature
      }
      apiSessionCreate(payload).then((res) => {
        let xmlRes = new XMLParser().parseFromString(res.data);
        let sessionResult = xmlRes.getElementsByTagName("Session_CreateResult");
        if(sessionResult[0].value.includes("0")){
          let newSessionToken = sessionResult[0].value.split('|');
          AsyncStorage.setItem("@SessionToken", newSessionToken);
          resolve(newSessionToken);
        } else {
          reject(new Error("Refresh token failed."))
        }
      }).catch((err) => {
        reject(err);
      })
    } catch(err) {
      reject(err);
    }
  })
}

instance.interceptors.response.use(async response => {
  if(response.data.includes("99|session id expired")){
    const userToken = await getNewSessionToken().catch(e => console.log("get token error", e))
    console.log(userToken);
  }
  return response;
})

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