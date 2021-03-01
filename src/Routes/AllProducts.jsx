import React from 'react'
import axios from "axios"
import styles from "../Components/Styles/Styles.css"
import {useLocation,useHistory} from "react-router-dom"
import ProductCard from '../Components/ProductCard'
const AllProducts = () => {
    const location=useLocation()
    const history=useHistory(location)
    const [response,setResponse]=React.useState([])
    const [IsLoading,setIsLoading]=React.useState(true)
    const [isError,setIsError]=React.useState(false)
    const getProducts = ()=>{
        setIsLoading(true)
        setIsError(false)
        axios.get(`https://json-server-mocker-mahesh.herokuapp.com/products`)
        .then(res=>{
            console.log(res.data)
            setIsLoading(false)
            setResponse(res.data)
            console.log(response)
        })
        .catch(err=>setIsError(err))
    }
    React.useEffect(()=>{
        getProducts();
    },[])

    return IsLoading?(<div>...Loading</div>):isError?(<div>Error</div>) : (
        <>
            <div style={{display:"flex", flexDirection:"column",alignItems:"center"}} >{response?.sort((a,b)=>parseInt(a.price)-parseInt(b.price)).map((item)=><ProductCard {...item} key={item.id} />)}
            </div>
        </>
    )
}

export default AllProducts
