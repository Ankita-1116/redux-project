import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import { useSelector } from "react-redux";

// const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBkaWdpc2hhYWxhLmNvbSIsInNjb3BlcyI6IlJPTEVfQURNSU4sUk9MRV9TVVBFUkFETUlOIiwiaWF0IjoxNjAwMDE4OTkxLCJleHAiOjE2MDAxMDUzOTF9.P_0BxLqVFM2tewbyC3H1rfOgut6LWgh00c1zZX2UrEY");

export const login = (url: any, data: any) => {
  return axios.post(url, data);
};
export const postCall = (url: any, data: any, access_token: any) => {
  return axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
export const deleteCall = (url: any, access_token: any) => {
  return axios({
    method: "delete",
    url: url,
    headers: { Authorization: `Bearer ${access_token}` },
  });
};
export const putCall = (url: any, data: any, access_token: any) => {
  return axios({
    method: "put",
    url: url,
    data: data,
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

export const getCall = (url: any, access_token: any) => {
  // return AsyncStorage.getItem('token', (err, result) => {
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  // });
};
