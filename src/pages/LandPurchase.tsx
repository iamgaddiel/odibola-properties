import { IonPage, IonContent, IonImg, IonGrid, IonRow, IonCol, IonLabel, IonSelect, IonSelectOption, IonInput, IonButton, IonCheckbox, IonText, IonToast } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router'
import { useRecoilValue, useRecoilState } from 'recoil'
import { useForm, SubmitHandler } from 'react-hook-form'


// images
import Land1 from '../assets/images/land.png'
import BackHeaderWithTitle from '../components/BackHeaderWithTitle'
import Header from '../components/Header'
import { getLandDetail } from '../utils/api_calls'
import { landPurchaseState, propertyState } from '../utils/atoms'
import { devDomain } from '../utils/selectors'


const LandPurchase = () => {
    const history = useHistory()
    const [plotSize, setPlotSize] = useState<string>('');
    const [confirmInputs, setInputs] = useState(false)
    const [show, setShow] = useState(false)
    const [propertyType, setPropertyType] = useRecoilState(propertyState)

    type paramsType = { landId: string }
    const { landId } = useParams<paramsType>()

    const { data } = useQuery(['land-detail', landId], () => getLandDetail(landId))
    const domain = useRecoilValue(devDomain)
    const [purchaseLandDetail, setPurchaseLandDetail] = useRecoilState(landPurchaseState)


    interface fieldInterface {
        measurement: string
        agreed_to_terms: boolean
        quantity: number
    }
    const { register, handleSubmit, formState: { errors } } = useForm<fieldInterface>()
    const handlePurchaseOffer: SubmitHandler<fieldInterface> = (data) => {
        // if (errors) setShow(true)
        setPurchaseLandDetail({ ...purchaseLandDetail, ...data })
        history.push(`/land-offer/${landId}`)
    }

    useEffect(() => {
        setPropertyType({
            id: landId,
            propertyType: 'land',
            deposit: 0,
            totalCost: data?.total_cost
        })
    }, [])

    return (
        data ? (
            <IonPage>
                <BackHeaderWithTitle backLink='/lands' />
                <IonContent className='ion-padding' fullscreen>
                    <IonToast
                        message="You missed some fields, kindly crosscheck and try again"
                        position='top'
                        isOpen={show}
                        color='primary'
                        duration={2000}
                        onDidDismiss={() => setShow(false)}
                    />
                    <h1 className='text-muted text-center my-3 bold'>Register Interest</h1>
                    <main>
                        <div className="detail-image-container">
                            <IonImg src={`${domain}${data.image_one}`} alt='' />
                        </div>

                        <div className="price-details ion-padding text-center">
                            <h4 className="bold heading text-muted">{data.title}</h4>
                            <p className="lead-text">{data.location}</p>
                            <h3 className="bold heading text-muted">{data.total_cost} per SQM</h3>
                        </div>

                        <section className="mt-4 w-100">
                            <h5 className="text-muted">Gallery</h5>
                            <IonGrid>
                                <IonRow>
                                    <IonCol size='3'>
                                        <div className="gallery-preview h-75">
                                            <IonImg src={`${domain}${data.image_one}`} alt='' />
                                        </div>
                                    </IonCol>
                                    <IonCol size='3'>
                                        <div className="gallery-preview h-75">
                                            <IonImg src={`${domain}${data.image_two}`} alt='' />
                                        </div>
                                    </IonCol>
                                    <IonCol size='3'>
                                        <div className="gallery-preview h-75">
                                            <IonImg src={`${domain}${data.image_three}`} alt='' />
                                        </div>
                                    </IonCol>
                                    <IonCol size='3'>
                                        <div className="gallery-preview h-75">
                                            <IonImg src={`${domain}${data.image_four}`} alt='' />
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </section>

                        <form onSubmit={handleSubmit(handlePurchaseOffer)}>
                            <section className="mt-4 ion-padding">
                                <div className="d-flex justify-content-between">
                                    {/* todo: left the opetions fill 80% */}
                                    <div className=''>
                                        <IonLabel className='bold text-muted'>Size of plot</IonLabel>
                                        <IonSelect
                                            {...register(
                                                'measurement', {
                                                required: {
                                                    message: 'select a size',
                                                    value: true
                                                }
                                            })}
                                            value={plotSize}
                                            placeholder='Plot Size'
                                            onIonChange={(data) => setPlotSize(data.detail.value)}>
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
                                                    }
                                                }
                                            )} />
                                    </div>
                                </div>
                            </section>

                            <section className="primary-notice-bg my-2 p-2">
                                <p className="blue-text bold mt-3">
                                    For this particular land, we have only {data.plot_quantity} plots ({data.plot_quantity * data.size} SQM) available for sale
                                </p>
                            </section>

                            <section className="my-3 text-muted">
                                <IonLabel className='d-flex align-items-center'>
                                    <IonCheckbox
                                        title='agreed_to_terms'
                                        value={confirmInputs}
                                        onIonChange={(e: any) => setInputs(e)}
                                        slot='start'
                                        {...register(
                                            'agreed_to_terms',
                                            {
                                                required: {
                                                    message: 'please confirm your inputs are correct before continuing',
                                                    value: true
                                                }
                                            }
                                        )} />
                                    <IonText className="mx-2" >I confirm that the details above are correct</IonText>
                                </IonLabel>
                            </section>

                            {/* buttons */}
                            <section className="d-flex justify-content-between">
                                <IonButton
                                    fill='clear'
                                    expand='block'
                                    className='gray-btn w-50'
                                    routerDirection='forward'
                                    // routerLink='/schedule-land'
                                    color='dark'
                                >
                                    Cancel
                                </IonButton>

                                {/* proceed button */}
                                <IonButton
                                    fill='clear'
                                    expand='block'
                                    className='blue-btn w-50'
                                    type='submit'
                                >
                                    Proceed
                                </IonButton>
                            </section>
                        </form>
                    </main>
                </IonContent>
            </IonPage >
        ) : (
            <IonToast
                position='top'
                isOpen={true}
                message='Unable to fetch request, check your internet connection'
                color='danger' />
        )
    )
}

export default LandPurchase