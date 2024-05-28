import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () =>{
    return(
        <>
        <Mainheader>
            <NavLink to="/">
                <img src="./images/Logo.png" alt="logo" className = "logo" />
            </NavLink>
            <Navbar />
        </Mainheader>
        </>
        

    );
};

const Mainheader = styled.header`
 padding: 0 4.8rem;
 height: 7rem;
 background-color: ${({theme}) => theme.colors.bg};
 display: flex;
 justify-content: space-between;
 align-items: center;

 .logo {
    height: 7rem;
    //max-width: 30%;

 }

`;
export default Header;