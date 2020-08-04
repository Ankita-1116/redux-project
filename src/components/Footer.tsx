import React from 'react'
import { IonFooter, IonToolbar, IonTitle } from '@ionic/react'
import Tabs from './Tabs'

const Footer = () => {
    return <>
        <IonFooter>
            <IonToolbar >
                <Tabs />
            </IonToolbar>
        </IonFooter>
    </>
}

export default Footer
