import { IonPage, IonContent, IonLabel, IonIcon, IonInput, IonTextarea, IonButton } from '@ionic/react'
import { star } from 'ionicons/icons'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import BackHeaderWithTitle from '../components/BackHeaderWithTitle'
import LandPreview from '../components/LandPreview'
import LoadingScreen from '../components/LoadingScreen'
import { getHomeDetail, postEnquiry } from '../utils/api_calls'
import { devDomain } from '../utils/selectors'

const HomeEnquiryForm = () => {
    type paramsType = { landId: string }
    const { landId } = useParams<paramsType>()
    const { data } = useQuery(['home-detail', landId], () => getHomeDetail(landId!))
    const domain = useRecoilValue(devDomain)
    const navigate = useNavigate()

    //* ===================== [fForm Data] ===================
    const [full_name, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [question_or_comment, setCommentOrMessage] = useState('')

    const handleFormSubmission = (event: any) => {
        event.preventDefault()
        let formData = {
            full_name,
            email,
            question_or_comment,
            property_type: 'home',
            land: landId
        }
        postEnquiry(formData)
        window.location.href = '/lands'
        // navigate('/lands')
    }

    return (
        data ? <IonPage>

            <BackHeaderWithTitle backLink={`/schedule-land/${landId}`} />
            {/* <Header routerLink='/land-schedule-verification' /> */}

            <IonContent className='ion-padding'>
                <LandPreview
                    title={data.title}
                    location={data.location}
                    price={`₦${data.total_cost} per SQM`}
                    imageUrl={`${domain}${data.image_one}`}
                />

                <section className="ion-padding mt-4 border border-radius-lg ">
                    <h2 className="">Drop us a line or two</h2>
                    <form action="" className='mt-2 text-muted' onSubmit={handleFormSubmission}>

                        <div className="form-group my-3">
                            <IonLabel slot='start'>
                                Name
                                <IonIcon icon={star} color='danger' />
                            </IonLabel>
                            <div className="input-wrapper light-bg mt-2">
                                <IonInput placeholder='Full name' required name='full_name' onIonChange={(e: any) => setFullName(e.target.value)} />
                            </div>
                        </div>

                        <div className="form-group my-3">
                            <IonLabel slot='start'>
                                Email
                                <IonIcon icon={star} color='danger' className='text-sm' />
                            </IonLabel>
                            <div className="input-wrapper light-bg mt-2">
                                <IonInput placeholder='Email address' required type='email' name='email' onIonChange={(e: any) => setEmail(e.target.value)} />
                            </div>
                        </div>


                        <div className="form-group my-3">
                            <IonLabel slot='start'>
                                Question or Comments
                                <IonIcon icon={star} color='danger' />
                            </IonLabel>
                            <div className="input-wrapper light-bg mt-2">
                                <IonTextarea name='message' required rows={7} placeholder="Your message" onIonChange={(e: any) => setCommentOrMessage(e.target.value)} />
                            </div>
                        </div>

                        <div className="my-2 d-flex justify-content-end">
                            <IonButton
                                fill='clear'
                                expand='block'
                                className='blue-bg w-50'
                                color='light'
                                type='submit'>Send</IonButton>
                        </div>
                    </form>
                </section>
            </IonContent>
        </IonPage> : <LoadingScreen />
    )
}

export default HomeEnquiryForm
