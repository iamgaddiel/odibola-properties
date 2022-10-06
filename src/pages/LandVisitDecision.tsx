import { IonButton, IonCard, IonCardContent, IonContent, IonIcon, IonImg, IonItem, IonList, IonPage, IonCheckbox, IonRadio } from '@ionic/react'
import React, { useState } from 'react'


import Land1 from '../assets/images/land.png'
import { alertCircleOutline, carOutline, radioButtonOff, radioButtonOffOutline } from 'ionicons/icons'
import LandPreview from '../components/LandPreview'
import BackHeaderWithTitle from '../components/BackHeaderWithTitle'
import { useHistory, useParams } from 'react-router'
import useGetLandDetail from '../hooks/useGetLandDetail'


const LandVisitDecision = () => {
  type paramsType = { landId: string }
  const { landId } = useParams<paramsType>()
  const { domain, res } = useGetLandDetail(landId)
  const land = res
  const history = useHistory()
  const [checked, setChecked] = useState(true)

  const continueVisit = () => {
    if (checked) history.push(`/land-schedule-visit/${land?.id}`)
    else if (checked === false) history.push(`/land-enquiry/${land?.id}`)
  }

  const toggleCheckedOn = () => setChecked(true)
  const toggleCheckedOff = () => setChecked(false)

  return (
    <IonPage>
      <BackHeaderWithTitle backLink='/lands' />
      <IonContent className='ion-padding'>
        <LandPreview
          title={land?.title}
          location={land?.location}
          price={`${land?.total_cost}  per SQM`}
          imageUrl={`${domain}${land?.image_one}`}
        />

        <section className="warning-notice-border ion-padding warning-bg mt-4 mx-3">
          <IonIcon icon={alertCircleOutline} color="warning" />
          <span className="mx-2 bold">Take Note</span>
          <p className="text-muted mt-3">
            Scheduling visits to our lands are only open to those who have the intent to buy.
          </p>
        </section>

        <section className="options">
          <IonCard onClick={toggleCheckedOn}>
            <IonCardContent className='flx-center-y light-bg'>
              {checked ? <IonCheckbox checked /> : <IonCheckbox />}
              <h3 className="text-muted bold mx-2">Yes, I’m a serious buyer</h3>
            </IonCardContent>
          </IonCard>

          <IonCard onClick={toggleCheckedOff}>
            <IonCardContent className='flx-center-y light-bg'>
              {!checked ? <IonCheckbox checked /> : <IonCheckbox />}
              <h3 className="text-muted bold mx-2">I just want to make enquires</h3>
            </IonCardContent>
          </IonCard>

          <section className="ion-padding">
            <IonButton
              fill='clear'
              className='blue-bg mt-4'
              color='light'
              expand='block'
              routerDirection='forward'
              onClick={continueVisit}
            >
              Continue
            </IonButton>
          </section>

        </section>
      </IonContent>
    </IonPage>
  )
}

export default LandVisitDecision