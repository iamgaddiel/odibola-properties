import { IonContent, IonItem, IonList, IonPage } from '@ionic/react'
import React from 'react';
import { useState } from 'react'
import LandPreview from '../components/LandPreview';
import SearchHeader from '../components/SearchHeader'
import SearchResultCard from '../components/SearchResultCard';




const SearchResult = () => {
    let [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <IonPage>
            <SearchHeader isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <IonContent className='ion-padding' fullscreen>
                <IonList>
                    <IonItem className='my-3'>
                        {
                            React.Children.map(Array(10), (elm, key) => {
                                <LandPreview
                                    title='Condominium and Lake'
                                    location='19, St. Adeola Odeku,
                                    Lekki, Lagos.'
                                    price='N30,000,000 per SQM'
                                    key={key}
                                    imageUrl='https://picsum.photos/200'
                                />
                            })
                        }
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default SearchResult