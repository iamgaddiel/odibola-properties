import { IonCard, IonCardContent, IonContent, IonSkeletonText } from "@ionic/react"

const HouseListSkeleton = () => {
    return (
        <>
            <IonContent>
                <header className='text-center ion-padding'>
                    <IonSkeletonText animated style={{ width: '70px', height: '30px', margin: 'auto' }} />
                    <IonSkeletonText animated style={{ width: '100px', height: '10px', margin: '10px auto' }} />
                </header>

                <main>
                    <div className="action-btns d-flex justify-content-even m-0 p-0">
                        <IonSkeletonText animated style={{ width: '45%', height: '40px', margin: 'auto' }} />
                        <IonSkeletonText animated style={{ width: '45%', height: '40px', margin: 'auto' }} />
                    </div>

                    {/* home list */}
                    <section className="lands mt-5">
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
                                        <IonSkeletonText animated style={{ width: '50px', marginLeft: '8px' }} />
                                        <IonSkeletonText animated style={{ width: '20px' }} />
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
                </main>
            </IonContent>
        </>
    )
}

export default HouseListSkeleton