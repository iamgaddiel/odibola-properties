import { useQuery } from "react-query";
import { getAllHomes, getAllLands, getAllProperties } from "../utils/api_calls";

export const useGetAllProperties = (category: string) => {
  const allProperty = useQuery("all_props", getAllProperties);
  const landProperties = useQuery("land", getAllLands);
  const homeProperties = useQuery("home", getAllHomes);

  switch (category) {
    case "all":
      return { properties: allProperty.data, category };

    case "homes":
        return { properties: homeProperties.data, category };
        
    case "lands":
      return { properties: landProperties.data, category };

    default:
      return { properties: allProperty.data, category };
  }
};

export default useGetAllProperties;
