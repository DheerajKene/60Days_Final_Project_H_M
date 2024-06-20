import React from 'react'
import { createContext , useState} from 'react'

export let AuthContext = createContext();


export const AuthContextProvider = ({children}) => {

    const DataArr = [];
    const[isAuth, setIsAuth] = useState({
        isLoggedIn: false,
        Token: null,
    })

    function login(token){
        setIsAuth({
            isLoggedIn: true,
            Token: token,
        })
    }

    function register(obj){
        
        console.log(DataArr)
    }

  return (
    <AuthContext.Provider value={{register, DataArr}}>{children}</AuthContext.Provider>
  )
}
