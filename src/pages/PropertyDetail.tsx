import { IonButton, IonCol, IonContent, IonGrid, IonImg, IonPage, IonRow } from '@ionic/react'
import React, { useEffect, useState } from 'react'

// image
import Bed from '../assets/svgs/bed.svg'
import Shower from '../assets/svgs/shower.svg'
import BuildingSize from '../assets/svgs/building_size.svg'

// css
import '../assets/css/app.css'

// useQuery
import { useQuery } from 'react-query'
import { getHomeDetail } from '../utils/api_calls'
import { devDomain } from '../utils/selectors'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useParams } from 'react-router'
import { propertyState } from '../utils/atoms'


const HomeDetail: React.FC = () => {
    type queryParams = { id: string }

    const { id } = useParams<queryParams>()
    const { data } = useQuery(['home-detail', id], () => getHomeDetail(id))
    const domain = useRecoilValue(devDomain)
    const [_, setPropertyDetail] = useRecoilState(propertyState)
    const [propInfo, setPropInfo] = useState({ totalCost: 0, deposit: 0 })

    useEffect(() => {
        setPropertyDetail({
            id,
            propertyType: 'home',
            deposit: (parseInt(data?.total_cost) * 0.25),
            totalCost: data?.total_cost
        })
        console.log(_, 'property details')
    }, [])
    
    return (
        data ?
            (<IonPage>
                <IonContent className='ion-padding' fullscreen>
                    <main>
                        <div className="detail-image-container">
                            <IonImg src={`${domain}${data.image_one}`} alt='' />
                        </div>

                        <div className="price-details ion-padding">
                            <h1 className="bold heading text-muted">₦{data.total_cost}</h1>
                            <h4 className="lead-text">3 red rooms detached</h4>

                            <section className="card-icons d-flex justify-content-between mt-2">
                                <div className='text-dark d-flex'>
                                    <IonImg src={Bed} alt='' />
                                    <span className="mx-1 lead-text"><big>{data.rooms}</big></span>
                                </div>
                                <div className='text-dark d-flex'>
                                    <IonImg src={Shower} alt='' />
                                    <span className="mx-1 lead-text"><big>{data.bathrooms}</big></span>
                                </div>
                                <div className='text-dark d-flex'>
                                    <IonImg src={BuildingSize} alt='' />
                                    <span className="mx-1 lead-text"><big>{data.size}</big> sqft</span>
                                </div>
                            </section>
                        </div>

                        <section className="property-description">
                            <h5 className="text-muted">{data.description}</h5>
                        </section>

                        <section className="mt-4 w-100">
                            <h5 className="text-muted">Gallery</h5>
                            <IonGrid>
                                <IonRow>
                                    <IonCol size='3'>
                                        <div className="gallery-preview">
                                            <IonImg src={`${domain}${data.image_one}`} alt='' />
                                        </div>
                                    </IonCol>
                                    <IonCol size='3'>
                                        <div className="gallery-preview">
                                            <IonImg src={`${domain}${data.image_two}`} alt='' />
                                        </div>
                                    </IonCol>
                                    <IonCol size='3'>
                                        <div className="gallery-preview">
                                            <IonImg src={`${domain}${data.image_three}`} alt='' />
                                        </div>
                                    </IonCol>
                                    <IonCol size='3'>
                                        <div className="gallery-preview">
                                            <IonImg src={`${domain}${data.image_four}`} alt='' />
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </section>

                        <section className="mt-4 w-100">
                            <h5 className="text-muted">Address</h5>
                            <div className="section wrapper light-blue-bg">
                                <p className="muted ion-padding">{data.location}</p>
                            </div>
                        </section>

                        <section className="w-100 mt-5">
                            <h5 className="text-muted">Price Details</h5>
                            <div className="section wrapper ion-padding light-blue-bg">
                                <ul className='d-flex'>
                                    <li className='mx-3'>{data.rooms} Bedrooms</li>
                                    <li className='mx-3'>{data.bathrooms} Bathrooms</li>
                                    <li className='mx-3'>{data.balcony} Balcony</li>
                                </ul>
                                <small className='text-muted'>
                                    <IonGrid>
                                        <IonRow className='ion-align-items-center ion-justify-content-between'>
                                            <IonCol size='6' className='border-right'>Area</IonCol>
                                            <IonCol size='6'>{data.size}</IonCol>
                                        </IonRow>
                                        <IonRow className='ion-align-items-center'>
                                            <IonCol size='6' className='border-right'>Property type</IonCol>
                                            <IonCol size='6'>Terrace</IonCol>
                                        </IonRow>
                                        <IonRow className='ion-align-items-center'>
                                            <IonCol size='6' className='border-right'>Property type</IonCol>
                                            <IonCol size='6'>Terrace</IonCol>
                                        </IonRow>
                                        <IonRow className='ion-align-items-center'>
                                            <IonCol size='6' className='border-right'>Floor</IonCol>
                                            <IonCol size='6'>{data.floors}</IonCol>
                                        </IonRow>
                                        <IonRow className='ion-align-items-center'>
                                            <IonCol size='6' className='border-right'>Property Age</IonCol>
                                            <IonCol size='6' className='ion-justify-self-end'>
                                                <span className="ion-text-center">{data.property_age}</span>
                                            </IonCol>
                                        </IonRow>

                                    </IonGrid>
                                </small>
                            </div>
                        </section>

                        <section className="w-100 mt-5">
                            <h5 className="text-muted">Property Details</h5>
                            <div className="section wrapper ion-padding light-blue-bg">
                                <small className='text-muted'>
                                    <IonGrid>
                                        <IonRow className='ion-align-items-center ion-justify-content-between'>
                                            <IonCol size='6' className='border-right'>Total cost</IonCol>
                                            <IonCol size='6'>₦{data.total_cost}</IonCol>
                                        </IonRow>
                                        <IonRow className='ion-align-items-center'>
                                            <IonCol size='6' className='border-right'>Deposit</IonCol>
                                            <IonCol size='6'>₦{data.total_cost * 0.25}</IonCol>
                                        </IonRow>

                                    </IonGrid>
                                </small>
                            </div>
                        </section>

                        <section className="btns">
                            <section className="d-flex mt-4">
                                <IonButton
                                    fill='clear'
                                    expand='block'
                                    className='w-50 blue-btn-outline'
                                    routerLink={`/schedule-home/${data?.id}`}
                                    routerDirection='forward'
                                // color="light"
                                >
                                    Schedule Visit
                                </IonButton>
                                <IonButton
                                    fill='clear'
                                    expand='block'
                                    className=' w-50 blue-btn'
                                    routerDirection='forward'
                                    routerLink={`/home-payment-option/${data.id}`}
                                >
                                    Purchase
                                </IonButton>
                            </section>
                        </section>
                    </main>
                </IonContent>
            </IonPage >) : null
    )
}

export default HomeDetail