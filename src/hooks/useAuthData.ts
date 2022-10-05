import { useEffect, useState } from "react";
import { getUserData } from "../utils/plugins";

// this custom Hook gets the current authenticated User's details
const useAuthData = () => {
  interface userInfoConstruct {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    account_type: string;
    phone: string;
    is_verified: string;
    website_url: string;
    business_type: string;
    organizationName: string;
    token: string;
  }
  const [user, setUser] = useState<userInfoConstruct | any>();

  useEffect(() => {
    (async () => {
      try {
        const res = await getUserData();
        setUser(res?.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return user;
};

export default useAuthData;
