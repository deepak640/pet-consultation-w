import React from "react";
import HeroSection from "./Components/HeroSection";

const About = () =>{

    const data ={
        name: "Online Vet Clinic",
        image: "./images/hero3.svg",
        para: "Welcome To",
        heropara: `where we prioritize the well-being of your cherished pets. Our team of passionate and experienced pet consultants is dedicated to offering tailored advice and solutions to meet the unique needs of every pet and their owner.

        At Online Vet Clinic, we take a holistic approach to pet care, addressing not only physical health but also mental and emotional well-being, environment, and the bond between pet and owner. Our consultants are knowledgeable in various aspects of pet care, including nutrition, behavior, training, grooming, and more.
        
        Whether you have a dog, cat, bird, fish, reptile, or any other pet, Online Vet Clinic is here to help you provide the best care possible. Join us in our mission to promote responsible pet ownership and ensure that every pet lives a happy, healthy, and fulfilling life.
        `,
    };

    return <HeroSection {...data}  />;
};

export default About;