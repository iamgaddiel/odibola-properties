import { Route, Navigate } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// use React Query
import { QueryClient, QueryClientProvider } from 'react-query'


// Global CSS
import './assets/css/global.css';
import Registration from './pages/Registration';

// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

// pages
import Home from './pages/Home';
import VerifyPhone from './pages/VerifyPhone';
import IndividualVerification from './pages/IndividualVerification';
import OrganizationVerification from './pages/OrganizationVerification';
import ChangePhoneNumber from './pages/ChangePhoneNumber';
import ScanNationalIDFront from './pages/ScanNationalIDFront';
import ScanNationalIDBack from './pages/ScanNationalIDBack';
import AccountVerified from './pages/AccountVerified';
import ContractOfSale from './pages/ContractOfSale/ContractOfSale';
import HomePaymentOption from './pages/HomePaymentOption';
import HomePayWithBackTransfer from './pages/HomePayWithBackTransfer';
import HomeProofOfPayment from './pages/HomeProofOfPayment';
import HomeScheduleVisit from './pages/HomeScheduleVisit';
import HouseList from './pages/HouseList';
import LandAcceptedOffer from './pages/LandAcceptedOffer';
import LandDetail from './pages/LandDetail';
import LandEnquiryForm from './pages/LandEnquiryForm';
import LandList from './pages/LandList';
import LandOffer from './pages/LandOffer';
import LandPurchase from './pages/LandPurchase';
import LandSchedule from './pages/LandSchedule';
import LandVisitDecision from './pages/LandVisitDecision';
import HomeDetail from './pages/PropertyDetail';
import Search from './pages/Search';
import SearchResult from './pages/SearchResult';
import Onboarding from './pages/Onboarding';
import Favorite from './pages/Favorites';
import Updates from './pages/Updates';

// ionic icons
import { homeOutline, search, heart, notificationsOutline } from 'ionicons/icons';
import Dashboard from './pages/Dashboard/Dashboard';
import AccountHistory from './pages/AccountHistory';
import AllAccountHistory from './pages/AllAccountHistory';
import ManageDocuments from './pages/ManageDocuments';
import { useEffect, useState } from 'react';

import 'intl-tel-input/build/css/intlTelInput.css';


// recoil
import { RecoilRoot } from 'recoil';


// swiper styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import LandDetailVisit from './pages/LandScheduleVisit';
import HomeEnquiryForm from './pages/HomeEnquiryForm';
import BankDraft from './pages/BankDraft';
import Login from './pages/Login';
import useAuthData from './hooks/useAuthData';

setupIonicReact();

const Routes: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* <Redirect from='/' to='/login' /> */}
        <Navigate replace to='/login' />
        <Route path="/onboarding" element={<Onboarding />} />

        {/* verification pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/verify-phone" element={<VerifyPhone />} />
        <Route path="/individual-verification" element={<IndividualVerification />} />
        <Route path="/organization-verification" element={<OrganizationVerification />} />
        <Route path="/change-number" element={<ChangePhoneNumber />} />
        <Route path="/scan-front-national-id" element={<ScanNationalIDFront />} />
        <Route path="/scan-back-national-id" element={<ScanNationalIDBack />} />
        <Route path="/verification-success" element={<AccountVerified />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);


const Tabs: React.FC = () => {
  return (
    <IonReactRouter>
      <IonPage>
        <IonTabs>
          <IonRouterOutlet>
            <Route path='/search-result' element={<SearchResult />} />
            <Route path="/contract-of-sale" element={<ContractOfSale />} />
            <Route path="/bank-draft/:id" element={<BankDraft />} />
            <Route path="/bank-transfer/:id" element={<HomePayWithBackTransfer />} />

            {/* tabs */}
            {/* <Redirect from='/' to='/home' /> */}
            <Route path='/home' element={<Home />} />
            <Route path='/updates' element={<Updates />} />
            <Route path='/search' element={<Search />} />
            <Route path="/favorites" element={<Favorite />} />

            {/* homes */}
            <Route path="/homes" element={<HouseList />} />
            <Route path="/home-detail/:id" element={<HomeDetail />} />
            <Route path="/schedule-home/:id" element={<HomeScheduleVisit />} />
            <Route path="/home-payment-option/:id" element={<HomePaymentOption />} />
            <Route path="/home-proof-of-payment/" element={<HomeProofOfPayment />} />
            <Route path="/home-enquiry/:homeId" element={<HomeEnquiryForm />} />

            {/* lands */}
            <Route path="/lands" element={<LandList />} />
            <Route path="/land-detail/:landId" element={<LandDetail />} />
            <Route path="/land-purchase/:landId" element={<LandPurchase />} />
            <Route path="/land-schedule-visit/:landId" element={<LandDetailVisit />} />
            <Route path="/land-schedule-verification/:landId" element={<LandVisitDecision />} />
            <Route path="/schedule-land/:landId" element={<LandSchedule />} />
            <Route path="/land-enquiry/:landId" element={<LandEnquiryForm />} />
            <Route path="/land-offer/:landId" element={<LandOffer />} />
            <Route path="/land-accepted-offer/:landId" element={<LandAcceptedOffer />} />

            {/* dashboard */}
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/account-history' element={<AccountHistory />} />
            <Route path='/all-account-history' element={<AllAccountHistory />} />
            <Route path='/manage-documents' element={<ManageDocuments />} />
          </IonRouterOutlet>

          <IonTabBar
            slot='bottom'
            translucent
            className='ion-padding-vertical blue-text'>

            <IonTabButton tab='home' href='/home'>
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab='search' href='/search'>
              <IonIcon icon={search} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>

            <IonTabButton tab='favorites' href='/favorites'>
              <IonIcon icon={heart} />
              <IonLabel>Favorites</IonLabel>
            </IonTabButton>

            <IonTabButton tab='update' href='/updates'>
              <IonIcon icon={notificationsOutline} />
              <IonLabel>Updates</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonPage>
    </IonReactRouter>
  )
}


const AppRouter: React.FC = () => {

  const user = useAuthData()
  const [userNotAuthenticated, setUserNotAuthenticated] = useState(true)

  // react-query
  const queryClient = new QueryClient()


  // check is user detail is authenticated
  useEffect(() => {
    (() => {
      if (user !== undefined) {
        setUserNotAuthenticated(false)
      }
    })();
  }, [user])

  if (user === undefined) {
    return <Routes />
  }

  return (
    <QueryClientProvider client={queryClient}>
      <IonApp>
        {userNotAuthenticated ? <Routes /> : <Tabs />}
      </IonApp>
    </QueryClientProvider >
  )
}

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  )
}


export default App;
