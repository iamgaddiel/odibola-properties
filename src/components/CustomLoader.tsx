import { IonLoading } from '@ionic/react'
import React from 'react'




interface props {
    isOpen: boolean
    setShowLoading: any
}

const CustomLoader: React.FC<props> = ({ isOpen, setShowLoading }) => {
    // todo: set duration to duration of api call or task processing
    return (
        <IonLoading
            isOpen={isOpen}
            duration={5000}
            onDidDismiss={ () => setShowLoading(false)}
            spinner={'bubbles'}
            message={'Wait a minute....'}
        />
    )
}

export default CustomLoader