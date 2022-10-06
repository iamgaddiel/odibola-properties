import { IonBackButton, IonButtons, IonChip, IonContent, IonHeader, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const AllAccountHistory = () => {
    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton text="Back" defaultHref='/account-history' />
                    </IonButtons>
                    <IonTitle>Account History</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className='ion-padding'>
                <section>
                    <IonChip color='success'>
                        <IonLabel>All</IonLabel>
                    </IonChip>
                    <IonChip>
                        <IonLabel>Account forms</IonLabel>
                    </IonChip>
                    <IonChip>
                        <IonLabel>Secured plot</IonLabel>
                    </IonChip>
                </section>

                <section className='mt-5'>
                    <IonList>
                        <IonItemGroup>
                            <IonItemDivider color='default'>
                                <IonLabel className='muted'>
                                    12 March 2022
                                </IonLabel>
                            </IonItemDivider>

                            <IonItem lines='none'>
                                <IonLabel className='ion-text-wrap light-bg ion-padding'>
                                    <h1 className='heading-text'>Submitted Account Form</h1>
                                </IonLabel>
                            </IonItem>
                            <IonItem lines='none'>
                                <IonLabel className='ion-text-wrap light-bg ion-padding'>
                                    <h1 className='heading-text'>Submitted Account Form</h1>
                                </IonLabel>
                            </IonItem>
                        </IonItemGroup>

                        <IonItemGroup>
                            <IonItemDivider color='default'>
                                <IonLabel className='muted'>
                                    12 March 2022
                                </IonLabel>
                            </IonItemDivider>

                            <IonItem lines='none'>
                                <IonLabel className='ion-text-wrap light-bg ion-padding'>
                                    <h1 className='heading-text'>Submitted Account Form</h1>
                                </IonLabel>
                            </IonItem>
                            <IonItem lines='none'>
                                <IonLabel className='ion-text-wrap light-bg ion-padding'>
                                    <h1 className='heading-text'>Submitted Account Form</h1>
                                </IonLabel>
                            </IonItem>
                        </IonItemGroup>
                    </IonList>
                </section>
            </IonContent>
        </IonPage>
    )
}

export default AllAccountHistory