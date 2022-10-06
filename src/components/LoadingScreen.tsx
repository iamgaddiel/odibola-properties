import { IonPage, IonContent } from '@ionic/react'
import React from 'react'

const LoadingScreen = () => {
  return (
    <IonPage>
        <IonContent fullscreen >
          <div className="loading-screen"></div>
        </IonContent>
      </IonPage>
  )
}

export default LoadingScreen