import { IonHeader, IonToolbar, IonSearchbar, IonButton, IonIcon, IonText } from '@ionic/react'
import { filterOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { register } from '../serviceWorkerRegistration';



interface searchHeaderInterface {
  isModalOpen: boolean,
  setIsModalOpen: any
}
const SearchHeader = ({isModalOpen, setIsModalOpen}: searchHeaderInterface) => {

  interface search {
    searchText: string
  }

  let [searchValue, setSearchValue] = useState<string>('');
  const setSearchInput = (data: any) => setSearchValue(data)
  const { register, handleSubmit } = useForm<search>(); // * react-form-hooks


  const handleSearch: SubmitHandler<search> = (data: any) => {
    data.preventDefault();
    console.log(data)
  }

  return (
    <section className="search ion-padding">
      <h3 className="bold txt-16">Search</h3>
      <section className="d-flex justify-content-between align-items-center">
        {/* <form className='w-100'>
          <IonSearchbar
            type='search'
            showClearButton='focus'
            placeholder='Search for your property'
            inputMode='search'
            value={searchValue}
            enterkeyhint='enter'
            onIonChange={(e: any) => console.log(e.detail.value)}
            className='p-0'
            // onIonChange={(searchText: any) => setSearchInput(searchText.detail.value)}
            onSubmit={handleSubmit(handleSearch)}
          />
        </form> */}

        {/* filter button */}
        <IonButton fill='outline' color='dark' onClick={() => setIsModalOpen(!isModalOpen)}>
          <IonText className='ion-margin-end'>Search property</IonText>
          <IonIcon icon={filterOutline} slot='end'/>
        </IonButton>
      </section>
    </section>
  )
}

export default SearchHeader