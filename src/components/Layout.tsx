import React from 'react'
import Header from './Header'
import Tabs from './Tabs'
import Footer from './Footer'
import { IonContent } from '@ionic/react'

const Layout = (props: any) => {
    return <>
        <Header back={props.back} />
        <IonContent class="tab-location">
            {
                props.children
            }
        </IonContent>
        {
            props.tabs &&
            <Footer />
        }
    </>
}

export default Layout
