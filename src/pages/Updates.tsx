import { IonContent, IonPage } from '@ionic/react'
import UpdateHeader from '../components/UpdateHeader'
import { useState } from 'react'
import UpdateListing from './UpdateListing'
import UpdateApps from './UpdateApps'

const Updates = () => {
  let [updateTabValue, setUpdateTabValue] = useState<string>('listing')

  const switchTab = () => {
    console.log(updateTabValue);

    if (updateTabValue === 'listing') {
      return <UpdateListing />
    }
    else if (updateTabValue === 'application') {
      return <UpdateApps />
    }
  }


  return (
    <IonPage>
      <UpdateHeader updateTabValue={updateTabValue} setUpdateTabValue={setUpdateTabValue} />

      <IonContent>
        {
          switchTab()
        }
      </IonContent>

    </IonPage>
  )
}
export default Updates