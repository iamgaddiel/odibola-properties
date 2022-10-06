import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import EmptyFavorite from '../components/EmptyFavorite'
import FavoritesList from '../components/FavoritesList'
import useAuthData from '../hooks/useAuthData'
import { listFavorites } from '../utils/api_calls'
import { getUserData } from '../utils/plugins'

const Favorites = () => {

  const user = useAuthData();
  const favorites = useQuery(['favorites', user?.id], () => listFavorites(user?.id))

  // useEffect(() => {

  // }, [favorites.data?.data])
  

  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar className='ion-padding'>
          <IonTitle className='ion-text-center bold txt-20'>My Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        {
          favorites.data?.data.length > 0
          ? <FavoritesList />
          : <EmptyFavorite />
        }
      </IonContent>
    </IonPage>
  )
}

export default Favorites