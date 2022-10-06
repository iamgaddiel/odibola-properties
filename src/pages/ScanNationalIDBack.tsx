import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonImg, IonButton, IonIcon } from '@ionic/react'
import { cameraOutline } from 'ionicons/icons'
import { useState, useRef, useEffect } from 'react'

// images
import BackID from '../assets/svgs/back-id.svg';

import { Camera, CameraResultType } from '@capacitor/camera';
import { individualRegDetailSate, organizationRegDetailState, userAccountType } from '../utils/atoms';
import { useRecoilState, useRecoilValue } from 'recoil';


const ScanNationalIDBack = () => {
    let [backNationIdImage, setBackNationalIdImage] = useState("")
    let backImagePreview = useRef<any>(null)
    let accountType = useRecoilValue(userAccountType)
    let [regState, setRegState] = useRecoilState(individualRegDetailSate)
    let [orgRegState, setOrgRegState] = useRecoilState(organizationRegDetailState)

    const takePicture = async () => {

        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Base64
        });

        if (backImagePreview && backImagePreview.current) {
            let imageUrl = `data:image/jpeg;base64,${image.base64String}`

            switch (accountType){
                case 'individual':
                    setRegState({...regState, idBack: imageUrl})
                    break;
                
                case 'organization':
                    setOrgRegState({...orgRegState, idBack: imageUrl})
                    break;
            }

            setBackNationalIdImage(imageUrl)
        }
    }

    useEffect(() => {
        setBackNationalIdImage(BackID)
    }, [])

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
                    <h4 className="mt-4 text-muted bold">Scan the back</h4>
                    <h5 className="text-muted mt-4">Take a photo of the back of your National ID Cad</h5>
                </section>

                <form action="">
                    <section className="scanner my-5">
                        <div className="scan-img-wrapper">
                            <IonImg src={backNationIdImage} ref={backImagePreview} />
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
                            routerLink='/verification-success'
                        >
                            Continue
                        </IonButton>
                    </section>
                </form>
            </IonContent>
        </IonPage>
    )
}

export default ScanNationalIDBack;