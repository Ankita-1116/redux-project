import React from 'react'
import { getCallByParamsInUrl, postCall, getCall } from './Common';
import { constants } from '../Models/Contants';
import CustomToast from '../components/CustomToast';


export const roamerSave_API = (params: any, callback: any) => {
    postCall(constants.roamersSave, params)
        .then((response: any) => {
            const responseData = response.data;
            response.status == "200" && callback('success', responseData);
        })
        .catch((error: any) => {
            console.log(error)
            callback('error', error.message)
        })
}
