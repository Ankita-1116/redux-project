import React, { useState, useEffect } from 'react'
import Tabs from '../components/Tabs'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { IonContent, IonGrid, IonRow, IonCol, IonToast, IonLoading } from '@ionic/react'
import Form from '../components/Form'
import { roamerSave_API } from '../services/Services'
import CustomToast from '../components/CustomToast'
import checkValidation from '../services/Validation'
import { Toast } from '../Models/Contants'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'

function UserInfo() {
    const dispatch = useDispatch()

    console.log("QR cOde")
    useEffect(() => {
        dispatch({type:"HEADER_OBJ",header:{rootPage:false,heading:"Please enter your details"}})
    }, [])

    const history = useHistory()
    const [showLoading, setShowLoading] = useState(false);

    const [mobileNumber, setMobile] = useState('');
    const [mobileErrorMsz, setMobileErrorMsz] = useState(' ');

    const [email, setEmail] = useState('');
    const [emailErrorMsz, setEmailErrorMsz] = useState(' ');

    const [firstName, setFirstName] = useState('');
    const [firstNameErrorMsz, setFirstNameErrorMsz] = useState(' ');

    const [lastName, setLastName] = useState('');
    const [lastNameErrorMsz, setLastNameErrorMsz] = useState(' ');

    const [zipCode, setZipcode] = useState(0);
    const [zipCodeErrorMsz, setZipCodeErrorMsz] = useState(' ');

    const [userFormData, setUserFormData] = useState({});

    const setValueFromChild = (name: any, value: any, required: any) => {
        if (name == "firstName") {
            setFirstName(value);
            required && setFirstNameErrorMsz(checkValidation.setErrorMsz('blank', value));
        }
        if (name == "lastName") {
            setLastName(value);
            required && setLastNameErrorMsz(checkValidation.setErrorMsz('blank', value));
        }
        if (name == "email") {
            setEmail(value);
            required && setEmailErrorMsz(checkValidation.setErrorMsz('email', value));
        }
        if (name == "zipCode") {
            setZipcode(value);
            required && setZipCodeErrorMsz(checkValidation.setErrorMsz('zipCode', value));
        }

        if (name == "mobileNumber") {
            setMobile(value);
            required && setMobileErrorMsz(checkValidation.setErrorMsz('mobileNumber', value));
        }

    }
    const getLogin = () => {
        setFirstNameErrorMsz(checkValidation.setErrorMsz('blank', firstName));
        setLastNameErrorMsz(checkValidation.setErrorMsz('blank', lastName));
        setEmailErrorMsz(checkValidation.setErrorMsz('email', email));
        setMobileErrorMsz(checkValidation.setErrorMsz('mobileNumber', mobileNumber));
        setZipCodeErrorMsz(checkValidation.setErrorMsz('zipCode', zipCode));
        if (firstNameErrorMsz == '' && lastNameErrorMsz == '' && emailErrorMsz == '' && mobileErrorMsz == '' && zipCodeErrorMsz == '') {
            var formData = {
                'firstName': firstName,
                'lastName': lastName,
                'email': email,
                'phone': mobileNumber,
                'postCode': zipCode,
                'numVists': 0

            };
            setUserFormData(JSON.stringify(formData));
            setShowLoading(true);
            roamerSave_API(JSON.stringify(formData), onUserRegisterSuccess)
        }
    }

    const onUserRegisterSuccess = (status: any, response: any) => {
        setShowLoading(false);
        history.push('/userData', {
            data: response.data[0]
        });
        setTimeout(() => {
            window.location.href = "/home"
        }, 10000);
    }
    return <>
        <Layout tabs={true}>
            <IonContent>
                <IonGrid>
                    <IonRow class="">
                        <IonCol size="12">

                            <IonRow class="ion-justify-content-start">
                                <IonCol size="12">
                                    <Form name="inputText"
                                        callback={setValueFromChild}
                                        returnName="firstName"
                                        errorMsz={firstNameErrorMsz}
                                        required={true}
                                        label="First Name" />
                                </IonCol>
                                <IonCol size="12">
                                    <Form name="inputText"
                                        callback={setValueFromChild}
                                        returnName="lastName"
                                        required={true}
                                        errorMsz={lastNameErrorMsz}
                                        label="Last Name" />
                                </IonCol>
                                <IonCol size="12">
                                    <Form name="inputText"
                                        callback={setValueFromChild}
                                        returnName="email"
                                        required={true}
                                        errorMsz={emailErrorMsz}
                                        label="Email" />
                                </IonCol>
                                <IonCol size="12">
                                    <Form name="inputText"
                                        callback={setValueFromChild}
                                        returnName="mobileNumber"
                                        required={true}
                                        errorMsz={mobileErrorMsz}
                                        label="Phone" />
                                </IonCol>
                                <IonCol size="12">
                                    <Form name="inputText"
                                        callback={setValueFromChild}
                                        returnName="zipCode"
                                        required={true}
                                        errorMsz={zipCodeErrorMsz}
                                        label="Zipcode" />
                                </IonCol>

                                <IonCol size="12" class="ion-margin-top">
                                    <Form name="button" color="success" title="Submit" callback={getLogin} />
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </Layout>
        <IonLoading
            cssClass='my-custom-class'
            isOpen={showLoading}
            onDidDismiss={() => setShowLoading(false)}
            message={'Please wait...'}
            duration={10000}
        />
    </>
}

export default UserInfo
