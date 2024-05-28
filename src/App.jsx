import React from 'react';
import Home from "./Home";
import Consult from "./Consult";
import Ngo from "./Ngo";
import About from "./About";
import Login from "./Login";
import Signup from './Signup';
import Chatbox from './Chatbox';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {ThemeProvider} from "styled-components";
import { GlobalStyle } from './GlobalStyle';
import Profile from './Profile'
import Doctorprofile from "./Doctorprofile";
function App() {

  const theme = {
    colors:{
      heading: "#262323",
      text: "#262323",
      white: "#FFFFFF",
      black: "#262626",
      helper: "#4F79C7",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "#94BDF2",
      border: "#0D65D9",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgba(132,144,255,1) 0%, rgba(75,116,192,0.9080882352941176) 66%)",
    },
    media:{mobile: "768px", tab: "998px"},
  };

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
     <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Consult" element={<Consult />} />
      {/* <Route path="/Ngo" element={<Ngo />} /> */}

      <Route path="/About" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile2" element={<Doctorprofile />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />}/>
      <Route path="/Chatbox" element={<Chatbox />}/>
     </Routes>
     <Footer />
    </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;
