import React from 'react'
import ReactRoundedImage from "react-rounded-image";


import {useAuth0} from '@auth0/auth0-react'

const Logouser = () => {
    const {user} = useAuth0();
    return (
        
        <ReactRoundedImage 
        image={user.picture} 
        roundedSize="0" imageWidth="40" imageHeight="40" /> 
        
   )
}

export default Logouser
