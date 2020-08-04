import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import { IonToast, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react'
import Tabs from './Tabs';
import Header from './Header';
import Layout from './Layout';
import Form from './Form';
import CustomToast from './CustomToast';
import { Toast } from '../Models/Contants';
import { roamerSave_API } from '../services/Services';

function QRCode() {
    const [result, setResult] = useState([])
    const [userName, setUserName] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastInfo, setToastInfo] = useState('');
    const [userFormData, setUserFormData] = useState({});


    const handleScan = (res: any) => {
        if (toastInfo == '' && res) {
            const data = JSON.parse(res);
            var formData = {
                'firstName': data.firstName,
                'lastName': data.lastName,
                'email': data.email,
                'phone': data.phone,
                'zipCode': data.zipCode
            };
            
            roamerSave_API(JSON.stringify(formData), onQRSuccess)
        }
    }
    const onQRSuccess = (status: any, response: any) => {
        console.log(response.data)
        setShowToast(true);
        const name = response.data[0].successMessage
        status == "success" ? setToastInfo(name) : setToastInfo(response.data)
    }
    const handleError = (err: any) => {
        console.error(err)
    }
    return <>
        <Layout back={false} tabs={true}>
            <IonContent>
                <IonGrid>
                    <IonRow class="ion-justify-content-center ">
                        <IonCol  style={{"maxWidth":"calc(100vh - 150px)"}}>
                            <QrReader
                                delay={300}
                                onError={handleError}
                                onScan={handleScan}
                                style={{ width: '200' }}
                                resolution={200}
                            />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </Layout>
        {
            toastInfo != '' &&
            <IonToast
                isOpen={showToast}
                onDidDismiss={() => {setShowToast(false);setToastInfo('')}}
                message={toastInfo}
                duration={Toast.timeInterval}
                cssClass="toastText"
            />
        }
    </>
}

export default QRCode
