import React from 'react'
import axios from "axios"
import ProductCard from '../Components/ProductCard'

const Apparel = () => {
    //const category="Stationery"
    const [response,setResponse]=React.useState([])
    const [IsLoading,setIsLoading]=React.useState(true)
    const [isError,setIsError]=React.useState(false)
    const getProducts = ()=>{
        setIsLoading(true)
        setIsError(false)
        axios.get(`https://json-server-mocker-mahesh.herokuapp.com/products`)
        .then(res=>{
            const items=res.data
            //console.log(items)
            const filteredData=items.filter((item)=>item.category==="Apparel")
            setIsLoading(false)
            setResponse(filteredData)
            console.log(res.data)
        })
        .catch(err=>setIsError(err))
    }
    React.useEffect(()=>{
        getProducts();
    },[])
    //const {data}=response

    return IsLoading?(<div>...Loading</div>):isError?(<div>Error</div>) : (
        <>
            <div style={{display:"flex", flexDirection:"column",alignItems:"center"}} >{response?.sort((a,b)=>parseInt(a.price)-parseInt(b.price)).map((item)=><ProductCard {...item} key={item.id} />)}
            </div>
        </>
    )
}

export default Apparel
