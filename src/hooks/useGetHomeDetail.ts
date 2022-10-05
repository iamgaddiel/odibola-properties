import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { getHomeDetail } from "../utils/api_calls";
import { devDomain } from "../utils/selectors";


export const useGetHomeDetail = (id: string) => {
  let domain = useRecoilValue(devDomain);
  const { data } = useQuery(["home-detail", id], () => getHomeDetail(id));
  const res = data
  return { domain, res };
};


export default useGetHomeDetail