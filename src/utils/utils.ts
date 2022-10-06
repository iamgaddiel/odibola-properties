import { setFavorite } from "./api_calls";

export const addToFavorite = async (
  property_id: string,
  property_type: string,
  userId: string
) => {
  let favoriteData = {};
  if (property_type === "home") {
    favoriteData = {
      property_type: "home",
      property_id,
      user: userId,
    };
  } else if (property_type === "land") {
    favoriteData = {
      property_type: "home",
      property_id,
      user: userId,
    };
  }

  let res = await setFavorite(favoriteData);
  return res;
};

// check for an empty object
export const objectIsEmpty = (obj: any) =>{
  if (obj === null || obj === undefined) return
  return Object.keys(obj).length === 0;
}
