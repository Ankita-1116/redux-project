import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { roamerSave_API } from '../services/Services'
import { IonImg } from '@ionic/react'
import { useHistory } from 'react-router'

const UserQr = (props: any) => {
    const history = useHistory()
    const [imageData, setImageData] = useState(props.history.location.state.data.image);
    const [timer, setTimer] = useState(10);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer - 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [timer])
    return <>
        <Layout back={true} tabs={false} heading="Your info">
            <h2 className="ion-text-center">{props.history.location.state.data.successMessage}</h2>
            {
                props.history.location.state != undefined &&
                <IonImg src={"data:image/png;base64," + imageData} style={{ maxWidth: "50%", margin: "0 auto" }} />
            }
            <h3 className="ion-text-center">Redirecting: 00:{timer == 10 ? timer : "0" + timer}</h3>
        </Layout>
    </>
}

export default UserQr
