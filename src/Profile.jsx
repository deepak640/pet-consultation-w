import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Profile = () => {
  const location = useLocation();
  const verify = location.state
    ? location.state.user
      ? location.state.user
      : JSON.parse(localStorage.getItem("user"))
    : null;
  console.log("🚀 ~ Profile ~ verify:", verify);
  const bookedDoctor = location.state ? location.state.bookedDoctor : null;

  return (
    <Wrapper>
      {verify != null ?
        <>
          <ProfileHeader>
            <h2>Welcome, {verify.email}!</h2>
            <p>Contact Number: {verify.contact_Number.$numberLong}</p>
          </ProfileHeader>
          <ProfileDetails>
            <h3>Address:</h3>
            <p>
              <li>Street: {verify.address.line1}</li>
              <li>State: {verify.address.state}</li>
              <li>Pincode: {verify.address.pincode}</li>
              <li>Country: {verify.address.country}</li>
            </p>
            <h3>Pet Details:</h3>
            <p>Pet Name: {verify.pet_name}</p>
            <p>Pet Type: {verify.pet_type}</p>
            <p>Breed: {verify.breed}</p>
            <p>Past Diseases: {verify.past_disease}</p>
            {bookedDoctor && (
              <div>
                <h3>Appointment Booked:</h3>
                <p>
                  Doctor: {bookedDoctor.name.first_name}{" "}
                  {bookedDoctor.name.last_name}
                </p>
              </div>
            )}
          </ProfileDetails>
        </> : <h1>Data not found</h1>
      }
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

export default Profile;
