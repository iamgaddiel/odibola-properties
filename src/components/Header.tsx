import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonBackButton, IonRouterLink, IonText } from '@ionic/react'
import { chevronBackOutline } from 'ionicons/icons'
import React from 'react'


interface headerProps {
    routerLink: string,
}

const Header = ({ routerLink }: headerProps) => {
    return (
        <IonHeader color='default' className='ion-no-border py-3' collapse='fade'>
            <IonToolbar color='default'>
            <IonRouterLink routerDirection='back' routerLink={routerLink} slot='start'>
                <IonIcon icon={chevronBackOutline} color='dark' />
                <IonText>Back</IonText>
            </IonRouterLink>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header