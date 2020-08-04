import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { roamerSave_API } from '../services/Services'
import { IonImg } from '@ionic/react'
import { useHistory } from 'react-router'

const UserQr = (props: any) => {
    const history = useHistory()
    const [imageData, setImageData] = useState(props.history.location.state.data.image);
    return <>
        <Layout back={false} tabs={false}>
            {
                props.history.location.state != undefined &&
                <IonImg src={"data:image/png;base64," + imageData} style={{ maxWidth: "50%", margin: "0 auto" }} />
            }
        </Layout>
    </>
}

export default UserQr
