import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import '../assets/css/reg.css'
import PhoneInput from 'react-phone-number-input'

const ChangePhoneNumber = () => {

    let [phone, setPhone] = useState<string>("")

    const handleSetPhone = (phoneNumber: any) => setPhone(phoneNumber)

    // todo: set up react-form-hock

    return (
        <IonPage>
            <IonHeader translucent className='ion-no-border py-3'>
                <IonToolbar color='default'>
                    <IonButtons>
                        <IonBackButton defaultHref='/verify-phone' />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent className='ion-padding'>
                <form action="">
                    <section className='form-header mt-5 mb-5 pt-5'>
                        <h3 className="text-center blue-text bold">Change Phone Number</h3>
                        <p className="mt-4 text-muted text-center">
                            Please enter your number and a <br /> verification code will be sent to you.
                        </p>
                    </section>

                    <IonLabel className='text-muted mt-5'>Phone number</IonLabel>
                    <div className="input-wrapper mx-auto py-3">
                        {/* <PhoneInput
                            onChange={handleSetPhone}
                            value={phone}
                        /> */}
                        <IonInput type='text' 
                            value={phone}
                            onChange={handleSetPhone}
                        />
                    </div>
                    <IonButton
                        className=' mx-auto blue-bg mt-4'
                        fill='clear'
                        expand='block'
                        color='light'
                    >Continue</IonButton>
                </form>
            </IonContent>
        </IonPage>
    )
}

export default ChangePhoneNumber