import { IonPage, IonContent, IonButton, IonIcon, IonCard, IonCardContent, IonImg, IonFab, IonFabButton } from '@ionic/react'
import { filterOutline, funnelOutline, heart, heartOutline, home } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'

import { getAllLands } from '../utils/api_calls'
import { devDomain } from '../utils/selectors'

import BackHeaderWithTitle from '../components/BackHeaderWithTitle'
import { addToFavorite } from '../utils/utils'
import { getUserData } from '../utils/plugins'
import useAuthData from '../hooks/useAuthData'


const LandList: React.FC = () => {
    const { data } = useQuery('homes', getAllLands)
    let domain = useRecoilValue(devDomain)
    const user = useAuthData();


    return (
        <IonPage>
            <BackHeaderWithTitle backLink='/home' />

            <IonContent>
                <header className='text-center ion-padding'>
                    <h1 className="bold heading">All {data?.length} Land(s)</h1>
                    <p className="lead lead-text">Browse through to find your next land!</p>
                </header>

                <main>
                    <div className="action-btns d-flex justify-content-even m-0 p-0">
                        <IonButton
                            color='default'
                            className='light-gray-bg text-dark ion-no-border w-50'
                            fill='clear'
                            expand='full'
                            size='large'
                        >
                            Filter
                            <IonIcon icon={filterOutline} slot='end' />
                        </IonButton>
                        <IonButton
                            color='default'
                            className='light-gray-bg text-dark ion-no-border w-50'
                            fill='clear'
                            expand='block'
                            size='large'
                        >
                            Sort
                            <IonIcon icon={funnelOutline} slot='end' />
                        </IonButton>
                    </div>


                    {/* lands list */}
                    <section className="lands">
                    {
                            data?.map((land: any) => (
                                <IonCard routerDirection='forward' key={land.id}>
                                    <IonFab horizontal='end' vertical='top'>
                                    {
                                            land.favorite?.find((userId: any) => userId === user?.id) === user?.id ?
                                                (
                                                    <IonFabButton color='default'>
                                                        <IonIcon icon={heart} color="danger" />
                                                    </IonFabButton>
                                                ) :
                                                (
                                                    <IonFabButton color='default' onClick={() => addToFavorite(land.id, 'land', user?.id)}>
                                                        <IonIcon icon={heartOutline} color="danger" />
                                                    </IonFabButton>
                                                )
                                        }

                                    {/* image slides */}
                                    </IonFab>
                                    <Swiper
                                        modules={[Pagination]}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        onSlideChange={() => console.log('slide change')}
                                    >
                                        <SwiperSlide>
                                            <div className="card-image-lg">
                                                <IonImg src={`${domain}${land.image_one}`} alt='' />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-image-lg">
                                                <IonImg src={`${domain}${land.image_two}`} alt=' ' />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-image-lg">
                                                <IonImg src={`${domain}${land.image_three}`} alt='' />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <IonCardContent>
                                        <section className="card-details text-left mt-2">
                                            <h2 className='bold'>{land.title}</h2>
                                            <h5 className='text-muted my-2'>{land.location}</h5>
                                            <h3 className="bold">₦{land.total_cost} per SQM</h3>
                                        </section>

                                        <section className="d-flex mt-4">
                                            <IonButton
                                                fill='clear'
                                                expand='block'
                                                className='w-50 blue-btn-outline'
                                                routerLink={`/land-schedule-verification/${land.id}`}
                                                routerDirection='forward'
                                            >
                                                Schedule Visit
                                            </IonButton>
                                            <IonButton
                                                fill='clear'
                                                expand='block'
                                                className=' w-50 blue-btn'
                                                routerLink={`/land-detail/${land.id}`}
                                                // routerLink={`/land-purchase/${land.id}`}
                                                // routerLink={`/home-detail/${land.id}`}
                                                routerDirection='forward'
                                            >
                                                Purchase
                                            </IonButton>
                                        </section>
                                    </IonCardContent>
                                </IonCard>
                            ))
                        }
                    </section>
                </main>
            </IonContent>
        </IonPage>
    )
}

export default LandList