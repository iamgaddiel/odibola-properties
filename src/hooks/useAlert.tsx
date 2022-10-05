import { IonAlert } from "@ionic/react";


interface props {
    message: string
    showAlert: boolean
}

const useAlert: React.FC<props> =({ message, showAlert}) => {
    return <IonAlert message={message} isOpen={showAlert} />
}

export default useAlert;