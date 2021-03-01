import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'

const Home = () => {
    const history=useHistory()
    const handleGotoProductsPage = ()=>{
        history.push("/products")
    }
    return (
        <div>
            Home Page
            <button onClick={handleGotoProductsPage}>Go to Products Page</button>
        </div>
    )
}

export default Home
