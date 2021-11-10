import React, {useState, useEffect} from 'react'
import ReactRoundedImage from "react-rounded-image";


import {useAuth0} from '@auth0/auth0-react'

const Logouser = () => {
    const url ='http://localhost:1337/planes/'

    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        
    }

    useEffect(() => {
                        fetchApi()
                    },[]
            )   
    const {user} = useAuth0();
    return (
        <>
        {!todos ? 'Cargando...' :
        todos.map( (todo,index)=>{
            <p>wwjavier{todo.titulo}</p>
        })
        }
        {/* <ReactRoundedImage 
        image={user.picture} 
        roundedSize="0" imageWidth="40" imageHeight="40" />  */}
        </>
   )
}

export default Logouser
