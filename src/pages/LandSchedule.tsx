import { IonPage, IonContent, IonIcon, IonText, IonTextarea, IonButton, IonDatetime, IonImg, IonModal, IonToast } from '@ionic/react'
import { calendarOutline, chevronDownOutline, timeOutline } from 'ionicons/icons'
import { useEffect, useRef, useState } from 'react'
import PropertyPreview from '../components/PropertyPreview'

import SuccessCheck from '../assets/svgs/success-check.svg'
import BackHeaderWithTitle from '../components/BackHeaderWithTitle'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { useRecoilValue } from 'recoil'
import { getHomeDetail, getLandDetail, scheduleLandVisit } from '../utils/api_calls'
import { devDomain } from '../utils/selectors'
import useAuthData from '../hooks/useAuthData'
import { landPurchaseState } from '../utils/atoms'

const LandSchehdule = () => {
    type paramsType = { landId: string }
    const { landId } = useParams<paramsType>()
    const { data } = useQuery(['land-detail', landId], () => getLandDetail(landId))
    const domain = useRecoilValue(devDomain)
    const user = useAuthData()
    const success = useRef<any>()
    const purchaseLandDetail = useRecoilValue(landPurchaseState)

    const [date, setDate] = useState('Select your preferable date')
    const [time, setTime] = useState('Select your preferable time')
    const [msg, setMsg] = useState('')

    interface scheduleInfoProps {
        time: string
        date: string
        additional_info: string
        land: string
        client: string
        amount: number
        plot_quantity: number
        size: string
    }
    const [scheduleInfo, setScheduleInfo] = useState<scheduleInfoProps>({
        time: "",
        date: "",
        additional_info: "",
        land: "",
        client: "",
        amount: 0,
        plot_quantity: 0,
        size: ""
    })
    const [warningMessage, setWarningMessage] = useState('')
    const [displayToast, setDisplayToast] = useState(false)

    const sendScheduleRequest = () => {

        if (date === 'Select your preferable date' || time === 'Select your preferable time') {
            setWarningMessage('schedule date or time not set')
            setDisplayToast(true)
        }
        else {
            console.log(scheduleInfo)
            scheduleLandVisit(scheduleInfo)
            success.current.click()
        }

    }

    useEffect(() => {
        let data = {
            time: time.split('T')[1], // get time from string
            date: date.split('T')[0], // get date from string
            additional_info: msg,
            land: landId,
            client: user?.id,
            amount: purchaseLandDetail.amount,
            plot_quantity: purchaseLandDetail.quantity,
            size: purchaseLandDetail.size
        }
        setScheduleInfo(data)
    }, [date, time, msg, landId, user?.id, purchaseLandDetail.amount, purchaseLandDetail.quantity, purchaseLandDetail.size])

    return (
        <IonPage color='primary'>
            <BackHeaderWithTitle backLink={`/land-schedule-verification/${landId}`} />

            <IonContent>
                <IonToast
                    position='top'
                    color='danger'
                    duration={3000}
                    message={warningMessage}
                    isOpen={displayToast}
                    onDidDismiss={() => setDisplayToast(false)}
                />
                <PropertyPreview description={data?.description} imageURL={`${domain}${data?.image_one}`} price={data?.total_cost} />

                {/* success model */}
                <div id="show-success" ref={success}>
                    <IonModal trigger='show-success'>
                        <IonContent>
                            <div className="d-flex justify-content-center align-items-center h-100 ion-padding">
                                <div>
                                    <IonImg src={SuccessCheck} className='mx-auto' style={{ width: '60px', height: '60px' }} />
                                    <h3 className="bold ion-text-center muted-text mt-3">Application Sent</h3>
                                    <p className="text-muted mt-3 ion-text-center">
                                        We have received your request to schedule a visit to one of our properties. <br /> A representative of ours will call you to confirm your scheduled visit Thanks!
                                    </p>

                                    <div className="d-flex justify-content-center">
                                        <IonButton
                                            className='mt-3 blue-bg rounded-2'
                                            color='light'
                                            fill='clear'
                                            href='/home'
                                            expand='block'
                                        >Okay</IonButton>
                                    </div>
                                </div>

                            </div>
                        </IonContent>
                    </IonModal>
                </div>

                <section className="mt-4 schedule-form-wrapper text-muted ion-padding">
                    <form action="">
                        <section>
                            <p className="bold lead-text">Select your preferred date and time</p>

                            <div className="input-wrapper d-flex justify-content-between light-bg my-2" id="open-modal">
                                <div className='flx-center-y'>
                                    <IonIcon icon={calendarOutline} size='large' className='blue-text' />
                                    <IonText className='mx-2'>{date}</IonText>
                                </div>
                                <IonIcon icon={chevronDownOutline} size="large" />

                                {/* Date Time MOdal */}
                                <IonModal trigger="open-modal">
                                    <IonContent forceOverscroll={false}>
                                        <IonDatetime presentation='date' onIonChange={(e: any) => setDate(e.detail.value)} />
                                    </IonContent>
                                </IonModal>
                            </div>

                            <div className="input-wrapper d-flex justify-content-between light-bg my-2" id='open-time-modal'>
                                <div className='flx-center-y'>
                                    <IonIcon icon={timeOutline} size='large' className='blue-text' />
                                    <IonText className='mx-2'>{time}</IonText>
                                </div>
                                <IonIcon icon={chevronDownOutline} size="large" />
                                <IonModal trigger="open-time-modal">
                                    <IonContent forceOverscroll={false}>
                                        <IonDatetime presentation='time' onIonChange={(e: any) => setTime(e.detail.value)} />
                                    </IonContent>
                                </IonModal>
                            </div>
                        </section>

                        <section className="mt-5">
                            <p className="bold lead-text">Additional Information</p>
                            <IonTextarea
                                placeholder='Type something'
                                rows={12}
                                className="light-bg"
                                onIonChange={(e: any) => setMsg(e.detail.value)}
                            />
                        </section>

                        <IonButton
                            fill='clear'
                            expand='block'
                            color='light'
                            className='blue-bg bold mt-5'
                            onClick={sendScheduleRequest}
                        >
                            Schedule Visit
                        </IonButton>
                    </form>
                </section>
            </IonContent>
        </IonPage >
    )
}

export default LandSchehdule