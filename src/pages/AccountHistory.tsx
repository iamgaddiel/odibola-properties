import { IonContent, IonItem, IonLabel, IonList, IonPage, IonRouterLink } from '@ionic/react'
import BackHeaderWithTitle from '../components/BackHeaderWithTitle'

import Header from '../components/Header'

const AccountHistory = () => {
    return (
        <IonPage>
            <BackHeaderWithTitle backLink='/dashboard' />
            <IonContent className='ion-padding'>
                <div className="d-flex justify-content-between ion-padding-horizontal">
                    <h3>Account History</h3>
                    <IonRouterLink routerLink='/all-account-history' routerDirection='forward'>
                        <small className="text-muted">View all (56)</small>
                    </IonRouterLink>
                </div>

                <section className='mt-4'>
                    <IonList>
                        <IonItem lines='none'>
                            <IonLabel className='ion-text-wrap light-bg ion-padding'>
                                <h1>Submitted Account Form</h1>
                                <p className="lead">12 March 2020</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem lines='none'>
                            <IonLabel className='ion-text-wrap light-bg ion-padding'>
                                <h1>Submitted Account Form</h1>
                                <p className="lead">12 March 2020</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem lines='none'>
                            <IonLabel className='ion-text-wrap light-bg ion-padding'>
                                <h1>Submitted Account Form</h1>
                                <p className="lead">12 March 2020</p>
                            </IonLabel>
                        </IonItem>
                    </IonList>
                </section>
            </IonContent>
        </IonPage>
    )
}

export default AccountHistory