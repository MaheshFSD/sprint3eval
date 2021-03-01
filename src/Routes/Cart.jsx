import React from 'react'
import { CartContext } from '../Context/CartContext'

const Cart = () => {
    const {cartTotal}=React.useContext(CartContext)
    return (
        <h3>{cartTotal}</h3>
    )
}

export default Cart
