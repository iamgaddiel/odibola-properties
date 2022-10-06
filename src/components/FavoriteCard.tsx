import { IonFab, IonFabButton, IonIcon, IonImg } from '@ionic/react'
import { heart } from 'ionicons/icons'


interface FavoritesProps {
    imageUrl: string,
    title: string,
    location: string,
    price: string
}

const FavoriteCard = ({ imageUrl, title, location, price }: FavoritesProps) => {
    return (
        <section className='d-flex align-items-center py-4 border-bottom border-top'>
            <IonFab vertical='top' horizontal='end'>
                <IonFabButton color='default' size='small' translucent>
                    <IonIcon icon={heart} color='danger'/>
                </IonFabButton>
            </IonFab>
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

export default FavoriteCard