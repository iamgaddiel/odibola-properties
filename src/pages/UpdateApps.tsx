import { IonItem, IonList, IonPage } from '@ionic/react'
import React from 'react'

const UpdateApps = () => {
  return (
    <IonPage className='ion-padding'>
      <IonList>
        <IonItem>
          <section className='mt-3'>
            <h3 className="bold lead txt-14">Today</h3>
            <div className="notice-info d-flex success-notice-bg py-2">
              <div className="notice-img">
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14.5" cy="14.5" r="14.5" fill="#E3F9E4" />
                  <path d="M10 14.8095L13.3333 18.1429L20 11" stroke="#27C732" strokeWidth="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className="notice-text text-muted txt-14 mx-4 w-75">
                <p>Congratulations! The prove of payment you submitted has been vetted and approved!</p>
              </div>
            </div>
          </section>
        </IonItem>
        <IonItem>
          <section className='mt-3'>
            <h3 className="bold lead txt-14">Today</h3>
            <div className="notice-info d-flex success-notice-bg py-2">
              <div className="notice-img">
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14.5" cy="14.5" r="14.5" fill="#E3F9E4" />
                  <path d="M10 14.8095L13.3333 18.1429L20 11" stroke="#27C732" strokeWidth="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className="notice-text text-muted txt-14 mx-4 w-75">
                <p>Congratulations! The prove of payment you submitted has been vetted and approved!</p>
              </div>
            </div>
          </section>
        </IonItem>
      </IonList>
    </IonPage>
  )
}

export default UpdateApps