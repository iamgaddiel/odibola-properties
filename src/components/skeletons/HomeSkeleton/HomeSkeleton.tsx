import { IonContent, IonSkeletonText, IonCard, IonCardContent, IonHeader, IonToolbar, IonPage } from "@ionic/react"

const HomeSkeleton = () => {
    return (
        <IonPage>
            <IonHeader class='ion-no-border' translucent>
                <IonToolbar className='px-3'>
                    <IonSkeletonText animated style={{ width: '30px', height: '30px' }} slot='start' />
                    <IonSkeletonText animated style={{ width: '30px', height: '30px', overflow: 'hidden', borderRadius: '50%' }} slot='end' />
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className='ion-padding'>
                <header className='ion-padding'>
                    <IonSkeletonText animated style={{ width: '70px' }} />
                    <IonSkeletonText animated style={{ width: '100px' }} />
                </header>

                <main>

                    {/* home preview */}
                    <section className="home-preview mt-5">
                        <div className="d-flex justify-content-between ion-padding">
                            <IonSkeletonText animated style={{ width: '50px' }} />
                            <IonSkeletonText animated style={{ width: '55px' }} />
                        </div>

                        <section>

                            <IonCard>
                                <div className="card-image-lg">
                                    <IonSkeletonText animated style={{ width: '100%', height: '33vh', margin: 'auto' }} />
                                </div>
                                <IonCardContent>
                                    <section className="card-details text-left mt-5">
                                        <IonSkeletonText animated style={{ width: '150px', height: '30px' }} />
                                        <IonSkeletonText animated style={{ width: '200px' }} />
                                    </section>

                                    <section className="card-icons d-flex justify-content-between mt-4">
                                        <div className='text-dark d-flex'>
                                            <IonSkeletonText animated style={{ width: '20px' }} />
                                            <IonSkeletonText animated style={{ width: '50px', marginLeft: '8px' }} />
                                        </div>
                                        <div className='text-dark d-flex'>
                                            <IonSkeletonText animated style={{ width: '20px' }} />
                                            <IonSkeletonText animated style={{ width: '50px', marginLeft: '8px' }} />
                                        </div>
                                        <div className='text-dark d-flex'>
                                            <IonSkeletonText animated style={{ width: '20px' }} />
                                            <IonSkeletonText animated style={{ width: '50px', marginLeft: '8px' }} />
                                        </div>
                                    </section>

                                    <section className="d-flex justify-content-between mt-4">
                                        <IonSkeletonText animated style={{ width: '45%', height: '30px' }} />
                                        <IonSkeletonText animated style={{ width: '45%', height: '30px' }} />
                                    </section>
                                </IonCardContent>
                            </IonCard>
                        </section>
                    </section>


                    {/* ================================ land preview =================*/}
                    <section className="land-preview mt-5">
                        <div className="d-flex justify-content-between ion-padding">
                            <IonSkeletonText animated style={{ width: '50px' }} />
                            <IonSkeletonText animated style={{ width: '55px' }} />
                        </div>

                        <section>

                            <IonCard className='d-flex justify-content-between'>
                                <div className="card-image-sm">
                                    <IonSkeletonText animated style={{ width: '100px', height: '100px' }} />
                                </div>
                                <IonCardContent className='d-flex'>


                                    <section className="card-details mx-3">
                                        <IonSkeletonText animated style={{ width: '70px' }} />
                                        <IonSkeletonText animated style={{ width: '50px' }} />
                                    </section>
                                </IonCardContent>
                            </IonCard>
                        </section>
                    </section>


                    {/* ================================ news preview =================*/}
                    <section className="news-preview mt-5">
                        <div className="d-flex justify-content-between ion-padding">
                            <IonSkeletonText animated style={{ width: '50px' }} />
                            <IonSkeletonText animated style={{ width: '55px' }} />
                        </div>

                        <section>

                            <section className='d-flex'>

                                <div className="card-image-sm">
                                    <IonSkeletonText animated style={{ width: '100px', height: '100px' }} />
                                </div>

                                <section className="card-details mx-3">
                                    <IonSkeletonText animated style={{ width: '60px' }} />
                                    <IonSkeletonText animated style={{ width: '45px' }} />
                                    <IonSkeletonText animated style={{ width: '18rem' }} />
                                    <IonSkeletonText animated style={{ width: '16rem' }} />
                                </section>
                            </section>

                        </section>
                    </section>
                </main>
            </IonContent>
        </IonPage>
    )
}

export default HomeSkeleton