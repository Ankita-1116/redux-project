import React from 'react'
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react'

const Header = (props: any) => {
    return <>
        <IonHeader>
            <IonToolbar style={{padding: "8px 0"}}>
                {
                    props.back &&
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                }
                <IonTitle>User Info</IonTitle>
            </IonToolbar>
        </IonHeader>
    </>
}

export default Header
