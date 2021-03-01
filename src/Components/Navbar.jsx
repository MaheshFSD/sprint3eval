import React from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'

const Navbar = () => {
    const {cartTotal} = React.useContext(CartContext)
    const links=[
        {
            to:"/",
            title:"Home"
        },
        {
            to:"/products",
            title:"All-Products"
        },  
        {
            to:"/electronics",
            title:"Electronics"
        },  
        {
            to:"/apparel",
            title:"Apparel"
        },
        {
            to:"/sports",
            title:"Sports"
        },  
        
        {
            to:"/kids",
            title:"Kids"
        },
        {
            to:"/stationery",
            title:"Stationery"
        },
        // {
        //     to:"/cart",
        //     title:"Cart"
        // },         
        {
            to:"/about",
            title:"About"
        },
        
    ]
    return (
        <div style={{display:"flex" , alignItems:"center", width:"50vw" , marginLeft:"25vw"}}>
            {
                links.map(({to,title})=><Link style={{margin:"10px"}} to={to} key={to}>{title}</Link>)
            }
            <p>Cart: {cartTotal}</p>
        </div>
    )
}

export default Navbar
