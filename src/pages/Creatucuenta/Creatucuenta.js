import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

function Creatucuenta() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div>
            
            <button
                className="btn btn-flat"
                onClick={() => loginWithRedirect()}
                >Crea tu Cuenta
                </button>
        </div>
    )
}

export default Creatucuenta
