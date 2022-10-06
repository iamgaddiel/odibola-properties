import { IonButton, IonContent, IonHeader, IonTitle, IonButtons, IonBackButton, IonInput, IonPage, IonRouterLink, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { individualRegDetailSate, userAccountType } from '../utils/atoms'
import { verifyOtpCode } from '../utils/api_calls'
import { useNavigate } from 'react-router-dom'


const VerifyPhone: React.FC = () => {
    // todo: uncomment for production
    let { phone } = useRecoilValue(individualRegDetailSate)
    let accountType = useRecoilValue(userAccountType)
    let [countDownTimer, setCountDownTimer] = useState(30);
    let navigate = useNavigate()
    // let [phone] = useState('+2347050595335') // todo:: remove before deployment

    //todo:: (send code again) does not work


    useEffect(() => {
        setInterval(
            () => {
                setCountDownTimer(countDownTimer)
                countDownTimer--
                if (countDownTimer === 0) setCountDownTimer(30);
            },
            1000
        )
    }, [])

    interface formInputs {
        firstDigit: string
        secondDigit: string
        thirdDigit: string
        fourthDigit: string
    }
    const { register, handleSubmit, formState: { errors } } = useForm<formInputs>();

    const handleOtp: SubmitHandler<formInputs> = async ({ firstDigit, secondDigit, thirdDigit, fourthDigit }) => {
        let otpCode = `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}`
        let res = await verifyOtpCode(otpCode, phone)

        switch(accountType){
            case 'individual':
                if (res) navigate('/individual-verification')
                break;
            case 'organization':
                if (res) navigate('/organization-verification')
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar slot='start'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Back Button</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding' fullscreen>

                <header className='mt-5 pt-5'>
                    <h5 className="text-center blue-text">Verify Phone Number</h5>
                    <p className="mt-4 text-muted text-center">Enter 4 digit number that was <br /> sent to, {phone}</p>
                </header>
                <main>
                    <form onSubmit={handleSubmit(handleOtp)}>
                        <div className="d-flex justify-content-center w-50 mx-auto">

                            <IonInput
                                type='text'
                                placeholder='0'
                                className='border-bottom text-center mx-2 text-dark verification-code'
                                {...register('firstDigit', {
                                    required: 'This field is required',
                                    maxLength: {
                                        message: 'The maximum values accepted is 1',
                                        value: 1
                                    },
                                    minLength: {
                                        message: 'Enter at least one value',
                                        value: 1
                                    }
                                })}
                                maxlength={1}
                                inputmode='numeric'

                            />
                            <IonInput
                                type='text'
                                placeholder='0'
                                className='border-bottom text-center mx-2 text-dark verification-code'
                                {...register('secondDigit', {
                                    required: 'This field is required',
                                    maxLength: {
                                        message: 'The maximum values accepted is 1',
                                        value: 1
                                    },
                                    minLength: {
                                        message: 'Enter at least one value',
                                        value: 1
                                    }
                                })}
                                maxlength={1}
                                inputmode='numeric'

                            />
                            <IonInput
                                type='text'
                                placeholder='0'
                                className='border-bottom text-center mx-2 text-dark verification-code'
                                {...register('thirdDigit', {
                                    required: 'This field is required',
                                    maxLength: {
                                        message: 'The maximum values accepted is 1',
                                        value: 1
                                    },
                                    minLength: {
                                        message: 'Enter at least one value',
                                        value: 1
                                    }
                                })}
                                maxlength={1}
                                inputmode='numeric'

                            />
                            <IonInput
                                type='text'
                                placeholder='0'
                                className='border-bottom text-center mx-2 text-dark verification-code'
                                {...register('fourthDigit', {
                                    required: 'This field is required',
                                    maxLength: {
                                        message: 'The maximum values accepted is 1',
                                        value: 1
                                    },
                                    minLength: {
                                        message: 'Enter at least one value',
                                        value: 1
                                    }
                                })}
                                maxlength={1}
                                inputmode='numeric'
                            />
                        </div>

                        <IonButton
                            fill='clear'
                            size='large'
                            expand='block'
                            className='blue-bg mt-5 text-bold w-75 mx-auto'
                            color='light'
                            type='submit'
                        // onClick={() => console.log('welcome')}
                        >
                            Continue
                        </IonButton>

                        {/* <IonButton
                            fill='clear'
                            size='large'
                            expand='block'
                            className='blue-bg mt-5 text-bold w-75 mx-auto'
                            color='light'
                            type="submit"
                        >
                            Continue
                        </IonButton> */}

                        <section className="action mt-5 text-center">
                            <small className="blue-text text-center">
                                {/* Code Expires in 0:<span>{countDownTimer}</span> */}
                            </small>
                            <div className="mt-4 text-danger text-center">
                                <div>
                                    <IonRouterLink className='text-danger text-center mt-5'> Send code again</IonRouterLink>
                                </div>
                                <div>
                                    <IonRouterLink
                                        routerLink='/change-number'
                                        routerDirection='forward'
                                        className='text-danger text-center mt-5'>
                                        Change phone number
                                    </IonRouterLink>
                                </div>
                            </div>
                        </section>
                    </form>
                </main>
            </IonContent>
        </IonPage>
    )
}

export default VerifyPhone