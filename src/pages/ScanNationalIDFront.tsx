import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonToolbar } from '@ionic/react'
import React, { useRef, useState } from 'react'
import { cameraOutline } from 'ionicons/icons'

// capacitor plugins
import { Camera, CameraResultType } from '@capacitor/camera';

// images
import FrontIDImage from '../assets/svgs/front-id.svg';
import { individualRegDetailSate, organizationRegDetailState, userAccountType } from '../utils/atoms';
import { useRecoilState, useRecoilValue } from 'recoil';



const ScanNationalIDFront = () => {
    const [FrontID, setFrontIdImage] = useState(FrontIDImage)
    let imageRef = useRef<HTMLIonImgElement>(null)
    let accountType = useRecoilValue(userAccountType)
    let [regState, setRegState] = useRecoilState(individualRegDetailSate)
    let [orgRegState, setOrgRegState] = useRecoilState(organizationRegDetailState)

    const takePicture = async () => {

        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.Base64
        });

        const imageUrl = `data:image/jpeg;base64,${image.base64String}`
        setFrontIdImage(imageUrl)
        setRegState({ ...regState, idFront: imageUrl }) // add IDFront to user state

        switch (accountType){
            case 'individual':
                setRegState({...regState, idFront: imageUrl})
                break;
            
            case 'organization':
                setOrgRegState({...orgRegState, idFront: imageUrl})
                break;
        }

        // setBackNationalIdImage(imageUrl)

    }

    return (
        <IonPage>
            <IonHeader className='ion-no-border py-2'>
                <IonToolbar color='default'>
                    <IonButtons slot='start'>
                        <IonBackButton color="dark" defaultHref='/individual-verification' />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className='ion-padding'>
                <section className='form-header mt-5 pt-5 text-center'>
                    <h1 className="text-center blue-text bold">Verify Identity</h1>
                    <h4 className="mt-4 text-muted bold">Scan the front</h4>
                    <h5 className="text-muted mt-4">Take a photo of the front of your National ID Cad</h5>
                </section>

                <section className="scanner my-5">
                    <div className="scan-img-wrapper">
                        <IonImg src={FrontID} ref={imageRef} lazy-loading />
                    </div>
                </section>
                <section className='ion-padding'>
                    {/* take photo button */}
                    <IonButton
                        className='blue-bg'
                        fill="clear"
                        expand='block'
                        slot='start'
                        color='light'
                        onClick={() => takePicture()}
                    >
                        <IonIcon icon={cameraOutline} className="mx-2" />
                        Take Photo
                    </IonButton>

                    {/* continue button */}
                    <IonButton
                        className='blue-bg mt-4'
                        fill="clear"
                        expand='block'
                        color='light'
                        routerDirection='forward'
                        routerLink='/scan-back-national-id'
                    >
                        Continue
                    </IonButton>
                </section>
            </IonContent>
        </IonPage>
    )
}

export default ScanNationalIDFront
