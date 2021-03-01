import React from 'react'
import { useHistory } from 'react-router-dom'

export const AuthContext=React.createContext()
const AuthContextComponent = ({children}) => {
    const history=useHistory()
const [isAuth,setIsAuth]=React.useState(false)
const [token,setToken]=React.useState("")
const handleLogin=(token)=>{
    setIsAuth(true)
    setToken(token)
    history.push("/products")
}
const handleLogout=()=>{
    setIsAuth(false)
    setToken("")
}
const value={
    isAuth,
    token,
    handleLogin,
    handleLogout
}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextComponent
