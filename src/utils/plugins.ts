import { Preferences } from "@capacitor/preferences";

// ========================= [ Get/Set User State ] ==========================
interface userData {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  account_type: string;
  phone: string;
  is_verified: string;
  token: string
}

interface organizationData {
  username: string;
  website_url: string;
  password: string;
  businessType: string;
  organizationName: string;
  phone: string;
  account_type: string;
  token: string
}

export const saveUserData = async (data: userData | organizationData) => {
  await Preferences.set({
    key: "userData",
    value: JSON.stringify({
      ...data,
    }),
  });
};

export const getUserData = async () => {
  const { value } = await Preferences.get({ key: "userData" });
  if (value !== null) return JSON.parse(value);
  return {}
};

export const deleteUserData = async () => {
  return await Preferences.remove({key: 'userData'})
};

// ========================= [ Get/Set Verification State] ==========================
export const setVerified = async (value: string) => {
  await Preferences.set({
    key: "isVerified",
    value,
  });
};

export const getVerified = async () => {
  const { value } = await Preferences.get({ key: "isVerified" });
  return value;
};

// ========================= [ Get/Set AuthKey] ==========================
export const setAuth = async (auth: string) => {
  await Preferences.set({
    key: "auth",
    value: auth,
  });
};

export const getAuthKey = async () => {
  const { value } = await Preferences.get({ key: "auth" });
  return value;
};
