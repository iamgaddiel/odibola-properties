import { IonButton } from '@ionic/react'
import React from 'react'



interface ButtonInterface{
    fill: string,
    text: string
}
const Button: React.FC<ButtonInterface> = ({text}) => {
    return (
        <IonButton
            type="submit"
            expand='block'
            className='blue-bg text-light mt-5 ion-margin-top'>
            {text}
        </IonButton>
    )
}

export default Button