import React, {useEffect, useState} from 'react';
import {NavbarMainStyles} from "./navbar-main.styles"
import SearchBar from "../search-bar/search";
import {Link, NavLink} from "react-router-dom";
import "./navbar-main.css"
import {Button} from "../../../index";
import {CartLength} from "../navbar-bottom/NavbarBottomStyle";
import {useSelector} from "react-redux";
import MobileSidebar from "../mobile-sidebar/mobile-sidebar";
import NavbarBottom from "../navbar-bottom/navbar-bottom";

function NavbarMain() {

    const productLength = useSelector(state => state.ProductReducer)

    const state = JSON.parse(localStorage.getItem("product"))

    const [sModal, setSModal] = useState(false)

    return (
        <>
            <MobileSidebar setSModal={setSModal} sModal={sModal}/>
            <NavbarMainStyles.Navbar>
                <div className="container">
                    <NavbarMainStyles.NavbarItems>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <NavbarMainStyles.Burger onClick={() => setSModal(true)}>
                                <i className="fa-regular fa-bars"></i>
                            </NavbarMainStyles.Burger>
                            <Link to="/"><NavbarMainStyles.Logo>e-commerce</NavbarMainStyles.Logo></Link>
                        </div>
                        <NavbarMainStyles.SearchBar>
                            <SearchBar/>
                        </NavbarMainStyles.SearchBar>
                        <NavbarMainStyles.NavbarRight user={localStorage.getItem("access")}>
                            {localStorage.getItem("access") ? (
                                <NavLink to="/profile"><Button>Profile</Button></NavLink>
                            ) : (
                                <>
                                    <NavLink to="/login" className="auth-icon"><Button><span>Log in</span></Button></NavLink>
                                    <NavLink to="/signup" className="auth-icon"><Button><span>Sign up</span></Button></NavLink>
                                </>
                            )}
                            <NavLink to="/login" className="icon-nav"><Button><i
                                className="fa-regular fa-user"></i></Button></NavLink>
                            <NavLink to="/cart" className="icon-nav">
                                {productLength?.length === 0 || state?.length === 0 ? null : (
                                    <CartLength className="cart-length">{productLength?.length || state?.length}</CartLength>
                                )}
                                <Button><i className="fa-light fa-cart-shopping"></i></Button></NavLink>
                        </NavbarMainStyles.NavbarRight>
                    </NavbarMainStyles.NavbarItems>
                </div>
                <NavbarBottom />
            </NavbarMainStyles.Navbar>
        </>
    );
}

export default NavbarMain;