import React, { useState } from 'react'
import Tabs from '../components/Tabs'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { IonContent, IonGrid, IonRow, IonCol, IonToast } from '@ionic/react'
import Form from '../components/Form'
import { roamerSave_API } from '../services/Services'
import CustomToast from '../components/CustomToast'
import checkValidation from '../services/Validation'
import { Toast } from '../Models/Contants'
import { useHistory } from 'react-router'

function UserInfo() {
    const history = useHistory()

    const [toastInfo, setToastInfo] = useState('');
    const [showToast, setShowToast] = useState(false);

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
            required && setFirstNameErrorMsz(checkValidation.setErrorMsz('firstName', value));
        }
        if (name == "lastName") {
            setLastName(value);
            required && setLastNameErrorMsz(checkValidation.setErrorMsz('lastName', value));
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
        setFirstNameErrorMsz(checkValidation.setErrorMsz('firstName', firstName));
        setLastNameErrorMsz(checkValidation.setErrorMsz('lastName', lastName));
        setEmailErrorMsz(checkValidation.setErrorMsz('email', email));
        setMobileErrorMsz(checkValidation.setErrorMsz('mobileNumber', mobileNumber));
        setZipCodeErrorMsz(checkValidation.setErrorMsz('zipCode', zipCode));
        if (firstNameErrorMsz == '' && lastNameErrorMsz == '' && emailErrorMsz == '' && mobileErrorMsz == '' && zipCodeErrorMsz == '') {
            var formData = {
                'firstName': firstName,
                'lastName': lastName,
                'email': email,
                'phone': mobileNumber,
                'zipCode': zipCode
            };
            setUserFormData(JSON.stringify(formData));
            roamerSave_API(JSON.stringify(formData), onUserRegisterSuccess)
        }
    }

    const onUserRegisterSuccess = (status: any, response: any) => {
        setShowToast(true);
        console.log(response)
        history.push('/userData', {
            data: response.data[0]
        });
        setTimeout(() => {
            window.location.href="/qrscan"
        }, 10000);
        // <CustomToast showToast={true} info={`Welcome ${data.name}`} />
    }
    return <>
        <Layout back={true} tabs={true}>
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
                                    <Form name="button" color="secondary" title="Login" callback={getLogin} />
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </Layout>
        {
            toastInfo != '' &&
            <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message={toastInfo}
                duration={Toast.timeInterval}
                cssClass="toastText"

            />
        }
    </>
}

export default UserInfo
