import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const Navbar = () =>{
    return <Nav>
        <div className="menuIcon">
            <ul className="navbar-list">
                <li>
                    <NavLink className ="navbar-link " to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className = "navbar-link" to="/Consult">Consult a vet</NavLink>
                </li>
                {/* <li>
                    <NavLink className= "navbar-link" to="/Ngo">NGO</NavLink>
                </li> */}
                <li>
                    <NavLink className="navbar-link " to="/About">About</NavLink>
                </li>
                <li>
                <Button className="login-button">
                    <NavLink className="navbar-link" to="/Login">Login</NavLink>
                </Button>  
                </li>
            </ul>
        </div>
    </Nav>
};

const Nav =styled.nav`
  .navbar-list{
    display: flex;
    gap: 4.8rem;
   // margin-top: 20px;
    align-items: center;
  }

  .login-button{
    max-width: 30rem;
    padding: 6px 20px; 
    border-radius: 5px;
    font-size: 1.4rem;
    font-weight: 500;
    //margin-bottom: 20px;
  }

  li{
    list-style: none;


    .navbar-link{
        &:link,
        &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.4rem;
            font-weight: 500;
            text-transform: uppercase;
            color: ${({theme}) => theme.colors.black};
            transition: color 0.3s linear;

        }

        &:hover,
        &:active {
            color: ${({theme}) => theme.colors.helper};
        }
    }
  }


  }
`;

export default Navbar;
