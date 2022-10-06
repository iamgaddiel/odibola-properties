import { IonCard, IonCardContent, IonImg } from '@ionic/react'
import React from 'react'


interface cardProps{
    title: string
    address: string
    price: string
}
const SearchResultCard = ({title, address, price}: cardProps) => {
    return (
        <IonCard>
            <IonCardContent slot='start'>
                <div className="card-image">
                    <IonImg src='' alt='' />
                </div>
                <div className="card-texts">
                    <p className="bold txt-16">{title}</p>
                    <p className="txt-14 gray-text">{address}</p>
                    <h6 className="bold txt-14">{price}</h6>
                </div>
            </IonCardContent>
        </IonCard>
    )
}

export default SearchResultCard
