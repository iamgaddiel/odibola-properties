import { IonPage, IonContent, IonIcon, IonCard, IonList, IonItem, IonButton, IonToast } from '@ionic/react'
import { lockClosedOutline, chevronForwardOutline, copyOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header'
import { Clipboard } from '@capacitor/clipboard'
import { useQuery } from 'react-query'
import { getBankDetail } from '../utils/api_calls'
import BackHeaderWithTitle from '../components/BackHeaderWithTitle'
import { landPurchaseState, propertyState } from '../utils/atoms'
import { useRecoilValue } from 'recoil'
import useGetLandDetail from '../hooks/useGetLandDetail'
import useGetHomeDetail from '../hooks/useGetHomeDetail'

const PayWithBackTransfer: React.FC = () => {
    type paramsType = { id: string }
    const { id } = useParams<paramsType>()
    const { data } = useQuery('get-bank-detail', getBankDetail)

    const {propertyType, deposit} = useRecoilValue(propertyState)
    const homeDetail = useGetHomeDetail(id)
    const landDetail = useRecoilValue(landPurchaseState)
    let property;
    
    switch(propertyType){
        case 'home':
            property = homeDetail.res
            break

        case 'land':
            property = landDetail
            break
    }

    const [open, setIsOpen] = useState(false)

    const copyAccountNumber = async () => {
        await Clipboard.write({
            'string': data?.account_number
        })
        setIsOpen(true);
    }

    return (
        <IonPage>
            <BackHeaderWithTitle backLink={`/home-payment-option/${id}`} />

            <IonContent className='ion-padding'>
                <IonToast
                    isOpen={open}
                    message="Account number copied"
                    position='top'
                    duration={2000}
                    onDidDismiss={() => setIsOpen(false)}
                />
                <h1 className='text-muted text-center bold'>Payment</h1>

                <section className='mt-5 ion-padding'>
                    <span className="text-muted">Select Payment Plan</span>
                    <div className="primary-notice-bg ion-padding rounded flx-center-y mt-2">
                        <IonIcon icon={lockClosedOutline} color="primary" size='large' />
                        <div className='mx-2'>
                            <h6 className="bold">Pay Deposit to Secure Property</h6>
                            <p className="text-muted ">
                                Secure property by paying  25% deposit.
                            </p>
                        </div>
                    </div>
                </section>


                <IonCard className='light-bg rounded-edges'>
                    <IonList className='light-bg '>
                        <IonItem>
                            <div className='py-3'>
                                <small className='text-muted'>Total cost</small>
                                <h3 className='m-0'>{property?.total_cost}</h3>
                            </div>
                        </IonItem>
                        <IonItem>
                            <div className='py-3'>
                                <small className='text-muted'>Deposit</small>
                                <h3 className='bold'>{`${deposit}`}</h3>
                                <small className='text-muted'>25% of {property?.total_cost}</small>
                            </div>
                        </IonItem>
                        <IonItem>
                            <div className='py-3 d-flex justify-content-between align-items-center w-100'>
                                <div>
                                    <small className='text-muted'>Account number</small>
                                    <h3 className='m-0'>{data?.account_number}</h3>
                                </div>
                                <IonButton fill='clear' onClick={copyAccountNumber}>
                                    <IonIcon icon={copyOutline} className='text-muted' size='large' />
                                </IonButton>
                            </div>
                        </IonItem>
                        <IonItem>
                            <div className='py-3'>
                                <small className='text-muted'>Swift Code</small>
                                <h1 className='m-0'>{data?.swift_code}</h1>
                            </div>
                        </IonItem>
                    </IonList>
                </IonCard>


                <section className="text-muted ion-padding">
                    <h5>Please submit a physical copy of this bank draft to this address:</h5>
                    <p className="blue-text">
                        Orange Island Projects Office, 22, Dr. Omon Ebhomenye Street, Off Awudu Ekpegha Street, Lekki Phase 1, Lagos, Nigeria.
                    </p>
                </section>

                <IonButton
                    fill='clear'
                    expand='block'
                    color='light'
                    className='blue-bg my-2'
                    routerDirection='forward'
                    routerLink={`/home-proof-of-payment`}
                >
                    Click to upload proof of payment
                </IonButton>
            </IonContent>
        </IonPage >
    )
}

export default PayWithBackTransfer