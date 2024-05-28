import React from "react";
import HeroSection from "./Components/HeroSection";
import Chatbox from './Chatbox';

const Home = () => {
    const data = {
        name: "Online Vet Consultation anytime, anywhere.",
        image: "./images/about2.svg",
        para: "Need advice on your pet's health",
        heropara: "Get Best Veterinary Advice online from the comfort of your home",
    };

    return (
        <div>
            <HeroSection {...data} />
            {/* <Chatbox/> Include the ChatbotComponent */}
        </div>
    );
};

export default Home;