// import { Http, HttpResponse } from "@capacitor-community/http";
import { CapacitorHttp } from '@capacitor/core';

let debugMode = false; // set as false before deploying
let domainPath: string;

if (debugMode) {
  domainPath = "http://localhost:8000/api";
} else {
  domainPath = "https://odibola.pythonanywhere.com/api";
}

console.log(domainPath, "current domain path");

// ============================= [Property Request]=====================

const postData = async ({ ...data }, relPath: string, extras?: any) => {
  const url = `${domainPath}${relPath}/`;
  const options = {
    url,
    headers: {
      "Content-Type": "application/json",
    },
    ...extras,
    data: JSON.stringify(data),
  };
  let responseData = await (await CapacitorHttp.post(options)).data;
  console.log(
    "🚀 ~ file: api_calls.ts ~ line 28 ~ postData ~ responseData",
    responseData
  );

  if (responseData.error) {
    let err = new Error(
      `A error occurred with your request | status:${responseData.status}`
    );
    return err;
  }
  return responseData;
};

const postFormData = async ({ ...data }, relPath: string, extras?: any) => {
  const url = `${domainPath}${relPath}/`;
  const options = {
    url,
    headers: {
      "Content-Type":
        "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'",
    },
    ...extras,
    data,
  };
  let responseData = await (await CapacitorHttp.post(options)).data;
  console.log(
    "🚀 ~ file: api_calls.ts ~ line 28 ~ postData ~ responseData",
    responseData
  );

  // throw error if request error occurs
  if (!responseData.ok)
    throw new Error(
      `A error occurred with your request: ${responseData.data} |status:${responseData.status}`
    );
  let response = await responseData.json();
  return response;
};

// const getData = async (relPath: string) => {
//   const url = `${domainPath}${relPath}/`;
//   const options = { url }
//   // let responseData: any = await fetch(url);
//   let responseData: any = await CapacitorHttp(options);

//   // throw error if request error occurs
//   if (!responseData.ok) {
//     let err = new Error(
//       `A error occurred with your request: ${responseData.data} |status:${responseData.status}`
//     );
//     return err;
//   }
//   let response = responseData.json();
//   return response;
// };

const fetchData = async (relPath: string, params?: number) => {
  let url: string;
  if (params) url = `${domainPath}${relPath}/${params}/`;
  url = `${domainPath}${relPath}/`;
  const options = { url };
  let responseData = await (await CapacitorHttp.get(options)).data;
  return responseData;
  // return await (await fetch(url)).json();
};

const getDataWithPathData = async (relPath: string, data: string) => {
  const url = `${domainPath}${relPath}/${data}/`;
  let responseData: any = await fetch(url);
  if (!responseData.ok)
    throw new Error(
      `A error occurred with your request: ${responseData.data} |status:${responseData.status}`
    );
  let response = await responseData.json();
  return response;
};

// ======================================================================
export const sendOtpCode = async (phoneNumber: string) => {
  let url = `/send_otp`;
  let data = { phone_number: phoneNumber };
  let reqData = await postData(data, url);
  console.log(
    "🚀 ~ file: api_calls.ts ~ line 107 ~ sendOtpCode ~ reqData",
    reqData
  );
};

export const verifyOtpCode = async (otpCode: string, phone: string) => {
  const relPath = "/verify-otp";
  const reqData = { otp_code: otpCode, phone };
  const data = await postData(reqData, relPath);
  return data;
};

export const queryAllProperty = (relPath: string) => {
  const url = `${domainPath}/${relPath}`;
  // fetch(url)
  //   .then((res) => res.json())
  //   .then((res) => res.data)
  //   .catch((err) => {
  //     if (err) console.log(err);
  //   });
  const options = {
    url
  };

  CapacitorHttp.get(options)
    .then((res) => res.data)
    .catch((err) => {
      console.log(
        "🚀 ~ file: api_calls.ts ~ line 123 ~ queryAllProperty ~ err",
        err
      );
    });
};

export const querySingleProperty = (relPath: string, id: string) => {
  const url = `${domainPath}/${relPath}/${id}`;
  const options = {url}
  // fetch(url)
  //   .then((res) => res.json())
  //   .then((res) => res.data)
  //   .catch((err) => {
  //     if (err) console.log(err);
  //   });

  CapacitorHttp.get(options)
    .then((res) => res.data)
    .catch((err) => {
      console.log(
        "🚀 ~ file: api_calls.ts ~ line 123 ~ queryAllProperty ~ err",
        err
      );
    });
};

export const filterQuery = (params: string) => {
  // code...
};

// ========================[ Create User ] ============================
interface userObject {
  phone: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  account_type: string;
  idFront: string;
  idBack: string;
}
interface organizationObject {
  website_url: string;
  password: string;
  business_type: string;
  organization_name: string;
  phone: string;
  account_type: string;
  idFront: string;
  idBack: string;
}

export const createUser = async (reqData: userObject | organizationObject) => {
  let relPath = "/signup-complete";
  return await postData(reqData, relPath);
  // return await postFormData(reqData, relPath);
};

export const getServerAuthKey = async (relPath: string, data: any) => {
  const url = `${domainPath}${relPath}/`;

  console.log("data auth data", data); // todo: remove this
  // let responseData: any = await fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });
  const options = {
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };
  let responseData = await (await CapacitorHttp.post(options)).data;
  console.log(
    "🚀 ~ file: api_calls.ts ~ line 28 ~ postData ~ responseData",
    responseData
  );


  return responseData;
};

// ============ [Home Properties]=====================
export const getNHomes = async () => {
  let relPath = `/get_n_home/${3}`;
  return fetchData(relPath);
};

export const getAllHomes = async () => {
  let relPath = `/get_all_homes`;
  return fetchData(relPath);
};

export const getHomeDetail = async (homeId: string) => {
  let relPath = `/get_home/${homeId}`;
  return fetchData(relPath);
};

export const purchasePropertyWithBackTransfer = async (data: any) => {
  let relPath = `/purchase_verification`;
  console.log(data);
  let res = await postData(data, relPath);
  console.log(res);
};

// ============ [Land Properties]=====================

export const getNLands = async () => {
  let relPath = `/get_n_lands/${3}`;
  return fetchData(relPath);
};

export const getLandDetail = async (landId: string) => {
  let relPath = `/get_land/${landId}`;
  return fetchData(relPath);
};

export const getAllLands = async () => {
  let relPath = `/list_lands`;
  return fetchData(relPath);
};

// ==================================================

export const getAllProperties = async () => {
  const relPath = "/get_all_property";
  return fetchData(relPath);
};

export const getBankDetail = async () => {
  let relPath = "/get_bank_details";
  return fetchData(relPath);
};

// ================== [ Favorites ] ================
// Add to favorite
export const setFavorite = async (data: any) => {
  let relPath = "/add_favorite";
  return postData(data, relPath);
};

export const listFavorites = async (userId: any) => {
  let relPath = `/list_favorites/${userId}`;
  console.log(await fetchData(relPath), "favorites data list");
  return await fetchData(relPath);
};

// crate enquiry for properties
export const postEnquiry = async (data: any) => {
  const relPath = "/make_enquiry";
  return postData(data, relPath);
};

// ================================== [ Auth Requests ] ===================
export const authUser = async (data: any) => {
  const relPath = "/login";
  return postData(data, relPath);
};

// ========================[ Schedule visits ] ======================
export const scheduleHomeVisit = async (data: any) => {
  const relPath = "/schedule_home";
  return postData(data, relPath);
};
export const scheduleLandVisit = async (data: any) => {
  const relPath = "/schedule_land";
  return postData(data, relPath);
};
