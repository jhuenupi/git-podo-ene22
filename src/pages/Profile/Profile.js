import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import Logouser from '../../Components/Logouser/Logouser';
import Planes from '../Planes/Planes';
const Profile = () => {
    const {user, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
            <div>
            {/* <img src={user.picture} alt={user.name} /> */}
            <b>
                {/* Bienvenido: {user.name} */}
                <Logouser/>

            </b>
            
            {/* <p>{user.email}</p> */}
        </div>
          )   
    )
}

export default Profile
