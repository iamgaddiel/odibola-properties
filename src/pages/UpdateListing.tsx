import { IonItem, IonList } from '@ionic/react'
import NewHomeUpdateItem from '../components/NewHomeUpdateItem'
import NewLandUpdateItem from '../components/NewLandUpdateItem'

const UpdateListing = () => {
    return (
        <IonList>
            <IonItem
                slot='start'
                routerDirection='forward'
                routerLink='/'
                className=''
            >   
                <NewHomeUpdateItem numberOfHome={5} />
            </IonItem>
            <IonItem
                slot='start'
                routerDirection='forward'
                routerLink='/'
                className=''
            >   
                <NewLandUpdateItem numberOfHome={15} />
            </IonItem>
        </IonList>
    )
}

export default UpdateListing