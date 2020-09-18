import React from "react";
import { constants } from "../constants";
import { postCall, getCall, login, deleteCall, putCall } from "./Common2";
import { message } from "antd";

export const Login_API = (params: any, callback: any) => {
  login(constants.login, params)
    .then((response: any) => {
      // console.log(response)
      const responseData = response.data;
      response.status == 200 && callback(responseData);
    })
    .catch((error: any) => {
      message.error("Some error occurred !!!");
    });
};

export const TableData_API = (
  child: any,
  params: any,
  callback: any,
  access_token: any
) => {
  getCall(constants.all + child, access_token)
    .then((response: any) => {
      const responseData = response.data;
      response.status == 200 && callback(responseData);
    })
    .catch((error: any) => {
      message.error("Some error occurred !!!");
    });
};
export const FormDataSave_API = (
  name: any,
  params: any,
  callback: any,
  access_token: any
) => {
  postCall(constants[name], params, access_token)
    .then((response: any) => {
      // console.log(response)
      const responseData = response.data;
      response.status == 200 && callback(responseData);
    })
    .catch((error: any) => {
      message.error("Some error occurred !!!");
    });
};
export const FormDataDelete_API = (
  name: any,
  params: any,
  callback: any,
  access_token: any
) => {
  deleteCall(constants[name] + "/" + params, access_token)
    .then((response: any) => {
      console.log(response);
      const responseData = response.data;
      response.status == 204 && callback(responseData);
    })
    .catch((error: any) => {
      message.error("Some error occurred !!!");
    });
};
export const FormDataUpdate_API = (
  name: any,
  id: any,
  params: any,
  callback: any,
  access_token: any
) => {
  putCall(constants[name] + "/" + id, params, access_token)
    .then((response: any) => {
      console.log(response);
      const responseData = response.data;
      response.status == 200 && callback(responseData);
    })
    .catch((error: any) => {
      message.error("Some error occurred !!!");
    });
};
