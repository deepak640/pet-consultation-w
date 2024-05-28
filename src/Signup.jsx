import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "./styles/Button";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Patient",
    specialised: "",
    license: "",
    doctorFieldsVisible: false,
  });

  function dataSend() {
    const name = formData.name;
    const email = formData.email;
    const password = formData.password;
    const role = formData.role;
    const specialised = formData.specialised;
    const license = formData.license;
    if (formData.doctorFieldsVisible === false) {
      const userData = [name, email, password];
      return userData;
    } else {
      const doctorData = [name, email, password, role, specialised, license];
      return doctorData;
    }
  }

  const handleInputChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    const { value } = e.target;
    setformData({
      ...formData,
      role: value,
      doctorFieldsVisible: value === "Doctor",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response; // Declare response variable at a higher scope

    try {
      if (formData.doctorFieldsVisible === true) {
        response = await axios.post("http://localhost:3000/doctor/", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          specialised: formData.specialised,
          license: formData.license,
        });
      } else {
        response = await axios.post("http://localhost:3000/pet/", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      }

      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <Wrapper>
      <Styledsignup>
        <div className="signup-section">
          <h2 className="signup-heading">Create an account</h2>
        </div>
        <div className="container">
          <div className="signup-form">
            <form method="POST" id="name" className="input-form">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              {formData.doctorFieldsVisible && (
                <>
                  <input
                    type="text"
                    id="specialised"
                    placeholder="Specialised In"
                    name="specialised"
                    value={formData.specialised}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    id="license"
                    placeholder="License"
                    name="license"
                    value={formData.license}
                    onChange={handleInputChange}
                    required
                  />
                </>
              )}

              <div className="signup-option">
                <label className="signup-label">
                  {" "}
                  Are you a:{" "}
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleRoleChange}
                    className="optionvalue"
                  >
                    <option value="Patient">Patient</option>
                    <option value="Doctor">Doctor</option>
                  </select>
                </label>
              </div>

              <div onClick={dataSend} className="sign-button">
                <NavLink to="/Signup">
                  <Button
                    type="submit"
                    className="signup-button"
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </Button>
                </NavLink>
              </div>

              <p className="signup-para">
                Already have an account?{" "}
                <NavLink className="signup-link" to="/Login">
                  Login
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </Styledsignup>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center; /* Center-align horizontally */
  align-items: center; /* Center-align vertically */

  .signup-heading {
    //text-transform: Uppercase;
    text-align: center;
    font-size: 30px;
  }

  .signup-label {
    font-size: 15px;
  }

  .optionvalue {
    font-size: 15px;
  }

  .signup-para {
    margin-top: 1px;
  }

  .signup-button {
    //max-width: 16rem;
    padding: 10px 15px;
    text-transform: uppercase;
    font-size: 16px;
    border-radius: 5px;
    //margin-bottom: 1px;
  }

  .container {
    margin-top: 6rem;
    text-align: center;

    .signup-form {
      max-width: 500px;
      margin: auto;

      .input-form {
        display: flex;
        flex-direction: column;
        gap: 30px;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
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
`;

const Styledsignup = styled.section`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add box-shadow for 2D effect */
  padding: 20px 10px;
  height: 650px;
  width: 650px;
`;

export default Signup;
