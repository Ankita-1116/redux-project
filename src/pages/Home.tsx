import React from 'react'
import QRCode from '../components/QRCode'
import { IonReactRouter } from '@ionic/react-router'
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel } from '@ionic/react'
import { Route, Redirect } from 'react-router'
import UserInfo from './UserInfo'
import Tabs from '../components/Tabs'

function Home() {
    return <>
        <Tabs />
        </>
}

export default Home
