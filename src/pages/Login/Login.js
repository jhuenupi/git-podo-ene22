import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="vertical-center">
            <span className="align-middle">                
                <button
                className="btn btn-primary btn-block"
                onClick={() => loginWithRedirect()}
                >Ingresa
                </button>
                      
            </span>            

        </div>
    )
}

export default Login


