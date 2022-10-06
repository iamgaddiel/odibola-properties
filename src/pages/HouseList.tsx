import { useQuery } from 'react-query'
import HomeList from '../components/HomeList'
import HouseListSkeleton from '../components/skeletons/HouseListSkeleton'
import { getAllHomes } from '../utils/api_calls'


const HouseList: React.FC = () => {
    const homes = useQuery('homes', getAllHomes)
    const data = homes.data


    return (
        <>
            {
                homes.isFetching ? <HouseListSkeleton /> : <HomeList data={data} />
            }
        </>
    )
}

export default HouseList