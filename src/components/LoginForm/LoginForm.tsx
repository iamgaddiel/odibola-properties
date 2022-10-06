import { IonButton, IonContent, IonInput, IonPage, IonToast } from '@ionic/react'
import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router'
import AuthHeader from '../AuthHeader'
import useAuthData from '../../hooks/useAuthData'
import { authUser } from '../../utils/api_calls'
import { saveUserData } from '../../utils/plugins'



const LoginForm: React.FC = () => {
    const history = useHistory()
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const [email, setEmail] = useState()
    const [password, setPassword] = useState('')
    const goToHome = useRef<HTMLAnchorElement>(null)
    
    
    useEffect(() => {
        console.log('fined')
    }, [])

    const handleLogin = async (event: any) => {
        event.preventDefault()

        // display tost if email/password field is empty
        if (email === '' || password === '') {
            setShowToast(true)
            setToastMessage('email and password is required')
        }

        else {
            try {
                const res = await authUser({ email, password })
                if (res.login_error) {
                    setShowToast(true)
                    setToastMessage(res.login_error)
                }
                else { 
                    saveUserData(res) // save user data ionic plugin
                    goToHome.current?.click()
                    // history.replace('/home') // todo: reload page when redirecting to /home
                }
            }
            catch (err) {
                setToastMessage(`₦{err}`)
            }
        }
    }


    return (
        <IonPage>
            {/* Header for Login/Registration Screen */}

            <IonContent fullscreen className='ion-padding'>
                <AuthHeader />
                <IonToast
                    color='danger'
                    duration={3000}
                    onDidDismiss={() => setShowToast(false)}
                    isOpen={showToast}
                    position='top'
                    message={toastMessage}
                />

                <section className='ion-padding mt-5'>
                    <a href='/home' ref={goToHome}></a> {/* ref to rerender home page | do not remove */}
                    <h2 className='ion-text-center bold text-muted'>Sign In</h2>
                    <form onSubmit={handleLogin} className='mt-5 ion-margin-top'>

                        {/* Email */}
                        <div className="input-wrapper">
                            <IonInput
                                type='email'
                                placeholder='Email'
                                onIonChange={(e: any) => setEmail(e.detail.value)}
                                color='dark'
                            />
                        </div>

                        {/* Password */}
                        <div className="input-wrapper my-5">
                            <IonInput
                                type='password'
                                placeholder='Password'
                                onIonChange={(e: any) => setPassword(e.detail.value)}
                                color='dark'
                            />
                        </div>

                        <IonButton
                            type='submit'
                            fill='clear'
                            expand='block'
                            shape='round'
                            className='blue-bg text-light mt-3 ion-margin-top'
                        >
                            Login
                        </IonButton>
                    </form>
                </section>
            </IonContent>
        </IonPage>
    )
}

export default LoginForm