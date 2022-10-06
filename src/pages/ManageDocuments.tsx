import { IonContent, IonPage, IonSegment, IonSegmentButton } from '@ionic/react'
import { useState } from 'react'
import BackHeaderWithTitle from '../components/BackHeaderWithTitle'
import MyDocuments from '../components/MyDocuments'
import ProofOfPayment from '../components/ProofOfPayment'



const ManageDocuments = () => {
    let [docType, setDocType] = useState('my_documents')

    const switchSegment = () => {
        if (docType === 'my_documents') {
            console.log(docType)
            return <MyDocuments />
        }
        else if (docType === 'proof_of_payment') {
            return <ProofOfPayment />
        }
    }


    return (
        <IonPage>
            <BackHeaderWithTitle title='Manage Documents' backLink='/dashboard' />
            <IonContent>
                <section className='border-bottom mt-4'>
                    <div className="w-75 mx-auto">
                        <IonSegment value={docType}>
                            <IonSegmentButton
                                value=''
                                onClick={() => setDocType('my_documents')}>
                                My Document
                            </IonSegmentButton>
                            <IonSegmentButton
                                value='proof_of_payment'
                                onClick={() => setDocType('proof_of_payment')}>
                                Proof of Payment
                            </IonSegmentButton>
                        </IonSegment>
                    </div>
                </section>

                <section className="ion-margin-top">
                    {
                        switchSegment()
                    }
                </section>
            </IonContent>
        </IonPage>
    )
}

export default ManageDocuments