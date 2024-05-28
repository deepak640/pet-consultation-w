import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";

const HeroSection = (props) =>{
    return (
    <Wrapper>
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
                <p> {props.para} </p>
                <h1 className="hero-heading">{props.name}</h1>
                <p className="hero-para">{props.heropara}</p>
                <Button className="hero-button">
                    <NavLink to="/Consult">Consult Now</NavLink>
                </Button>
            </div>
            <div className="section-hero-image">
                <picture>
                    <img src={props.image} alt="hero image"/>
                </picture>
            </div>
        </div>

    </Wrapper>
  );
};

const Wrapper = styled.section`
   padding: 9rem 0;

   .section-hero-data{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 80px;
   }

   .hero-button{
     max-width: 15rem;
   }

   .hero-heading{
     text-transform: uppercase;
     font-size: 5.0rem;
   }

   .hero-para{
     margin-top: 1.5rem;
     margin-bottom: 3.4rem;
     max-width: 60rem;
   }

   picture{
    text-align: center;
    //padding-left: 60px;
   }

   .section-hero-image{
      //display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 80px;
   }


   img {
    max-width: 70%;
    //padding-right: 50px;
   }

`;

export default HeroSection;