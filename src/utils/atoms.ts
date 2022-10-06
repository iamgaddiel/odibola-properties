import { atom } from "recoil";


// holds hte verification state for current user of the app
export const isVerifiedState = atom({
  key: "isVerified",
  default: false,
});

export const userAccountType = atom({
  key: 'userAccountType',
  default: ''
})

// holds the detail for currently signed up user of the app
export const user = atom({
  key: "user",
  default: {},
});

// holds the detail for individual registration detail
export const individualRegDetailSate = atom({
  key: 'individualRegDetails',
  default: {
    phone: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    account_type: "",
    idFront: "",
    idBack: "",
  }
})

// holds the detail for the organization registration detail
export const organizationRegDetailState = atom({
  key: 'organizationRegDetails',
  default: {
    website_url: "",
    password: "",
    business_type: "",
    organization_name: "",
    phone: "",
    account_type: "",
    idFront: "",
    idBack: "",
  }
})

// holds the development state of the app
export const devMode = atom({
  key: 'devMode',
  // default: 'development' // todo: change this 'production' before bundling
  default: 'production' // todo: change this 'production' before bundling
})

// holds the currently viewed property details
export const propertyState = atom({
  key: 'property-state',
  default: {
    id: '',
    propertyType: '',
    deposit: 0,
    totalCost: 0
  }
})

// holds the detail for a home being purchased
export const homePurchaseState = atom({
  key: 'home-purchase-state',
  default: {
    user: '',
    home: '',
    account_holder: '',
    proof_of_payment: '',
    property_type: '',
    upload_document_type: ''
  }
})

// holds the detail for a land being purchased
export const landPurchaseState = atom({
  key: 'land-purchase-state',
  default: {
    user: '',
    land: '',
    account_holder: '',
    proof_of_payment: '',
    property_type: '',
    size: '',
    quantity: 0,
    agreed_to_terms: false,
    deposit: 0,
    amount: 0,
    total_cost: 0,
    cost: 0,
    upload_document_type: ''
  }
})

// ====================[ search and filter ] =================
export const homeFilterSearchState = atom({
  key: 'filter-search',
  default: {
    propertyType: 'home',
    price_range: '',
    rooms: 0,
    size: 0
  }
})

export const landFilterSearchState = atom({
  key: 'filter-search',
  default: {
    propertyType: 'home',
    price_range: '',
    rooms: 0,
    size: 0
  }
})

