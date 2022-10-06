import { IonPage, IonContent, IonImg, IonRouterLink, IonAlert, IonToast } from '@ionic/react'
import { useRecoilValue } from 'recoil'
import { individualRegDetailSate, organizationRegDetailState, userAccountType } from '../utils/atoms'
import { createUser } from '../utils/api_calls'
import { saveUserData, setVerified } from '../utils/plugins'

import SuccessImage from '../assets/svgs/verification-success.svg'
import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router'


const AccountVerified = () => {
    const individualDetail = useRecoilValue(individualRegDetailSate)
    const organizationDetail = useRecoilValue(organizationRegDetailState)
    const accountType = useRecoilValue(userAccountType)
    const goToLogin = useRef<HTMLIonRouterLinkElement>(null)
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setToastMessage] = useState('')
    const history = useHistory()

    useEffect(() => {

        switch (accountType) {
            case 'individual':
                createUser(individualDetail)
                    .then(res => {
                        if (res.errors) {
                            setShowAlert(true)
                            for (let msg in res.errors) {
                                setToastMessage(`${msg} => ${res.errors[msg][0]}`)
                            }
                        }
                    })
                break;

            case 'organization':
                createUser(organizationDetail)
                    .then(res => {
                        if (res.errors) {
                            setShowAlert(true)
                            for (let msg in res.errors) {
                                setToastMessage(`${msg} => ${res.errors[msg][0]}`)
                            }
                        }
                    })
                break;
        }

        setTimeout(() => {
            goToLogin.current!.click()
            history.push('/login')
        }, 3000)
    }, []) 

    const backToRegistrationForm = () => history.push('/registration')

    return (
        <IonPage>
            <IonAlert
                message={alertMessage}
                onDidDismiss={() => backToRegistrationForm()}
                isOpen={showAlert}
            />
            <IonContent fullscreen className='ion-padding'>
                <section className='form-header mt-5 pt-5 text-center'>
                    <h1 className="text-center blue-text bold">Successfully Completed</h1>
                </section>
                <section className="scanner my-5">
                    <div className="scan-img-wrapper">
                        <IonImg src={SuccessImage} />
                    </div>
                </section>
                <section className='ion-padding text-center'>
                    <h4 className="text-muted">Voila! You have successfully</h4>
                    <h4 className='text-muted'>verified your account</h4>
                </section>
                <IonRouterLink href='/login' ref={goToLogin}></IonRouterLink>
            </IonContent>
        </IonPage>
    )
}

export default AccountVerified