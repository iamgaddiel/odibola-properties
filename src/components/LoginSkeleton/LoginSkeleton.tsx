import { IonContent, IonSkeletonText } from '@ionic/react'



const LoginSkeleton = () => {
    return (
        <IonContent fullscreen className='ion-padding' >
            <section className='ion-padding mt-5'>
                <IonSkeletonText animated />
                <h2 className='ion-text-center bold text-muted'>Skeleton In</h2>
                <form className='mt-5 ion-margin-top'>
                    <div className="input-wrapper">
                        <IonSkeletonText animated style={{ width: '80%'}} />
                    </div>

                    <div className="input-wrapper my-5">
                        <IonSkeletonText animated style={{ width: '80%'}} />
                    </div>

                    <IonSkeletonText animated className='mt-3 ion-margin-top' style={{ width: '80%'}} />
                </form>
            </section>
        </IonContent>
    )
}

export default LoginSkeleton