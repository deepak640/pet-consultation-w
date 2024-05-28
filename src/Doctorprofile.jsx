import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Doctorprofile = () => {
  const location = useLocation();
  const user = location.state;

  return (
    <Wrapper>
      <ProfileHeader>
        <h2>Welcome, {user.email}!</h2>
        <p>Contact Number: {user.contact.$numberLong}</p>
      </ProfileHeader>
      <ProfileDetails>
        <h3>Name:</h3>
        <p>
          <li>First Name: {user.name.first_name}</li>
          <li>Middle Name: {user.name.middle_name}</li>
          <li>Last Name: {user.address.last_name}</li>
        </p>
        <h3>Experience:</h3>
        <p>Degree {user.degree}</p>
        <p>Expertise: {user.expertise}</p>
        <p>Experience: {user.experience}</p>
        <p>License: {user.license}</p>
      </ProfileDetails>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 9rem 0;
  ${"" /* border: 1px solid #ccc; */}
  border-radius: 5px;
  max-width: 600px;
  margin: 0 auto;
`;

const ProfileHeader = styled.div`
  text-align: center;
`;

const ProfileDetails = styled.div`
  h3 {
    margin-bottom: 10px;
  }

  ul {
    padding-left: 20px;
  }

  p {
    margin-bottom: 5px;
  }
`;

export default Doctorprofile;
