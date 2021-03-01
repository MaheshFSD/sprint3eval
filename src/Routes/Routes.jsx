import React from 'react'
import {Route, Switch} from "react-router-dom"
import AllProducts from './AllProducts'
import Apparel from './Apparel'
import Electronics from './Electronics'
import Home from './Home'
import Kids from './Kids'
import { PrivateRoute } from './PrivateRoute'
import ProductDetails from './ProductDetails'
import Sports from './Sports'
import Stationery from './Stationery'

const Routes = () => {
    return (
        <>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <PrivateRoute exact path="/products">
                <AllProducts />
            </PrivateRoute>
            <PrivateRoute path="/products/:id">
                <ProductDetails />
            </PrivateRoute>
            <PrivateRoute exact path="/electronics">
                <Electronics />
            </PrivateRoute>
            <PrivateRoute path="/electronics/:id">
                <ProductDetails />
            </PrivateRoute>
            <PrivateRoute exact path="/sports">
                <Sports />
            </PrivateRoute>
            <PrivateRoute path="/sports/:id">
                <ProductDetails />
            </PrivateRoute>
            <PrivateRoute exact path="/apparel">
                <Apparel />
            </PrivateRoute>
            <PrivateRoute path="/apparel/:id">
                <ProductDetails />
            </PrivateRoute>
            <PrivateRoute exact path="/kids">
                <Kids />
            </PrivateRoute>
            <PrivateRoute path="/kids/:id">
                <ProductDetails />
            </PrivateRoute>
            <PrivateRoute exact path="/stationery">
                <Stationery />
            </PrivateRoute>
            <PrivateRoute path="/stationery/:id">
                <ProductDetails />
            </PrivateRoute>
            {/* <PrivateRoute exact path="/cart">
                <Stationery />
            </PrivateRoute> */}
            <Route >
            <h3> 404 Not Found</h3>
            </Route>
        </Switch>
        </>
    )
}

export default Routes
