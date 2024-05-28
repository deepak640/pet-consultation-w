import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./styles/Button";
import { NavLink, json, useNavigate } from "react-router-dom";
import axios from "axios";
import users from "./assets/test.pets.json";
import doctors from "./assets/test.doctors.json"
const Login = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const verifyusers = (users, doctors,formData) => {
    for (let i = 0; i < users.length; i++) {
      const { email, password } = users[i];
      if (email === formData.email && password === formData.password) {
        return users[i]; // Match found, return true
      }
    }
    for (let i = 0; i < doctors.length; i++) {
      const { email, password } = doctors[i];
      if (email === formData.email && password === formData.password) {
        return doctors[i]; // Match found, return true
      }
    }
    return false; // No match found, return false
  };
  const handleInputChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const verify = verifyusers(users,doctors, formData)
    console.log("🚀 ~ handleSubmit ~ verify:", verify)
    if (!verify) {
      alert("verification failed");
    } else {
      if (verify.license) {
        localStorage.setItem("user",JSON.stringify(verify))
        navigate("/profile2",{state:{user:verify}})
      }else{
        localStorage.setItem("user",JSON.stringify(verify))
        navigate("/profile",{state:{user:verify}})
      }
    }
    //  console.log("🚀 ~ handleSubmit ~ verify:", verify)
    // try {
    //   const response = await axios.post(
    //     "http://localhost:3000/pet/login",
    //     formData
    //   ); // Replace '/api/users' with your backend POST endpoint
    //   console.log("Response from server:", response.data);
    // } catch (error) {
    //   console.error("Error submitting data:", error);
    // }
  };

  return (
    <Wrapper>
      <Styledsection>
        <div className="login-section">
          <h2 className="login-heading">Hello Welcome Back!!</h2>
        </div>
        <div className="container">
          <div className="login-form">
            <form className="input-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <div className="login-button">
                <Button type="submit" className="login-button">
                  Submit
                </Button>
              </div>
              {/* {console.log("submitted")} */}
              <p>
                Don't have an account?{" "}
                <NavLink className="login-link" to="/Signup">
                  Register
                </NavLink>
              </p>
              {/* {console.log("submitted2")} */}
            </form>
          </div>
        </div>
      </Styledsection>
    </Wrapper>
  );
};

const Wrapper = styled.section`
   padding: 9rem 0;
   display: flex;
   justify-content: center; /* Center-align horizontally */
   align-items: center; /* Center-align vertically */
//    max-width: 570px;
   //height: 100vh;

   .login-heading{
    //text-transform: Uppercase;
    text-align: center;
    font-size: 30px;
   }

   .login-button{
      //max-width: 16rem;
      padding: 10px 15px;
      text-transform: uppercase;
      font-size: 18px;
      border-radius: 5px;
   }

   .container{
       margin-top: 6rem;
       text-align: center;

       .login-form{
           max-width: 500px;
           margin: auto;

           .input-form{
               display: flex;
               flex-direction: column;
               gap: 30px;

               input[type="submit"]{
                   cursor: pointer;
                   transition: all 0.2s;


                   &:hover{
                       background-color: ${({ theme }) => theme.colors.white};
                       border: 1px solide ${({ theme }) => theme.colors.btn};
                       color: ${({ theme }) => theme.colors.btn};
                       transform: scale(0.9);
                       //align-items: center;

                   }
               }
           }


        }
   }


   }

//    .section-form{
//     width: 100%;
//     padding: 10px;
//     font-size: 16px;
//     border: 1px solid #0066ff61;
//     border-radius: 5px;
//     //focus-outline: none;
//    }

`;

const Styledsection = styled.section`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add box-shadow for 2D effect */
  padding: 20px 10px;
  height: 450px;
  width: 570px;
`;

export default Login;
