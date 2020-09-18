import React from "react";
import { postCall, getCall, login } from "./Common";
import { constants } from "../Models/Contants";
import CustomToast from "../components/CustomToast";
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

export const roamerSave_API = (
  params: any,
  callback: any,
  access_token: any
) => {
  postCall(constants.roamersSave, params, access_token)
    .then((response: any) => {
      const responseData = response.data;
      response.status == "200" && callback("success", responseData);
    })
    .catch((error: any) => {
      console.log(error);
      message.error("Some error occurred !!!");
    });
};
export const roamerList_API = (
  params: any,
  child: any,
  callback: any,
  access_token: any
) => {
  getCall(constants.roamersList, access_token)
    .then((response: any) => {
      const responseData = response.data;
      response.status == "200" && callback("success", responseData);
    })
    .catch((error: any) => {
      console.log(error);
      message.error("Some error occurred !!!");
    });
};
