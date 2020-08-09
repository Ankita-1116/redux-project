import React, { Component } from 'react'
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonIcon, IonLabel } from '@ionic/react'
import { useHistory } from 'react-router'
import { backspace, caretBackCircleOutline, chevronBack, home } from 'ionicons/icons'
import { useDispatch, useSelector } from 'react-redux'

const Header = (props: any) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const globaleState: any = useSelector(state => state)
    const Homepage = '/home';
    console.log(history)
    const goback = () => {
        history.goBack();
    }
    const goHome = () => {
        dispatch({ type: "RESET" })
        history.push("/");
    }
    return (
        <IonHeader translucent>
            {
                history.location.pathname == Homepage ?
                    <IonToolbar className="header-toolbar">
                        <IonTitle className="header-title ion-padding-horizontal ion-text-center">{props.heading}</IonTitle>
                        {
                            globaleState['userType'] != '' &&
                            <IonButtons slot="end" onClick={goHome} className="back-icon">
                                <IonIcon icon={home} />
                            </IonButtons>
                        }
                    </IonToolbar> :
                    <IonToolbar className="header-toolbar">
                        {
                            globaleState['userType'] != '' && history.location.pathname != Homepage &&
                            <IonButtons slot="start" onClick={goback} className="back-icon">
                                <IonIcon icon={chevronBack} />
                                <IonLabel>Back</IonLabel>
                            </IonButtons>
                        }
                        <IonTitle className="header-title sm ion-padding-horizontal ion-text-center">{props.heading}</IonTitle>
                        {
                            globaleState['userType'] != '' &&
                            <IonButtons slot="end" onClick={goHome} className="back-icon">
                                <IonIcon icon={home} />
                            </IonButtons>
                        }
                    </IonToolbar>
            }
        </IonHeader>
    )
}

export default Header
