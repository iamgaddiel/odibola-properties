import { IonImg, IonIcon } from '@ionic/react'
import { carOutline } from 'ionicons/icons'
import React from 'react'


//images


interface componentProps {
    imageURL: string,
    description: string,
    price: string
}

const PropertyPreview = ({ imageURL, description, price } : componentProps) => {
    return (
        <section className='d-flex align-items-center py-4 border-bottom'>

            <div className="gallery-preview-sm mx-4">
                <IonImg src={imageURL} alt='' />
            </div>
            <section>
                <section className="card-details text-left mt-5">
                    <h1 className="text-muted bold text-left">₦{price}</h1>
                    <h3 className="lead-text">{description} </h3>
                </section>

                <section className="card-icons d-flex  mt-2">
                    <div className='text-dark'>
                        <IonIcon icon={carOutline} />
                        <span className="mx-1 lead-text">2</span>
                    </div>
                    <div className='text-dark mx-4'>
                        {/* <FontAwesomeIcon icon={'user-secret'} /> */}
                        <IonIcon icon={carOutline} />
                        <span className="mx-1 lead-text">2</span>
                    </div>
                    <div className='text-dark'>
                        <IonIcon icon={carOutline} />
                        <span className="mx-1 lead-text">1560 sqft</span>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default PropertyPreview