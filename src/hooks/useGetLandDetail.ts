import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { getLandDetail } from "../utils/api_calls";
import { devDomain } from "../utils/selectors";


export const useGetLandDetail = (id: string) => {
  let domain = useRecoilValue(devDomain);
  const { data } = useQuery(["land-detail", id], () => getLandDetail(id));
  const res = data
  return { domain, res };
};


export default useGetLandDetail