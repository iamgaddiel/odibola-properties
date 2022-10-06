import { IonImg } from '@ionic/react'
import React from 'react'


interface LandPreviewProps{
    imageUrl: string,
    title: string,
    location: string,
    price: string
}

const LandPreview = ({imageUrl, title, location, price}: LandPreviewProps) => {
    return (
        <section className='d-flex align-items-center py-4 border-bottom border-top'>

            <div className="gallery-preview-sm mx-4">
                <IonImg src={imageUrl} alt='' />
            </div>
            <section>
                <section className="card-details bold txt-16 text-left">
                    <p className="text-muted bold text-left h5">{title}</p>
                    <p className="lead-text txt-14 gray-text">{location} </p>
                    <small className=" xt-14 text-muted bold">{price}</small>
                </section>
            </section>
        </section>
    )
}

export default LandPreview