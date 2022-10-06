import { IonButton, IonItem, IonLabel, IonList, IonRouterLink } from '@ionic/react'
import React from 'react'
import DocumentListItem from './DocumentListItem'
import NoDocumentFound from './NoDocumentFound'

const MyDocuments = () => {
    let documentCount: any = [1, 2, 3]

    const showDocumentList = () => {
        if (documentCount.length === 0) {
            return <NoDocumentFound />
        }
        return (
            <IonList className='ion-padding'>
                {
                    documentCount.map((key: number) => (
                        <DocumentListItem
                            documentTitle='Offer letter for 2 Plots of land'
                            key={key}
                        />
                    ))
                }
            </IonList>
        )
    }

    return <>{showDocumentList()}</>
}

export default MyDocuments