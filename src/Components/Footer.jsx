import React from "react";
import { Button } from "../styles/Button";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Footer = () =>{
    return (
        <Wrapper>
            <section className="contact-bar">
                <div className=" grid grid-two-column">
                    <div className="contactbar-heading">
                        <h3>Ready to get Started</h3>
                        <h3>Talk to us today</h3>
                    </div>

                    <div>
                        <NavLink to="/">
                            <Button className="footer-button">Consult Now</Button>
                        </NavLink>
                    </div>

                </div>

            </section>

            <footer>
                <div className="container grid grid-three-column">
                    <div className="firstfooter">
                        <h3>Vetly</h3>
                        <p>Consult from anywhere.</p>
                    </div>

                    <div className="secondfooter">
                        <h3>Quick Links</h3>
                        <p><NavLink className="footer-link" to="/Consult">Ask Vet Online</NavLink></p>
                        <p><NavLink className="footer-login" to="/Login">Login</NavLink></p>

                    </div>

                    <div className="thirdfooter">
                        <h3> Call us: 123456789</h3>
                        <h3> Email us:abc@gmail.com</h3>

                    </div>



                </div>
            </footer>
        </Wrapper>
    )
};

const Wrapper = styled.section`
   .contact-bar{
    max-width: 60vw; //during mobile had to convert it 90vw
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({theme}) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(50%);

   }

   .grid div:last-child{

    justify-self: end;
    align-self: center;

   } //last grid column

   .footer-button{
    padding: 10px 10px;
    max-width: 500px;
   }

   footer{
    padding: 14rem 0 9rem 0;
    background-color:${({theme}) => theme.colors.helper};

    h3{
        color:${({theme}) => theme.colors.white};;
        //margin-bottom: 2.4rem;
    }

    p{
        color:${({theme}) => theme.colors.white};
    }
   }

   .footer-link{
    color:${({theme}) => theme.colors.white};
   }

   .footer-login{
    color:${({theme}) => theme.colors.white};
   }

   .grid-three-column{
    display: flex;
    justify-content: space-evenly; /* Horizontally center the content */
    align-items: center; 
   }

   
   
`;

export default Footer;