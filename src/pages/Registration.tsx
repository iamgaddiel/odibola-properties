import { IonContent, IonLabel, IonPage, IonRouterLink, IonSegment, IonSegmentButton } from '@ionic/react'
import React, { useState } from 'react'

import '../assets/css/reg.css'
import IndividualReg from '../components/IndividualReg'
import OrganizationReg from '../components/OrganizationReg'
import AuthHeader from '../components/AuthHeader'


const Registration: React.FC = () => {
    let [regType, setRegType] = useState<string>("individual")

    const handleSegmentChange = () => {
        if (regType === 'individual') return <IndividualReg />
        else if (regType === 'organization') return <OrganizationReg />
    }

    return (
        <IonPage>
            <IonContent fullscreen className='ion-padding'>
                {/* Header for Login/Registration Screen */}
                <AuthHeader />
                
                <main className='ion-padding ion-margin-up'>
                    <IonSegment onIonChange={(e) => setRegType(`${e.detail.value}`)} value={regType}>
                        <IonSegmentButton value="individual" onClick={() => setRegType('individual')}>
                            <IonLabel className='blue-text'>individual</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="organization" onClick={() => setRegType('organization')}>
                            <IonLabel className='blue-text'>Organization</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>

                    <section className="ion-margin-top">

                        {handleSegmentChange()}

                        <section className="t-and-c">
                            <small className="text-muted">
                                By tapping continue, I accept Odibol's
                                <IonRouterLink
                                    routerDirection='forward'
                                >term of use</IonRouterLink>
                            </small>
                        </section>
                    </section>
                </main>
            </IonContent>
        </IonPage>
    )
}

export default Registration