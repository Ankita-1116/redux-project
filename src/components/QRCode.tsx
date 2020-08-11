import React, { useState, useEffect } from 'react'
import QrReader from 'react-qr-reader'
import { IonToast, IonContent, IonGrid, IonRow, IonCol, IonLoading } from '@ionic/react'
import Tabs from './Tabs';
import Header from './Header';
import Layout from './Layout';
import Form from './Form';
import CustomToast from './CustomToast';
import { Toast } from '../Models/Contants';
import { roamerSave_API } from '../services/Services';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

function QRCode() {
    const history = useHistory()
    const [QRResFlag, setQRResFlag] = useState(true)
    const [showLoading, setShowLoading] = useState(false);
    const dispatch = useDispatch();

    console.log("QR cOde")
    useEffect(() => {
        dispatch({type:"HEADER_OBJ",header:{rootPage:true,heading:"Please flash the QR-Code you received in your email"}})
    }, [])
    const handleScan = (res: any) => {
        if (QRResFlag && res) {
            setQRResFlag(false);
            const data = JSON.parse(res);
            var formData = {
                'firstName': data.firstName,
                'lastName': data.lastName,
                'email': data.email,
                'phone': data.phone,
                'zipCode': data.zipCode
            };
            setShowLoading(true);
            roamerSave_API(JSON.stringify(formData), onQRSuccess)
        }
    }
    const onQRSuccess = (status: any, response: any) => {
        setShowLoading(false);
        history.push('/userData', {
            data: response.data[0]
        });
        setTimeout(() => {
            window.location.href = "/"
        }, 10000);
    }
    const handleError = (err: any) => {
        console.error(err)
    }
    return <>
        <Layout tabs={true}>
            <IonContent>
                <IonGrid>
                    <IonRow class="ion-justify-content-center ">
                        <IonCol style={{ "maxWidth": "calc(100vh - 160px)" }}>
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
        <IonLoading
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Please wait...'}
        duration={100000}
      />
    </>
}

export default QRCode
