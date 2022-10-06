import { IonModal, IonSegment, IonSegmentButton, IonLabel, IonRange, IonButton } from '@ionic/react'
import React, { useState } from 'react'



interface filterModalProps {
    isModalOpen: boolean,
    setIsModalOpen: any
}


const FilterModal = ({ isModalOpen, setIsModalOpen }: filterModalProps) => {

    const [propertyPrice, setPropertyPrice] = useState<number>()
    const [numberOfRooms, setNumberOfRooms] = useState<string>('0')
    const [numberOfBathrooms, setNumberOfBathrooms] = useState<string>('0')
    const [area, setArea] = useState<string>('0')
    const [propertyType, setPropertyType] = useState<string>('home')

    const handleSearch = (e: any) => {
        e.preventDefault();
        let data = {
            rooms: numberOfRooms,
            bathrooms: numberOfBathrooms,
            area,
            property_type: propertyType,
            price: propertyPrice
        }

        // todo: send data to api
        console.log(data) //todo: remove this
    }

    const showRoomsAndBathrooms = () => {
        if (propertyType === 'home') {
            return (
                <>
                    <section className="range-selection mt-1">
                        <p className="bold">Rooms</p>
                        <IonSegment value={numberOfRooms} onIonChange={(e: any) => setNumberOfRooms(e.detail.value)}>
                            <IonSegmentButton value='0' className='py-2'>Any</IonSegmentButton>
                            <IonSegmentButton value='1'>1</IonSegmentButton>
                            <IonSegmentButton value='2'>2</IonSegmentButton>
                            <IonSegmentButton value='3'>3</IonSegmentButton>
                            <IonSegmentButton value='4'>4+</IonSegmentButton>
                        </IonSegment>
                    </section>

                    <section className="range-selection mt-1">
                        <p className="bold">Bathrooms</p>
                        <IonSegment value={numberOfBathrooms} onIonChange={(e: any) => setNumberOfBathrooms(e.detail.value)}>
                            <IonSegmentButton value='0' className='py-2'>Any</IonSegmentButton>
                            <IonSegmentButton value='1'>1</IonSegmentButton>
                            <IonSegmentButton value='2'>2</IonSegmentButton>
                            <IonSegmentButton value='3'>3</IonSegmentButton>
                            <IonSegmentButton value='4'>4</IonSegmentButton>
                        </IonSegment>
                    </section>
                </>
            )
        }
    }
    return (
        <IonModal
            breakpoints={[0.5, .85]}
            isOpen={isModalOpen}
            initialBreakpoint={.85}
            onDidDismiss={() => setIsModalOpen(false)}
            className="ion-padding my-3 search-modal"
            data-modal="search-model"
        >
            <div className="modal-wraper ion-padding">

                <form onSubmit={handleSearch}>
                    {/* ===============  property type ======================  */}
                    <h1 className="bold txt-15  text-16">Filter your search</h1>

                    <section className="property-type">
                        <p className="bold">Property type</p>
                        <IonSegment className='mt-3' value={propertyType} onIonChange={(e: any) => setPropertyType(e.detail.value)}>
                            <IonSegmentButton value='home' className='py-3' defaultChecked>
                                <IonLabel>Home</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value='land' className='py-3'>
                                <IonLabel>Land</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </section>


                    <section className="range-selection mt-4">
                        <p className="bold">Price range</p>

                        <section className="w-50 mx-auto" style={{ position: 'relative' }}>
                            <svg style={{ position: 'absolute', bottom: '-40px' }} width="172" height="65" viewBox="0 0 172 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 51C0 49.8954 0.895431 49 2 49H10C11.1046 49 12 49.8954 12 51V64H0V51Z" fill="#D8DCFB" />
                                <path d="M16 44C16 42.8954 16.8954 42 18 42H26C27.1046 42 28 42.8954 28 44V64H16V44Z" fill="#D8DCFB" />
                                <path d="M32 35C32 33.8954 32.8954 33 34 33H42C43.1046 33 44 33.8954 44 35V65H32V35Z" fill="#D8DCFB" />
                                <path d="M48 24C48 22.8954 48.8954 22 50 22H58C59.1046 22 60 22.8954 60 24V64H48V24Z" fill="#D8DCFB" />
                                <path d="M64 2C64 0.895431 64.8954 0 66 0H74C75.1046 0 76 0.895431 76 2V64H64V2Z" fill="#D8DCFB" />
                                <path d="M80 35C80 33.8954 80.8954 33 82 33H90C91.1046 33 92 33.8954 92 35V64H80V35Z" fill="#D8DCFB" />
                                <path d="M96 15C96 13.8954 96.8954 13 98 13H106C107.105 13 108 13.8954 108 15V64H96V15Z" fill="#D8DCFB" />
                                <path d="M112 29C112 27.8954 112.895 27 114 27H122C123.105 27 124 27.8954 124 29V64H112V29Z" fill="#D8DCFB" />
                                <path d="M128 35C128 33.8954 128.895 33 130 33H138C139.105 33 140 33.8954 140 35V64H128V35Z" fill="#D8DCFB" />
                                <path d="M144 44C144 42.8954 144.895 42 146 42H154C155.105 42 156 42.8954 156 44V64H144V44Z" fill="#D8DCFB" />
                                <path d="M160 47C160 45.8954 160.895 45 162 45H170C171.105 45 172 45.8954 172 47V64H160V47Z" fill="#D8DCFB" />
                            </svg>
                        </section>

                        <IonRange
                            pin
                            dualKnobs
                            min={30}
                            max={200}
                            step={1}
                            value={propertyPrice}
                            onIonChange={(e: any) => setPropertyPrice(e.detail.value as number)}
                        >
                            <IonLabel slot='start'>30M</IonLabel>
                            <IonLabel slot='end'>2000M</IonLabel>
                        </IonRange>
                    </section>

                    {/* show home parameters */}
                    {showRoomsAndBathrooms()}

                    <section className="range-selection mt-2">
                        <p className="bold">Area(m2)</p>
                        <IonSegment value={area} onIonChange={(e: any) => setArea(e.detail.value)}>
                            <IonSegmentButton value='0' className='py-2'>Any</IonSegmentButton>
                            <IonSegmentButton value='100'>100</IonSegmentButton>
                            <IonSegmentButton value='200'>200</IonSegmentButton>
                            <IonSegmentButton value='300'>300</IonSegmentButton>
                            <IonSegmentButton value='400'>400+</IonSegmentButton>
                        </IonSegment>
                    </section>
                    <section className="range-selection mt-4">
                        <IonButton
                            fill='clear'
                            expand='block'
                            color='light'
                            className='dark-bg rounded'
                            // onClick={handleSearch}
                            type='submit'>Show results</IonButton>
                    </section>

                </form>
            </div>
        </IonModal>
    )
}

export default FilterModal