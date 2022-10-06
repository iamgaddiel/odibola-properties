import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonText } from '@ionic/react'
import FavoriteCard from './FavoriteCard'
import { trashOutline } from 'ionicons/icons'
import { useState, useEffect } from 'react'
import { getUserData } from '../utils/plugins'
import { useQuery } from 'react-query'
import { listFavorites, setFavorite } from '../utils/api_calls'
import { useRecoilValue } from 'recoil'
import { devDomain } from '../utils/selectors'
import { useHistory } from 'react-router'
import useAuthData from '../hooks/useAuthData'

const FavoritesList = () => {
  let domain = useRecoilValue(devDomain)
  const history = useHistory()
  const user = useAuthData()

  const favorites = useQuery(['favorites', user?.id], () => listFavorites(user?.id))

  // useEffect(() => {

  // }, [favorites.data?.data])

  const deleteFavorite = (property_type: string, property_id: string, user: string) => {
    setFavorite({
      property_type,
      user,
      property_id
    })
    history.push(history.location.pathname)
  }

  return (
    <IonList lines='none'>
      {
        favorites.data?.data.map((liked: any) =>
        (
          <IonItemSliding key={liked.id} className='ion-no-border'>
            <IonItemOptions side='end'>
              <IonItemOption color='danger' expandable onClick={() => deleteFavorite(liked.property_type, liked.id, user?.id)}>
                <IonIcon icon={trashOutline} color='light' slot='top' size='large' />
                <IonText>Remove</IonText>
              </IonItemOption>
            </IonItemOptions>

            <IonItem lines='none'>
              <FavoriteCard
                imageUrl={`${domain}${liked.image_one}`}
                title={liked.total_cost}
                location={liked.location}
                price={liked.total_cost}
              />
            </IonItem>
          </IonItemSliding>
        )
        )
      }
    </IonList>
  )
}

export default FavoritesList