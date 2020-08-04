import React, { useState } from 'react'
import { IonItem, IonLabel, IonInput, IonButton, IonList } from '@ionic/react';
import Tabs from './Tabs';
const Form = (component: any) => {
    // alert(JSON.stringify(component))
    // alert(component.keyboardType)
    return (
        <>
            {
                component.name == 'inputText' &&
                <>
                    <IonItem class="ion-no-padding input-wrap">
                        <IonLabel position="fixed">{component.label}</IonLabel>
                        <IonInput onIonChange={(e: any) => {
                            component.callback(component.returnName, e.target.value, component.required);
                        }}> </IonInput>
                    </IonItem>
                    {
                        component.required &&
                        <p style={{ color: "red", fontSize: "1em", margin: "8px 0 0 " }}>{component.errorMsz}</p>
                    }
                </>
            }
            {
                component.name == 'inputPassword' &&

                <IonItem class="ion-no-padding">
                    <IonLabel position="stacked">Stacked Label</IonLabel>
                    <IonInput type="password" value="saasd" onIonChange={(e: any) => {
                        console.log(e.target.value);
                        component.callback(component.returnName, e.target.value);
                    }}> </IonInput>
                </IonItem>

            }

            {
                component.name == 'button' &&
                <IonButton color={component.color} fill="solid" expand="full" onClick={component.callback}>{component.title}</IonButton>


            }
        </>
    )
}

export default Form
