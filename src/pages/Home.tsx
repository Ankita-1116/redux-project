import React from 'react'
import QRCode from '../components/QRCode'
import { IonReactRouter } from '@ionic/react-router'
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel } from '@ionic/react'
import { Route, Redirect } from 'react-router'
import UserInfo from './UserInfo'
import Tabs from '../components/Tabs'
import { useSelector } from 'react-redux'
import UserList from './UserList'
import Login from './Login'

function Home() {
    const globalState = useSelector((state: any) => state);

    return <>
        {
            globalState.userType == 'admin' ? <UserList /> : <QRCode />
        }
    </>
}

export default Home
