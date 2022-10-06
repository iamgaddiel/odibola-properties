import { IonRouterLink } from '@ionic/react'
import React from 'react'
import RegLogo from '../assets/images/Groupapp-logo-blue.png'


const AuthHeader: React.FC = () => {
    return (
        <header className='mt-5'>
            <div className="reg-logo">
                <img src={RegLogo} alt="odibola-white-logo" />
            </div>
            <div className="header-text ion-text-center">
                <h3 className='blue-text bold mt-3'>Welcome to Odibola</h3>
                <small className="gray-text">
                    <IonRouterLink routerLink='/registration' routerDirection='back'> Register</IonRouterLink> or 
                    <IonRouterLink routerDirection='forward' routerLink='/login'> SignIn </IonRouterLink>
                    and we’ll get you started
                </small>
            </div>
        </header>
    )
}

export default AuthHeader