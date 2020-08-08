import React, { Component } from 'react'
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonIcon, IonLabel } from '@ionic/react'
import { useHistory } from 'react-router'
import { backspace, caretBackCircleOutline, chevronBack, home } from 'ionicons/icons'

const Header = (props: any) => {
    const history = useHistory();
    const Homepage = '/findclub';
    console.log(history.location.pathname)
    const goback = () => {
        history.goBack();
    }
    const goHome = () => {
        history.push(Homepage);
    }
    return (
        <IonHeader translucent>
            {
                history.location.pathname == Homepage ?
                    <IonToolbar className="header-toolbar">
                        <IonTitle className="header-title ion-padding-horizontal h1">{props.heading}</IonTitle>
                    </IonToolbar> :
                    <IonToolbar className="header-toolbar">
                        <IonButtons slot="start" onClick={goback} className="back-icon">
                            <IonIcon icon={chevronBack} />
                            <IonLabel>Back</IonLabel>
                        </IonButtons>
                        <IonTitle className="header-title sm ion-padding-horizontal h1">{props.heading}</IonTitle>
                        <IonButtons slot="end" onClick={goHome} className="back-icon">
                            <IonIcon icon={home} />
                        </IonButtons>
                    </IonToolbar>
            }
        </IonHeader>
    )
}

export default Header
