import React from 'react'
import { IonReactRouter } from '@ionic/react-router'
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react'
import { Route, Redirect, useHistory } from 'react-router'
import Home from '../pages/Home'
import UserInfo from '../pages/UserInfo'
import Form from './Form'

const Tabs = () => {
    const history = useHistory()

    const openQr = () => {
        history.push('/qrscan');
    }
    const openForm = () => {
        history.push('/forminput');
    }
    return <>
        <IonGrid class="ion-no-padding">
            <IonRow class="ion-no-padding">
                <IonCol size="6" class="ion-no-padding">
                    <Form name="button" color="secondary" title="QR Scan" callback={openQr} />
                </IonCol>
                <IonCol size="6" class="ion-no-padding">
                    <Form name="button" color="secondary" title="User Form" callback={openForm} />
                </IonCol>
            </IonRow>
        </IonGrid>

    </>
}

export default Tabs
