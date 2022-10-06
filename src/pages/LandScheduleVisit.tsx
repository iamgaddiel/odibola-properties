import { IonPage, IonContent, IonImg, IonGrid, IonRow, IonCol, IonLabel, IonSelect, IonSelectOption, IonInput, IonButton, IonCheckbox, IonText, IonToast, IonIcon } from '@ionic/react'
import { alertCircleOutline, warning } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router'
import { useRecoilValue, useRecoilState } from 'recoil'
import { useForm, SubmitHandler } from 'react-hook-form'


// images
import BackHeaderWithTitle from '../components/BackHeaderWithTitle'
import { getLandDetail } from '../utils/api_calls'
import { landPurchaseState, propertyState } from '../utils/atoms'
import { devDomain } from '../utils/selectors'


const LandDetailVisit = () => {
    const history = useHistory()
    const [displayToast, setDisplayToast] = useState(false) //* display toast
    const [propertyType, setPropertyType] = useRecoilState(propertyState)

    type paramsType = { landId: string }
    const { landId } = useParams<paramsType>()
    const { data } = useQuery(['land-detail', landId], () => getLandDetail(landId))
    const domain = useRecoilValue(devDomain)

    // this contains land details to be sent to the server
    const [purchaseLandDetail, setPurchaseLandDetail] = useRecoilState(landPurchaseState)

    // form fields
    const [plotSize, setPlotSize] = useState<string>('');
    const [agreed, setAgreed] = useState(false) //* checkbox
    const [quantity, setQuantity] = useState<number>(0)


    const handlePurchaseOffer = (data: any) => {
        data.preventDefault();
        let cost = parseInt(data?.total_cost) * parseInt(plotSize) * quantity
        setPurchaseLandDetail({
            ...purchaseLandDetail,
            size: plotSize,
            agreed_to_terms: agreed,
            land:landId,
            quantity,
            property_type: propertyType.propertyType,
            amount: cost,
            deposit: 0.25 * cost
        })

        if (agreed === false || quantity <= 0 || plotSize === ""){
            setDisplayToast(true)
        } else {
            history.push(`/schedule-land/${landId}`)
            // history.push(`/land-offer/${landId}`)
        }

    }

    useEffect(() => {
        setPropertyType({
            id: landId,
            propertyType: 'land',
            deposit: 0,
            totalCost: data.total_cost
        })
        console.log(purchaseLandDetail, 'all details')

    }, [purchaseLandDetail])

    return (
        data ? (
            <IonPage>
                <BackHeaderWithTitle backLink='/lands' />
                <IonContent className='ion-padding' fullscreen>
                    <IonToast
                        message="<b>You missed some field(s)</b>"
                        position='top'
                        isOpen={displayToast}
                        color='danger'
                        duration={3000}
                        onDidDismiss={() => setDisplayToast(false)}
                    />
                    <h1 className='text-muted text-center my-3 bold'>Schedule Visit</h1>
                    <main>
                        <div className="detail-image-container">
                            <IonImg src={`${domain}${data.image_one}`} alt='' />
                        </div>

                        <div className="price-details ion-padding text-center">
                            <h4 className="bold heading text-muted">{data.title}</h4>
                            <p className="lead-text">{data.location}</p>
                            <h3 className="bold heading text-muted">₦{data.total_cost} per SQM</h3>
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

                        <section className="primary-notice-bg my-2 p-2 pl-5" style={{ borderLeft: '4px solid #0f1f93' }}>
                            <h5 className="blue-text primary bold d-flex align-items-center">
                                <IonIcon icon={alertCircleOutline} className='mr-2 blue-text' size='small' /> Take Note
                            </h5>
                            <p className="blue-text bold mt-3">
                                For this particular land, we have only {data.plot_quantity} plots ({data.plot_quantity * data.size} SQM) available for sale
                            </p>
                        </section>

                        <form onSubmit={handlePurchaseOffer}>
                            <section className="mt-4 ion-padding">
                                <div className="d-flex justify-content-between">
                                    {/* todo: left the opetions fill 80% */}
                                    <div className=''>
                                        <IonLabel className='bold text-muted'>Size of plot</IonLabel>
                                        <IonSelect
                                            name='measurement'
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
                                            name='quantity'
                                            required
                                            value={quantity}
                                            onIonChange={(e: any) => setQuantity(e.detail.value)}
                                        />
                                    </div>
                                </div>
                            </section>



                            <section className="my-3 text-muted">
                                <IonLabel className='d-flex align-items-center'>
                                    <IonCheckbox
                                        title='agreed_to_terms'
                                        value={agreed}
                                        onIonChange={(e: any) => setAgreed(e.detail.checked)}
                                        slot='start'
                                        name='agreed_to_terms'
                                    />
                                    <IonText className="mx-2" >I confirm that the details above are correct</IonText>
                                </IonLabel>
                            </section>

                            {/* button */}
                            <section className="mt-5">
                                <IonButton
                                    fill='clear'
                                    expand='block'
                                    className='blue-btn w-100'
                                    type='submit'
                                >
                                    Continue
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

export default LandDetailVisit