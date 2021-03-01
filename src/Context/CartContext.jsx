import React from "react"
export const CartContext = React.createContext()

CartContext.displayName = "CART-INFO"
export const CartContextProvider = ({children})=>{
    const [cartTotal,setCartTotal]=React.useState(0)
    
    const handleCartTotal= (num)=>{
        setCartTotal(num)
    }

    const value={
       cartTotal,
       handleCartTotal,
    }
    return <CartContext.Provider value={value} > {children} </CartContext.Provider>
}