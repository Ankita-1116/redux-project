import React from 'react';
import logo from './logo.svg';
import './App.css';
import QRCode from './components/QRCode';
import Home from './pages/Home';
import { IonApp, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/Login';
import UserInfo from './pages/UserInfo';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import UserQr from './pages/UserQr';
import UserList from './pages/UserList';
import { useSelector } from 'react-redux';

function App() {
  const globalState = useSelector((state: any) => state);
  console.log("App tsx",globalState)
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/login" component={Login} />
          <Route path="/qrscan" component={QRCode} />
          <Route path="/forminput" component={UserInfo} exact={true} />
          <Route path="/userData" component={UserQr} exact={true} />
          <Route path="/userlist" component={UserList} exact={true} />
          {
            globalState.userType == '' ? 
            <Redirect exact from="/" to="/login" /> : 
            globalState.userType == 'admin' ? 
            <Redirect exact from="/" to="/userlist" />:
            <Redirect exact from="/" to="/qrscan" />
          }
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App;
