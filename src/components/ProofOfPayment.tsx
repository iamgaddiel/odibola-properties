import { IonList } from '@ionic/react'
import React from 'react'
import NoDocumentFound from './NoDocumentFound'
import ProofOfPaymentListItem from './ProofOfPaymentListItem'

const ProofOfPayment = () => {
  let documentCount: any = [1]

  const proofOfPayments = () => {
    if (documentCount.length === 0) {
      return <NoDocumentFound />
    }
    return (
      <IonList className='ion-padding'>
        {
          documentCount.map((key: number) => (
            <ProofOfPaymentListItem
              documentTitle='Offer letter for 2 Plots of land'
              key={key}
            />
          ))
        }
      </IonList>
    )
  }

  return <>{proofOfPayments()}</>
}

export default ProofOfPayment