import { IonButton, IonCard, IonContent, IonIcon, IonPage } from '@ionic/react'
import { checkmarkOutline } from 'ionicons/icons'
import React from 'react'

const ContractOfSale: React.FC = () => {
    return (
        <IonPage>
            <IonContent className='ion-padding'>

                {/* confetti */}
                <section className="ion-padding">
                    <svg width="283" height="75" viewBox="0 0 283 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_286_1037)">
                            <g filter="url(#filter1_d_286_1037)">
                                <rect x="238.661" y="5.0835" width="6" height="19.618" transform="rotate(-57.9157 238.661 5.0835)" fill="#3CD2FD" />
                                <rect x="147.661" y="14.0835" width="8" height="12.7259" transform="rotate(-57.9157 147.661 14.0835)" fill="#3CD2FD" />
                                <rect x="229.29" y="30" width="7" height="12.2906" transform="rotate(89.7267 229.29 30)" fill="#988AFC" />
                                <rect x="260.661" y="57.0879" width="6" height="17.1421" transform="rotate(-57.9697 260.661 57.0879)" fill="#988AFC" />
                                <rect x="80" y="13.2695" width="8" height="19.0926" transform="rotate(-65.3222 80 13.2695)" fill="#FEC842" />
                                <rect x="5.2998" y="18.3057" width="6" height="22.9993" transform="rotate(3.23928 5.2998 18.3057)" fill="#FD729C" />
                                <rect x="37" y="44.3682" width="8" height="17.8913" transform="rotate(-17.2202 37 44.3682)" fill="#59E1B7" />
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_286_1037" x="0" y="0" width="283" height="75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_286_1037" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_286_1037" result="shape" />
                            </filter>
                            <filter id="filter1_d_286_1037" x="0" y="0" width="283" height="75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_286_1037" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_286_1037" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                </section>


                {/* notice/waring */}
                <section className='mt-5'>
                    <div className="primary-notice-bg ion-padding rounded d-flex mt-2">
                        <IonIcon icon={checkmarkOutline} color="primary" size='large' />
                        <div className='mx-3'>
                            <h6 className="bold">Upload proof of payment</h6>
                            <p className="text-muted ">
                                Please take a screenshot of your transfer details and upload it below.
                            </p>
                        </div>
                    </div>
                </section>

                {/* card */}
                <section>
                    <IonCard className="card">
                        <section className="border-bottom ion-padding">
                            <svg className="my-3" width="252" height="94" viewBox="0 0 252 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0513 93.1541C4.50011 93.1541 -0.101706 88.6102 0.998969 83.1693C1.58912 80.252 2.43807 77.3907 3.53863 74.623C5.87483 68.7479 9.29905 63.4097 13.6158 58.9131C17.9325 54.4165 23.0572 50.8496 28.6973 48.416C34.3374 45.9825 40.3824 44.73 46.4872 44.73C52.592 44.73 58.637 45.9825 64.2771 48.4161C69.9171 50.8496 75.0418 54.4165 79.3586 58.9131C83.6753 63.4097 87.0995 68.7479 89.4357 74.623C90.5363 77.3907 91.3852 80.252 91.9754 83.1693C93.0761 88.6103 88.4742 93.1541 82.9231 93.1541L10.0513 93.1541Z" fill="#0F1F93" />
                                <circle cx="46.4878" cy="19.5489" r="19.3697" fill="#0F1F93" />
                                <rect x="122" y="10" width="130" height="27" rx="1.93697" fill="#0F1F93" />
                                <rect x="122" y="47" width="113" height="27" rx="1.93697" fill="#D8DCFB" />
                            </svg>
                        </section>
                        <section className="my-3 ion-padding">
                            <h1 className="bold blue-text">A contract of sale will be sent shortly</h1>
                            <p>Our sales representative will reach out to guide you on next steps.</p>
                        </section>
                    </IonCard>
                </section>

                <section className='mt-5'>
                    <div className="primary-notice-bg ion-padding rounded mt-2">
                        <p>Please submit a physical copy of this bank draft to this address:</p>
                        <p className="blue-text bold ">
                        Orange Island Projects Office, 22, Dr. Omon Ebhomenye Street, Off Awudu Ekpegha Street, Lekki Phase 1, Lagos, Nigeria.
                        </p>
                    </div>
                </section>

                <IonButton
                    fill='clear'
                    expand='block'
                    color='light'
                    className='blue-bg mt-5'
                    href='/home'
                >
                    Complete
                </IonButton>
            </IonContent>
        </IonPage>
    )
}

export default ContractOfSale