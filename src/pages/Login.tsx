import React, { useState } from 'react'
import Form from '../components/Form';
import checkValidation from '../services/Validation';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';

export default function Login() {

    const [mobileNumber, setMobile] = useState('');
    const [username, setUserName] = useState('');
    const [usernameErrorMsz, setUserNameErrorMsz] = useState(' ');
    const [requiredField, setRequiredField] = useState(false);
    const [mobileErrorMsz, setMobileErrorMsz] = useState(' ');
    const history = useHistory()

    const [password, setPassword] = useState('');
    const [passwordErrorMsz, setPasswordErrorMsz] = useState(' ');

    const setValueFromChild = (name: any, value: any, required: any) => {
        console.log(name, value, required)
        if (name == "mobileNumber") {
            setMobile(value);
            required && setMobileErrorMsz(checkValidation.setErrorMsz('mobileNumber', value));
        }
        if (name == "username") {
            setUserName(value);
            console.log(checkValidation.setErrorMsz('blank', value))
            required && setUserNameErrorMsz(checkValidation.setErrorMsz('blank', value));
        }
        if (name == "password") {
            setPassword(value);
            required && setPasswordErrorMsz(checkValidation.setErrorMsz('blank', value));
        }
    }
    const getLogin = () => {
        setMobileErrorMsz(checkValidation.setErrorMsz('mobileNumber', mobileNumber));
        setPasswordErrorMsz(checkValidation.setErrorMsz('blank', password));
        setUserNameErrorMsz(checkValidation.setErrorMsz('blank', username));
        console.log('object', username)
        if ((username == '' && password == '')) {

        }
        else if (username == 'admin' && password == '123456') {
            history.push('/userlist');
        }
        else if (username == 'reception' && password == '654321') {
            history.push('/qrscan');
        }
        else {
                setPasswordErrorMsz('Please check your credentials!!!')
        }
        // if (mobileErrorMsz == '' && passwordErrorMsz == '') {
        //     var formData = new FormData();
        //     formData.append('mobileNumber', mobileNumber);
        //     formData.append('password', password);
        //     console.log(JSON.stringify(formData))
        // }
    }
    const gotoRegister = () => {
        history.push('/qrscan');
    }
    return <>
        <Layout back={false} tabs={false}>
            <IonContent>
                <IonGrid>
                    <IonRow class="ion-justify-content-start">
                        <IonCol size="12">
                            {/* <Form name="inputText" label="email or Phone" required={false} callback={setValueFromChild} returnName="lastName"
                                errorMsz={mobileErrorMsz} /> */}
                            <Form name="inputText" label="Username" required={true} callback={setValueFromChild} returnName="username" errorMsz={usernameErrorMsz} />
                        </IonCol>
                        <IonCol size="12">
                            <Form name="inputText" label="Security Pin" required={true} callback={setValueFromChild} returnName="password" errorMsz={passwordErrorMsz} />
                        </IonCol>
                        <IonCol size="12">
                            <Form name="button" color="secondary" title="Login" callback={getLogin} />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </Layout>
    </>
}
