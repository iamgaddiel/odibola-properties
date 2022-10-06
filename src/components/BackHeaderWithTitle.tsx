import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'


interface props {
    backLink: string
    title?: string
}

const BackHeaderWithTitle: React.FC<props> = ({ backLink, title }: props) => {
    return (
        <IonHeader className='ion-no-border'>
            <IonToolbar>
                <IonButtons slot='start'>
                    <IonBackButton text='Back' defaultHref={backLink} />
                </IonButtons>
                { title && <IonTitle>{title}</IonTitle> }
            </IonToolbar>
        </IonHeader>
    )
}

export default BackHeaderWithTitle