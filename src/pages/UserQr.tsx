import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { roamerSave_API } from '../services/Services'
import { IonImg } from '@ionic/react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'

const UserQr = (props: any) => {
    const history = useHistory()
    const [imageData, setImageData] = useState(props.history.location.state.data.image);
    const [timer, setTimer] = useState(10);

    const dispatch = useDispatch();

    console.log("QR cOde")
    useEffect(() => {
        dispatch({ type: "HEADER_OBJ", header: { rootPage: false, heading: "Your Info" } });

    }, [])

    return <>
        <Layout tabs={false}>
            <h2 className="ion-text-center">{props.history.location.state.data.successMessage}</h2>
            {
                props.history.location.state != undefined &&
                <IonImg src={"data:image/png;base64," + imageData} style={{ maxWidth: "500px", width: "100%", margin: "0 auto" }} />
            }
            <h3 className="ion-text-center">Redirecting: 00:{timer == 10 ? timer : "0" + timer}</h3>
        </Layout>
    </>
}

export default UserQr
