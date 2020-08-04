import React, { useState, useEffect } from 'react'
import { IonToast } from '@ionic/react'

const CustomToast = (props: any) => {
    const [showToast, setShowToast] = useState(props.showToast);
    console.log(props)
    return (
        <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message={props.info}
            duration={2000}
        />
    )
}

export default CustomToast
