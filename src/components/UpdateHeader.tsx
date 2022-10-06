import { IonHeader, IonLabel, IonToolbar, IonSegment, IonSegmentButton } from '@ionic/react'


interface updateHeaderProp{
  updateTabValue: any
  setUpdateTabValue: any
}


const UpdateHeader = ({ updateTabValue, setUpdateTabValue}: updateHeaderProp) => {

  return (
    <IonHeader className='ion-no-border'>
      <IonToolbar>
        {/* <div>
          <IonTitle className='ion-text-center'>Updates</IonTitle>
        </div> */}
        <IonSegment value={updateTabValue}>
          <IonSegmentButton value='listing' onClick={() => setUpdateTabValue('listing')}>
            <IonLabel>Listing</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='application' onClick={() => setUpdateTabValue('application')}>
            <IonLabel>Application</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
    </IonHeader>
  )
}

export default UpdateHeader