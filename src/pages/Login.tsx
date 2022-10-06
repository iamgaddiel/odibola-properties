import React, { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm'
import useAuthData from '../hooks/useAuthData';


const Login: React.FC = () => {
    const user = useAuthData();
    // const [userNotAuthenticated, setUserNotAuthenticated] = useState(false)

    // useEffect(() => {
    //     console.log(user)
    //     if (user === undefined) setUserNotAuthenticated(true)
    // }, [user])

    // return (
    //     <>
    //         {userNotAuthenticated && <LoginForm />}
    //     </>
    // )
    return (
        <LoginForm />
    )
}

export default Login