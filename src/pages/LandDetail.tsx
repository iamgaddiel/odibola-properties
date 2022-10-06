import { IonPage, IonContent, IonImg, IonIcon, IonGrid, IonRow, IonCol, IonButton, IonLabel, IonInput, IonSelect, IonSelectOption, IonText, IonCheckbox, IonToast } from '@ionic/react'
import { alertCircleOutline, warningOutline } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import useAuthData from '../hooks/useAuthData'

// images
import useGetLandDetail from '../hooks/useGetLandDetail'
import { landPurchaseState, propertyState } from '../utils/atoms'
import { getUserData } from '../utils/plugins'

const LandDetail = () => {
    const navigate = useNavigate()
    const [checked, setChecked] = useState()
    const [showToast, setShowToast] = useState(false)
    const user = useAuthData();

    // Recoil
    const [purchaseLandDetail, setPurchaseLandDetail] = useRecoilState(landPurchaseState)
    const [currentPropertyState, setCurrentPropertyState] = useRecoilState(propertyState)


    // Id parameter
    type paramsType = { landId: string }
    const { landId } = useParams<paramsType>()

    const [plotSize, setPlotSize] = useState<string>('');
    const { domain, res } = useGetLandDetail(landId!)
    const land = res

    // React-Hook-Form
    interface fieldInterface {
        size: string
        agreed_to_terms: boolean
        quantity: number
    }
    const { register, handleSubmit, formState: { errors } } = useForm<fieldInterface>()
    const handlePurchaseOffer: SubmitHandler<fieldInterface> = (formData) => {
        setPurchaseLandDetail({
            ...purchaseLandDetail,
            user: user?.id,
            amount: formData.quantity * land?.total_cost,
            deposit: 0.25 * (formData.quantity * land?.total_cost),
            land: land.id,
            property_type: 'land',
            total_cost: ((formData.quantity * land?.total_cost) + land?.legal_or_admin_cost),
            cost: (formData.quantity * land?.total_cost * parseInt(formData.size)),
            ...formData
        })

        setCurrentPropertyState({
            deposit: 0.25 * (formData.quantity * land?.total_cost),
            totalCost: ((formData.quantity * land?.total_cost) + land?.legal_or_admin_cost),
            propertyType: 'land',
            id: landId!
        })
        // if (errors) setShowToast(true) //todo: show toast when form has errors
        navigate(`/land-offer/${landId}`)
    }


    useEffect(() => { }, [purchaseLandDetail])

    return (
        land ?
            <IonPage>
                <IonToast
                    isOpen={showToast}
                    message="complete all fields"
                    duration={3000}
                    onDidDismiss={() => setShowToast(false)}
                    color='primary'
                    position='top'
                    icon={warningOutline}
                />
                <IonContent className='ion-padding' fullscreen>
                    <main>
                        <div className="detail-image-container">
                            <IonImg src={`${domain}${land.image_one}`} alt='' />
                        </div>

                        <div className="price-details ion-padding text-center">
                            <h4 className="bold heading text-muted">{land.title}</h4>
                            <p className="lead-text">{land.location}</p>
                            <h3 className="bold heading text-muted">₦{land.total_cost} per SQM</h3>
                        </div>

                        <section className="property-description">
                            <h5 className="text-muted">
                                {land.description}
                            </h5>
                        </section>

                        {/* Gallery */}
                        <section className="mt-4 w-100">
                            <h5 className="text-muted">Gallery</h5>
                            <IonGrid>
                                <IonRow>
                                    <IonCol size='3'>
                                        <div className="gallery-preview h-75">
                                            <IonImg src={`${domain}${land.image_one}`} alt='' />
                                        </div>
                                    </IonCol>
                                    <IonCol size='3'>
                                        <div className="gallery-preview h-75">
                                            <IonImg src={`${domain}${land.image_two}`} alt='' />
                                        </div>
                                    </IonCol>
                                    <IonCol size='3'>
                                        <div className="gallery-preview h-75">
                                            <IonImg src={`${domain}${land.image_three}`} alt='' />
                                        </div>
                                    </IonCol>
                                    <IonCol size='3'>
                                        <div className="gallery-preview h-75">
                                            <IonImg src={`${domain}${land.image_four}`} alt='' />
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </section>

                        <form onSubmit={handleSubmit(handlePurchaseOffer)}>
                            <section className="mt-4 ion-padding">
                                <div className="d-flex justify-content-between">
                                    <div className=''>
                                        <IonLabel className='bold text-muted'>Size of plot</IonLabel>
                                        <IonSelect
                                            {...register(
                                                'size', {
                                                required: {
                                                    message: 'select a size',
                                                    value: true
                                                }
                                            })}
                                            value={plotSize}
                                            placeholder='Plot Size'
                                            onIonChange={data => setPlotSize(data.detail.value)}>
                                            <IonSelectOption value='100'>100 SQM</IonSelectOption>
                                            <IonSelectOption value='200'>200 SQM</IonSelectOption>
                                            <IonSelectOption value='300'>300 SQM</IonSelectOption>
                                            <IonSelectOption value='400'>400 SQM</IonSelectOption>
                                            <IonSelectOption value='500'>500 SQM</IonSelectOption>
                                            <IonSelectOption value='600'>600 SQM</IonSelectOption>
                                        </IonSelect>
                                    </div>
                                    <div>
                                        <IonLabel className='text-muted bold'>Quantity</IonLabel>
                                        <IonInput
                                            type='number'
                                            placeholder='Quantity of plot'
                                            {...register(
                                                'quantity',
                                                {
                                                    required: {
                                                        message: "quantity is required",
                                                        value: true
                                                    },
                                                    min: {
                                                        message: "You can't go lower than 1",
                                                        value: 1
                                                    }
                                                }
                                            )} />
                                    </div>
                                </div>
                            </section>

                            <section className="primary-notice-border ion-padding primary-notice-bg mt-4 mx-3">
                                <IonText className="text-muted mt-3">Purchase {land.size}SQM for {land.total_cost}
                                </IonText>
                            </section>


                            <section className="my-3 text-muted">
                                <IonLabel className='d-flex align-items-center'>
                                    <IonCheckbox
                                        title='agreed_to_terms'
                                        value={checked}
                                        onIonChange={(e: any) => setChecked(e.detail.checked)}
                                        slot='start'
                                        {...register(
                                            'agreed_to_terms',
                                            {
                                                required: {
                                                    message: 'please confirm your inputs are correct before continuing',
                                                    value: true
                                                },
                                            }
                                        )} />
                                    <IonText className="mx-2" >I confirm that the details above are correct</IonText>
                                </IonLabel>
                            </section>

                            <section className="btns">
                                <IonButton
                                    fill='clear'
                                    expand='block'
                                    className='blue-btn'
                                    routerDirection='forward'
                                    type='submit'
                                // routerLink={`/land-offer/${landId}`}
                                // routerLink='/schedule-land'
                                // color='light'
                                >
                                    Purchase
                                </IonButton>
                            </section>
                        </form>
                    </main>
                </IonContent>
            </IonPage > : null

    )
}

export default LandDetail
