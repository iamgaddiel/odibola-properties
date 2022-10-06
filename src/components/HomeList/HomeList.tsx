import { IonPage, IonContent, IonButton, IonIcon, IonCard, IonFab, IonFabButton, IonImg, IonCardContent } from "@ionic/react"
import { filterOutline, funnelOutline, heart, heartOutline } from "ionicons/icons"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'
import { addToFavorite } from "../../utils/utils"
import BackHeaderWithTitle from "../BackHeaderWithTitle"
import Bed from '../../assets/svgs/bed.svg'
import Shower from '../../assets/svgs/shower.svg'
import BuildingSize from '../../assets/svgs/building_size.svg'
import { useRecoilValue } from "recoil"
import useAuthData from "../../hooks/useAuthData"
import { devDomain } from "../../utils/selectors"





interface homeListProps {
    data: {
        id: string,
        image_one: string,
        image_two: string,
        image_three: string,
        image_four: string,
        location: string,
        size: number,
        property_type: string,
        floors: number,
        bathrooms: number,
        rooms: number,
        property_age: number,
        is_furnished: boolean,
        description: string,
        balcony: number,
        total_cost: number,
        favorite: any
    }[]
}

const HomeList = ({ data }: homeListProps) => {
    const user = useAuthData()
    const domain = useRecoilValue(devDomain)

    return (
        <IonPage>
            <BackHeaderWithTitle backLink='/home' />

            <IonContent>
                <header className='text-center ion-padding'>
                    <h1 className="bold heading">All {data.length} Home(s) </h1>
                    <p className="lead lead-text">Browse through to find your next home!</p>
                </header>

                <main>
                    <div className="action-btns d-flex justify-content-even m-0 p-0">
                        <IonButton
                            color='default'
                            className='light-gray-bg text-dark ion-no-border w-50'
                            fill='clear'
                            expand='full'
                            size='large'
                        >
                            Filter
                            <IonIcon icon={filterOutline} slot='end' />
                        </IonButton>
                        <IonButton
                            color='default'
                            className='light-gray-bg text-dark ion-no-border w-50'
                            fill='clear'
                            expand='block'
                            size='large'
                        >
                            Sort
                            <IonIcon icon={funnelOutline} slot='end' />
                        </IonButton>
                    </div>


                    {/* home list */}
                    <section className="lands">
                        {
                            data.map((home: any) => (
                                <IonCard routerDirection='forward' key={home.id}>

                                    {/* <IonFab vertical='top' horizontal='end' color='default'>
                                        {
                                            home.favorite.find((userId: any) => userId === user.id) === user.id
                                                ? (
                                                    <IonFabButton color='default'>
                                                        <IonIcon icon={heart} color="danger" />
                                                    </IonFabButton>
                                                ) : (
                                                    <IonFabButton color='default' onClick={() => addToFavorite(home.id, 'home', user.id)}>
                                                        <IonIcon icon={heartOutline} color="danger" />
                                                    </IonFabButton>
                                                )
                                        }
                                    </IonFab> */}

                                    {/* image slides */}
                                    <Swiper
                                        modules={[Pagination]}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        // navigation
                                        pagination={{ clickable: true }}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        onSlideChange={() => console.log('slide change')}
                                    >
                                        <SwiperSlide>
                                            <div className="card-image-lg">
                                                <IonImg src={`${domain}${home.image_one}`} alt='' />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-image-lg">
                                                <IonImg src={`${domain}${home.image_two}`} alt=' ' />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-image-lg">
                                                <IonImg src={`${domain}${home.image_three}`} alt='' />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <IonCardContent>
                                        <section className="card-details text-left mt-5">
                                            <h1 className="bold text-left">N{home.total_cost}</h1>
                                            <h3 className="lead-text">{home.rooms} Bed Room </h3>
                                        </section>

                                        <section className="card-icons d-flex justify-content-between mt-2">
                                            <div className='text-dark d-flex'>
                                                <IonImg src={Bed} alt='' />
                                                <span className="mx-1 lead-text">{home.rooms}</span>
                                            </div>
                                            <div className='text-dark d-flex'>
                                                <IonImg src={Shower} alt='' />
                                                <span className="mx-1 lead-text">{home.bathrooms}</span>
                                            </div>
                                            <div className='text-dark d-flex'>
                                                <IonImg src={BuildingSize} alt='' />
                                                <span className="mx-1 lead-text">{home.size}sqft</span>
                                            </div>
                                        </section>

                                        <section className="d-flex mt-4">
                                            <IonButton
                                                fill='clear'
                                                expand='block'
                                                className='w-50 blue-btn-outline'
                                                routerLink={`/schedule-home/${home.id}`}
                                                routerDirection='forward'
                                            >
                                                Schedule Visit
                                            </IonButton>
                                            <IonButton
                                                fill='clear'
                                                expand='block'
                                                className=' w-50 blue-btn'
                                                routerLink={`/home-detail/${home.id}`}
                                                routerDirection='forward'
                                            >
                                                Purchase
                                            </IonButton>
                                        </section>
                                    </IonCardContent>
                                </IonCard>
                            ))
                        }
                    </section>
                </main>
            </IonContent>
        </IonPage>
    )
}

export default HomeList