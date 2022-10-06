import { IonButton, IonContent, IonIcon, IonLabel, IonPage, IonSearchbar, IonSegment, IonSegmentButton } from '@ionic/react'
import { filterOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import FilterModal from '../components/FilterModal';
import PropertyCard from '../components/PropertyCard';
import SearchHeader from '../components/SearchHeader';
import useGetAllProperties from '../hooks/useGetAllProperty';


const Search = () => {

  // * useStates
  const [segmentValue, setSegmentValue] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { properties, category } = useGetAllProperties(segmentValue)

  const renderPropertyCard = () => {
    interface Property {
      key: number | any,
      description: string
      propertyTitle: string
      size: number
      image_one: string
      image_two: string
      image_three: string
      image_four: string
      title?: string
      showers?: number
      bedrooms?: number
      property_type: string
    }

    if (category === 'all') {
      return properties?.data.map((property: Property, key: number) => (
        <PropertyCard
          description={property.description}
          propertyTitle={`${property.title}`}
          size={property.size}
          propertyType={property.property_type}
          images={[
            property.image_one,
            property.image_two,
            property.image_three,
            property.image_four
          ]}
          noOfBedrooms={property.bedrooms}
          noOfShowers={property.showers}
          key={key}
        />
      ))
    }


    else if (category === 'lands') {
      return properties?.map((property: Property, key: number) => (
        <PropertyCard
          description={property.description}
          propertyTitle={`${property.title}`}
          size={property.size}
          propertyType='lands'
          images={[
            property.image_one,
            property.image_two,
            property.image_three,
            property.image_four
          ]}
          key={key}
        />
      ))
    }


    else if (category === 'homes') {
      return properties?.map((property: Property, key: number) => (
        <PropertyCard
          description={property.description}
          propertyTitle={`${property.title}`}
          size={property.size}
          propertyType='homes'
          images={[
            property.image_one,
            property.image_two,
            property.image_three,
            property.image_four
          ]}
          noOfBedrooms={property.bedrooms}
          noOfShowers={property.showers}
          key={key}
        />
      ))
    }

  }
  // renderPropertyCard()


  return (
    <IonPage>

      <IonContent className='ion-padding'>

      {/* search header */}
      <SearchHeader isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

        {/* ============== sheet modal ================== */}
        <FilterModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />


        {/* ================ Text ================ */}
        <section className='ion-padding'>
          <h1 className='txt-24'>Let’s help find the best property for you!</h1>
        </section>

        {/*==================================  category segment ========================= */}
        <section className='ion-padding'>
          <h3 className='txt-16'>Category</h3>
          <IonSegment onIonChange={(e: any) => setSegmentValue(e.detail.value)} value={segmentValue}>
            <IonSegmentButton value='all' className='py-2'>
              <IonLabel>All</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='homes'>
              <IonLabel>Homes</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='lands'>
              <IonLabel class='text-muted'>Lands</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </section>

        {/* ========================== images ===============================*/}
        <section>
          {
            renderPropertyCard()
          }
        </section>
      </IonContent>
    </IonPage >
  )
}

export default Search