import React from 'react';
import {Route, Routes, Outlet} from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import ProductPage from "../pages/ProductPage";
import ProductList from "../pages/ProductList";
import About from "../pages/About";
import AddCards from "../pages/AddCards";
import Header from "./Header";
import Footer from "./Footer";

function AppRouter () {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Home/>}/>
            <Route path={'/auth'} element={<Auth/>}/>
            <Route path={'/:id'} element={<ProductPage/>}/>
            <Route path={'/catalog'} element={<ProductList/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/cards'} element={<AddCards/>}/>
            </Route>
        </Routes>
    );
}

function Layout (){
    return(
<div className= 'AppRouter'>
<Header/>
<main className={'content'}>
<Outlet/>
</main>
<Footer/>
        </div>
    );
}

export default AppRouter;
