import React from 'react'
import {Link} from "react-router-dom"
import { CartContext } from '../Context/CartContext'


const ProductCard = ({name,id,price,img}) => {
    const {cartTotal,handleCartTotal}=React.useContext(CartContext)
    return (
        <div style={{
            display:"flex",
            width:"300px",
            padding:10,
            margin:10,
            outline:"1px solid black",
            alignContent:"center"
        }}>
            <div>
                <img src={img} style={{alignSelf:"center"}} alt={`profile_${id}`} />
            </div>
            <div style={{paddingLeft:10}}>
                <h3> {name}</h3>
                <h6>Price: {price}</h6>
                <button onClick={()=>handleCartTotal(cartTotal+1)}>Add To Cart</button>
                <br />
                <Link to ={`/products/${id}`}>See More Details</Link>
            </div>
        </div>
    )
}

export default ProductCard
