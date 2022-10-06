import { IonCard, IonCol, IonContent, IonIcon, IonPage, IonRow } from '@ionic/react'
import { chevronForwardOutline, lockClosedOutline } from 'ionicons/icons'
import React from 'react'
import Header from '../components/Header'
import PropertyPreview from '../components/PropertyPreview'


// image

// css
import '../assets/css/verification.css';
import { useParams } from 'react-router'
import useGetHomeDetail from '../hooks/useGetHomeDetail'
import BackHeaderWithTitle from '../components/BackHeaderWithTitle'

const HomePaymentOption: React.FC = () => {
  type paramsType = { id: string }
  const { id } = useParams<paramsType>()
  const { domain,  res } = useGetHomeDetail(id)

  return (
    res !== undefined ?
      (
        <IonPage>
          <BackHeaderWithTitle backLink={`/home-detail/${res.id}`} />

          <IonContent className='ion-padding' fullscreen>
            <h1 className='text-muted text-center bold'>Payment</h1>
            <PropertyPreview
              description={`${res.description}`}
              price={`${res.total_cost} per SQM`}
              imageURL={`${domain}${res.image_one}`}
            />

            <section className='mt-2 ion-padding'>
              <span className="text-muted">Select Payment Plan</span>
              <div className="primary-notice-bg ion-padding rounded flx-center-y mt-2">
                <IonIcon icon={lockClosedOutline} color="primary" size='large' />
                <div className='mx-2'>
                  <h6 className="bold">Pay Deposit to Secure Property</h6>
                  <p className="text-muted ">
                    Secure property by paying  25% deposit.
                  </p>
                </div>
              </div>
            </section>


            <div className="form-card">
              {/*  card */}
              <IonCard
                routerDirection='forward'
                routerLink='#' // todo: implement payment with card
                className='p-2'
              >
                <IonRow className='ion-justify-content-between ion-align-items-center'>
                  <IonCol size='11'>
                    <div className='d-flex align-items-center'>
                      <div className="img-container">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_187_1040)">
                            <path d="M22 11C22 10.7348 22.1054 10.4804 22.2929 10.2929C22.4804 10.1054 22.7348 10 23 10H27C27.2652 10 27.5196 10.1054 27.7071 10.2929C27.8946 10.4804 28 10.7348 28 11V13C28 13.2652 27.8946 13.5196 27.7071 13.7071C27.5196 13.8946 27.2652 14 27 14H23C22.7348 14 22.4804 13.8946 22.2929 13.7071C22.1054 13.5196 22 13.2652 22 13V11Z" fill="#0F1F93" />
                            <path d="M4 4C2.93913 4 1.92172 4.42143 1.17157 5.17157C0.421427 5.92172 0 6.93913 0 8L0 24C0 25.0609 0.421427 26.0783 1.17157 26.8284C1.92172 27.5786 2.93913 28 4 28H28C29.0609 28 30.0783 27.5786 30.8284 26.8284C31.5786 26.0783 32 25.0609 32 24V8C32 6.93913 31.5786 5.92172 30.8284 5.17157C30.0783 4.42143 29.0609 4 28 4H4ZM30 8V18H2V8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6H28C28.5304 6 29.0391 6.21071 29.4142 6.58579C29.7893 6.96086 30 7.46957 30 8ZM28 26H4C3.46957 26 2.96086 25.7893 2.58579 25.4142C2.21071 25.0391 2 24.5304 2 24V22H30V24C30 24.5304 29.7893 25.0391 29.4142 25.4142C29.0391 25.7893 28.5304 26 28 26Z" fill="#0F1F93" />
                          </g>
                          <defs>
                            <clipPath id="clip0_187_1040">
                              <rect width="32" height="32" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h4 className="text-muted mx-3">Pay with Card</h4>
                    </div>
                  </IonCol>

                  <IonCol>
                    <IonIcon icon={chevronForwardOutline} className="blue-text" />
                  </IonCol>
                </IonRow>
              </IonCard>

              {/* bank */}
              <IonCard
                routerDirection='forward'
                routerLink={`/bank-transfer/${id}`}
                className='p-2'
              >
                <IonRow className='ion-justify-content-between ion-align-items-center'>
                  <IonCol size='11'>
                    <div className='d-flex align-items-center'>
                      <div className="img-container">
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.7503 22.1668V17.4168H28.5003V14.2502L34.8337 19.7918L28.5003 25.3335V22.1668H23.7503ZM22.167 12.1918V14.2502H3.16699V12.1918L12.667 6.3335L22.167 12.1918ZM11.0837 15.8335H14.2503V23.7502H11.0837V15.8335ZM4.75033 15.8335H7.91699V23.7502H4.75033V15.8335ZM20.5837 15.8335V19.7918L17.417 22.6418V15.8335H20.5837ZM14.4087 25.3335L13.4587 26.1252L16.1503 28.5002H3.16699V25.3335H14.4087ZM26.917 23.7502V28.5002H22.167V31.6668L15.8337 26.1252L22.167 20.5835V23.7502H26.917Z" fill="#0F1F93" />
                        </svg>
                      </div>
                      <h4 className="text-muted">Pay with Bank</h4>
                    </div>
                  </IonCol>

                  <IonCol>
                    <IonIcon icon={chevronForwardOutline} className="blue-text" />
                  </IonCol>
                </IonRow>
              </IonCard>


              {/* bank draft */}
              <IonCard
                routerDirection='forward'
                routerLink={`/bank-draft/${res.id}`}
                className='p-2'
              >
                <IonRow className='ion-justify-content-between ion-align-items-center'>
                  <IonCol size='11'>
                    <div className='d-flex align-items-center'>
                      <div className="img-container">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M26.6667 2.6665C27.0203 2.6665 27.3594 2.80698 27.6095 3.05703C27.8595 3.30708 28 3.64622 28 3.99984V9.00917L25.3333 11.6758V5.33317H6.66667V26.6665H25.3333V22.9892L28 20.3225V27.9998C28 28.3535 27.8595 28.6926 27.6095 28.9426C27.3594 29.1927 27.0203 29.3332 26.6667 29.3332H5.33333C4.97971 29.3332 4.64057 29.1927 4.39052 28.9426C4.14048 28.6926 4 28.3535 4 27.9998V3.99984C4 3.64622 4.14048 3.30708 4.39052 3.05703C4.64057 2.80698 4.97971 2.6665 5.33333 2.6665H26.6667ZM29.0373 11.7438L30.9227 13.6292L20.552 23.9998L18.664 23.9972L18.6667 22.1145L29.0373 11.7438ZM17.3333 15.9998V18.6665H10.6667V15.9998H17.3333ZM21.3333 10.6665V13.3332H10.6667V10.6665H21.3333Z" fill="#0F1F93" />
                        </svg>
                      </div>
                      <h4 className="text-muted mx-3">Pay with Bank Draft</h4>
                    </div>
                  </IonCol>

                  <IonCol>
                    <IonIcon icon={chevronForwardOutline} className="blue-text" />
                  </IonCol>
                </IonRow>
              </IonCard>
            </div>

          </IonContent >
        </IonPage >
      )
      :
      (
        <IonPage>
          <IonContent>
            <p>No UI</p>
          </IonContent>
        </IonPage>
      )
  )
}

export default HomePaymentOption