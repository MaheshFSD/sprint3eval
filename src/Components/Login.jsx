import React from 'react'
import axios from "axios"
import { AuthContext } from '../Context/AuthContext'
const init={
    email:"",
    password:""
}
const Login = () => {
    const {handleLogin}=React.useContext(AuthContext)
    const [formData,setFormData]=React.useState(init)
    const {email,password}=formData
    const [isLoading,setIsLoading]=React.useState(false)
    const [isError,setIsError]=React.useState(false)
    const handleFormChange = (e)=>{
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
    }
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        const payload={
            ...formData
        }
        setIsLoading(true)
        axios.post("https://reqres.in/api/login",payload)
        .then(res=>{
            setIsLoading(false)
            setIsError(false)           
            handleLogin(res.data.token)
            console.log(res.data.token)
        })
        .catch(err=>{
            console.log(err)
            setIsError(true)            
        })    
    }
    return isLoading? "...Loading": (
        <form onSubmit={handleFormSubmit} >
            {isError && <div>Something Went Wrong</div>} 
            <h3>Please Use reqres.in.api  Login Credentials</h3>
            <input type="text" name="email" value={email}  onChange={handleFormChange} placeholder="Email" /><br></br>
            <input type="password" name="password" value={password} onChange={handleFormChange} placeholder="Password" /><br></br>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Login
