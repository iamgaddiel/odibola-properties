import { IonButton, IonContent, IonIcon, IonNavLink, IonPage, IonRouterLink, IonText } from '@ionic/react';
import { arrowForwardCircle } from 'ionicons/icons'
import React, { useEffect, useRef } from 'react'


import OnboardImageThree from '../assets/svgs/Rectangle 3onboard-3.svg';
import OnboardImageTwo from '../assets/svgs/Rectangle 4onboard-2.svg';
import OnboardImageOne from '../assets/svgs/Rectangle 5onboard-1.svg';
import '../assets/css/onboarding.css'


// Import Swiper
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper'


const OnboardingSlides: React.FC = () => {

    const swiper = useSwiper();

    const handleNextPage = () => {
        swiper.slideNext()
    }

    return (
        <IonPage>
            <IonContent>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >

                    {/* slide one */}
                    <SwiperSlide>
                        <div className="onboard-wrapper">
                            <div className="onboarding-image">
                                <img src={OnboardImageOne} alt="onboarding screen one" />
                            </div>

                            <div className="onboarding-text-wrapper ion-padding">
                                <h1 className="blue-text onboarding-heading-text">
                                    Let’s find homes you’ll love!
                                </h1>
                                <div className="onboarding-text gray-text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sit molestiae harum eum tenetur debitis.</p>
                                </div>
                                <div className="onboarding-pagination"></div>
                                <div className="onboarding-actions flx-center-y">
                                    {/* skip button */}
                                    <IonRouterLink
                                        routerDirection='forward'
                                        className='gray-text'
                                        href=''
                                    >
                                        <h4>Skip</h4>
                                    </IonRouterLink>

                                    {/* next button */}
                                    <IonButton
                                        fill='clear'
                                        size='large'
                                        className='blue-text'
                                        onClick={handleNextPage}
                                    >
                                        <IonIcon
                                            icon={arrowForwardCircle}
                                            size='large'
                                        />
                                    </IonButton>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* slide two */}
                    <SwiperSlide>
                        <div className="onboard-wrapper">
                            {/* onboarding image */}
                            <div className="onboarding-image">
                                <img src={OnboardImageTwo} alt="onboarding screen one" />
                            </div>

                            <div className="onboarding-text-wrapper ion-padding">
                                <h1 className="blue-text onboarding-heading-text">
                                    Own a piece of the World!
                                </h1>
                                <div className="onboarding-text gray-text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sit molestiae harum eum tenetur debitis.</p>
                                </div>
                                <div className="onboarding-pagination"></div>
                                <div className="onboarding-actions flx-center-y">
                                    {/* skip button */}
                                    <IonRouterLink
                                        routerDirection='forward'
                                        className='gray-text'
                                        href=''
                                    >
                                        <h4>Skip</h4>
                                    </IonRouterLink>

                                    {/* next button */}
                                    <IonButton
                                        fill='clear'
                                        size='large'
                                        className='blue-text'
                                        onClick={handleNextPage}
                                    >
                                        <IonIcon
                                            icon={arrowForwardCircle}
                                            size='large'
                                        />
                                    </IonButton>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* slide three */}
                    <SwiperSlide>
                        <div className="onboard-wrapper">
                            <div className="onboarding-image">
                                <img src={OnboardImageThree} alt="onboarding screen one" />
                            </div>

                            <div className="onboarding-text-wrapper ion-padding">
                                <h1 className="blue-text onboarding-heading-text">
                                    Your dream property awaits!
                                </h1>
                                <div className="onboarding-text gray-text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sit molestiae harum eum tenetur debitis.</p>
                                </div>
                                <div className="onboarding-pagination"></div>
                                <div className="onboarding-action">
                                    {/* next button */}
                                    <IonButton
                                        routerLink='/registration'
                                        routerDirection='forward'
                                        fill='clear'
                                        color='light'
                                        className='blue-bg'
                                        expand='block'
                                        shape='round'
                                    >
                                        Get Started
                                    </IonButton>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </IonContent>
        </IonPage>
    )
}

export default OnboardingSlides