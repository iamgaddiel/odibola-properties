import {
  IonIcon,
  IonHeader,
  IonToolbar,
  IonRouterLink,
  IonImg,
  IonContent,
  IonCard,
  IonCardContent,
  IonButton,
  IonPage,
  IonAvatar
} from '@ionic/react'
import { menuSharp, carOutline } from 'ionicons/icons'
import { useRecoilValue } from 'recoil'


// images
import Land1 from '../assets/svgs/home-2.svg'
import image from '../assets/svgs/notifications/new-home/home-1.svg'

// css
import '../assets/css/app.css'

// Import Swiper
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper'

// useQuery
import { useQuery } from 'react-query'
import { getNHomes, getNLands } from '../utils/api_calls'
import { devDomain } from '../utils/selectors'
import { useHistory } from 'react-router'
import useAuthData from '../hooks/useAuthData'
import { useEffect, useState } from 'react'
import HomeSkeleton from '../components/skeletons/HomeSkeleton'

// atoms/selectors



const Home = () => {
  const homes = useQuery('nhomes', getNHomes)
  const lands = useQuery('nLands', getNLands)
  const [homeList, setHomeList] = useState<any>([])
  const [landList, setLandList] = useState<any>([])
  let domain = useRecoilValue(devDomain)
  const user = useAuthData()

  // hooks
  const history = useHistory()

  // slides options
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    effect: 'slide',
  };

  const swiper = useSwiper();

  // go to user dashboard 
  const goToDashboard = () => history.push('/dashboard')

  useEffect(() => {
    setHomeList(homes?.data)
    setLandList(lands?.data)
  }, [homes, lands])

  return (
    <>
      {
        homes.isFetching ? <HomeSkeleton /> :
        (
          <IonPage>
          <IonHeader class='ion-no-border' translucent>
            <IonToolbar className='px-3'>
              <IonButton color='default' fill='clear' slot='start'>
                <IonIcon icon={menuSharp} color='dark' />
              </IonButton>
    
              <IonAvatar onClick={goToDashboard} slot='end' style={{ width: '40px', height: '40px'}}>
                <IonImg src={image}/>
              </IonAvatar>
            </IonToolbar>
          </IonHeader>
    
          <IonContent fullscreen className='ion-padding'>
            <header className='ion-padding'>
              <h1 className='heading-text h1 bold'>Welcome {user?.first_name}</h1>
              <h3 className='lead-text'>Let's find your dream property</h3>
            </header>
    
            <main>
    
              {/* home preview */}
              <section className="home-preview mt-5">
                <div className="d-flex justify-content-between ion-padding">
                  <h2 className="heading-text bold">Home</h2>
                  <h5>
                    <IonRouterLink routerDirection='forward' routerLink='/homes'>View all</IonRouterLink>
                  </h5>
                </div>
    
                <section>
                  <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    // navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                  >
                    {
                      homeList?.map((home: any) => (
                        <SwiperSlide key={home.id}>
                          <IonCard>
                            <div className="card-image">
                              <IonImg src={`${domain}${home.image_one}`} alt='' />
                            </div>
                            <IonCardContent>
                              <section className="card-details text-left">
                                <h1 className="bold text-left">{home.total_cost}</h1>
                                <h3 className="lead-text">{home.rooms} Bed Room </h3>
                              </section>
    
                              <section className="card-icons d-flex justify-content-between mt-2 align-items-center">
                                <IonRouterLink slot='start' color='dark'>
                                  <IonIcon icon={carOutline} size='large' />
                                  <span className="mx-1 lead-text">{home.bathrooms}</span>
                                </IonRouterLink>
                                <IonRouterLink slot='start' color='dark'>
                                  <IonIcon icon={carOutline} size='large' />
                                  <span className="mx-1 lead-text">2</span>
                                </IonRouterLink>
                                <IonRouterLink slot='start' color='dark'>
                                  <IonIcon icon={carOutline} size='large' />
                                  <span className="mx-1 lead-text">{home.size} sqft</span>
                                </IonRouterLink>
                              </section>
                            </IonCardContent>
                          </IonCard>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
    
                </section>
              </section>
    
    
              {/* ================================ land preview =================*/}
              <section className="land-preview mt-5">
                <div className="d-flex justify-content-between ion-padding">
                  <h2 className="heading-text bold">Land</h2>
                  <h5>
                    <IonRouterLink routerDirection='forward' routerLink='/lands'>View all</IonRouterLink>
                  </h5>
                </div>
    
                <section>
                  <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    // navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                  >
                    {
                      landList?.map((land: any) => (
                        <SwiperSlide key={land.id}>
                          <IonCard className='d-flex justify-content-between'>
                            <div className="card-image-sm">
                              <IonImg src={`${domain}${land.image_one}`} alt='' />
                            </div>
                            <IonCardContent className='d-flex'>
    
    
                              <section className="card-details mx-3">
                                <h2 className="bold">{land.title} </h2>
                                <h3 className="bold mt-3">{land.total_cost}</h3>
                              </section>
                            </IonCardContent>
                          </IonCard>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
    
                </section>
              </section>
    
    
              {/* ================================ news preview =================*/}
              <section className="news-preview mt-5">
                <div className="d-flex justify-content-between ion-padding">
                  <h2 className="heading-text bold">News</h2>
                  <h5>
                    <IonRouterLink routerDirection='forward' routerLink='/'>View all</IonRouterLink>
                  </h5>
                </div>
    
                <section>
    
                  <section className='d-flex'>
    
                    <div className="card-image-sm">
                      <IonImg src={Land1} alt='' />
                    </div>
    
                    <section className="card-details mx-3">
                      <h2 className="bold">Condominium and Lake</h2>
                      <p className="lead-text mt-3">19, St. Adeola Odeku,
                        Lekki, Lagos. </p>
                      <h3 className="bold mt-3">130,000,000</h3>
                    </section>
                  </section>
    
                </section>
              </section>
            </main>
          </IonContent>
        </IonPage>
        )
      }
    </>

  )
}

export default Home