import axios from 'axios'
import React from 'react'
import {Link, useParams} from "react-router-dom"
import ProductCard from '../Components/ProductCard'
const ProductDetails = () => {
    const [IsLoading,setIsLoading]=React.useState(true)
    const [isError,setIsError]=React.useState(false)
    const [product,setProduct]=React.useState({})
    const {id}=useParams();
    console.log("  Hello Producr Details  ")
    const getProducts=(id)=>{
        if(!id){
            setIsError(true)
            return
        }
        axios.get(`https://json-server-mocker-mahesh.herokuapp.com/products/${id}`)
        .then(res=>{
            setProduct(res.data)
            setIsLoading(false)
        })
         .catch(err=>{
            setIsError(true)
            setIsLoading(false)
        })
    }
    React.useEffect(()=>{
        getProducts(id)
    },[])
    return IsLoading?(<div>...Loading</div>):isError?(<div>Error</div>) :  (
        <div>
            {" "}
            <ProductCard {...product} showLink={false} />
            <br></br>
            <Link to="/products" >Go Back</Link>
        </div>
    )
}

export default ProductDetails
