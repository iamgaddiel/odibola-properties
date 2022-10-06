import { IonButton, IonCheckbox, IonCol, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonText, IonToast } from '@ionic/react'
import React, { useState } from 'react'
import Header from '../components/Header'

// styles
import '../assets/css/app.css'

import { pencilOutline, checkmark } from 'ionicons/icons'
import { useQuery } from 'react-query'
import { getLandDetail } from '../utils/api_calls'
import { useHistory, useParams } from 'react-router-dom'
import BackHeaderWithTitle from '../components/BackHeaderWithTitle'
import useGetLandDetail from '../hooks/useGetLandDetail'
import { useRecoilValue } from 'recoil'
import { landPurchaseState } from '../utils/atoms'
import {warningOutline} from 'ionicons/icons'


const LandOffer: React.FC = () => {
    type paramsType = { landId: string }
    const { landId } = useParams<paramsType>()
    const { res } = useGetLandDetail(landId)
    const land = res

    const history = useHistory()
    const [showToast, setShowToast] = useState(false)

    // show input on clicking on the input
    const [showInput, setShowInput] = useState(false)
    const [name, setName] = useState('John Doe')
    const [agreed, setAgreed] = useState(false)

    // Recoil
    const landPurchaseDetails = useRecoilValue(landPurchaseState)

    const offerAcknowledged = () => {
        if (!agreed){
            setShowToast(true)
        }
        else {
            history.push(`/land-accepted-offer/${landId}`)
        }
    }

    return (
        land ? (
            <IonPage>
                <BackHeaderWithTitle backLink={`/land-purchase/${landId}`} />

                <IonContent className='ion-padding'>
                    <IonToast 
                        isOpen={showToast}
                        message="Agree to offer to continue"
                        duration={3000}
                        color='primary'
                        onDidDismiss={() => setShowToast(false)}
                        position='top'
                        icon={warningOutline}
                    />
                    <section className="offer-terms border rounded ion-padding text-muted ion-padding">
                        <h3 className="bold">Your offer</h3>

                        <section className="offer-text">
                            {
                                land.offer === "" ?
                                    <p className='mt-3'>{land.offer}</p>
                                    :
                                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, repellendus consequatur et sapiente doloribus culpa vitae dolore molestias repellat aspernatur voluptas eius, excepturi exercitationem facilis tempora, quia sequi nobis? Dicta?</p>
                            }
                        </section>
                    </section>

                    {/* Land Details  */}
                    <section className="mt-4">
                        <IonList color='light' className='ion-padding-vertical'>
                            <IonItem className=''>
                                {
                                    showInput ?
                                        <>
                                            <IonInput
                                                type='text'
                                                onIonChange={(e: any) => setName(e.detail.value)}
                                                placeholder='Enter your name'
                                                value={name}
                                            />
                                            <IonIcon
                                                icon={checkmark}
                                                onClick={() => setShowInput(false)}
                                                slot='end'
                                            />
                                        </>
                                        :
                                        <>
                                            <IonLabel>
                                                <small className="text-muted text-start">Name of Entity</small>
                                                <div className='d-flex justify-content-between'>
                                                    <h4 className="bold text-muted">{name}</h4>
                                                    <IonIcon
                                                        icon={pencilOutline}
                                                        className='text-muted'
                                                        slot='end'
                                                        onClick={() => setShowInput(true)}
                                                        // onClick={() => console.log('weldone')}
                                                    />
                                                </div>
                                            </IonLabel>
                                        </>
                                }
                            </IonItem>
                            <IonItem slot='start' className='ion-justify-content-between'>
                                <div>
                                    <small className="text-muted">
                                        RC Number
                                    </small>
                                    <h4 className="bold text-muted">{land.RC_number}</h4>
                                </div>
                            </IonItem>
                            <IonItem slot='start' className='ion-justify-content-between'>
                                <div>
                                    <small className="text-muted">
                                        Name to appear on sublease
                                    </small>
                                    <h4 className="bold text-muted">{land.title}</h4>
                                </div>
                            </IonItem>
                            <IonItem slot='start' className='ion-justify-content-between'>
                                <div>
                                    <small className="text-muted">
                                        Address to appear on sublease
                                    </small>
                                    <h4 className="bold text-muted">{land.location}</h4>
                                </div>
                            </IonItem>
                            <IonItem slot='start' className='ion-justify-content-between'>
                                <div>
                                    <small className="text-muted">
                                        Plot size
                                    </small>
                                    <h4 className="bold text-muted">{landPurchaseDetails.size} SQMs</h4>
                                </div>
                            </IonItem>
                        </IonList>
                    </section>

                    <section className="offer-terms border rounded ion-padding text-muted">
                        <section className="ion-padding border-bottom">
                            <h4 className="bold">Total cost</h4>
                            <h1>{landPurchaseDetails.total_cost}</h1>
                        </section>
                        <section className="ion-padding">
                            <h4 className="bold">Total cost</h4>
                            <ul className='ion-no-padding list-style-non'>
                                <li className="blue-text">
                                    <span>Land Cost</span>
                                    <span className='mx-5'>N{landPurchaseDetails.cost}</span>
                                </li>
                                <li className="blue-text">
                                    <span>Legal/Admin</span>
                                    <span className='mx-5'>N{land.legal_or_admin_cost}</span>
                                </li>
                            </ul>
                        </section>
                    </section>
                    
                    {/* Confirm Offer is accepted */}
                    <section className='ion-margin-vertical flx-center-y'>
                        <IonLabel className='d-flex align-items-center'>
                            <IonCheckbox
                                title='agreed_to_terms'
                                slot='start'
                                onIonChange={(e: any) => setAgreed(e.detail.checked)}
                            />
                            <IonText className="mx-2" >I confirm that the details above are correct</IonText>
                        </IonLabel>
                    </section>
                    
                    {/* Buttons */}
                    <section className='ion-margin-top'>
                        <IonRow className='ion-justify-content-between'>
                            <IonCol size="6">
                                <IonButton
                                    fill='clear'
                                    className='gray-bg w-100 rounded bold'
                                    color='light'
                                    routerDirection='back'
                                    routerLink={`/land-detail/${landId}`}>Reject Offer</IonButton>
                            </IonCol>
                            <IonCol size="6">
                                <IonButton
                                    fill='clear'
                                    className='blue-bg w-100 rounded bold'
                                    color='light'
                                    routerDirection='forward'
                                    onClick={offerAcknowledged}
                                    // routerLink={`/land-accepted-offer/${landId}`}
                                >Accept Offer</IonButton>
                            </IonCol>
                        </IonRow>

                    </section>
                </IonContent>
            </IonPage>) : null
    )
}

export default LandOffer