import React from "react";
import styled from "styled-components";

const DoctorCard = ({ doctor, onBookAppointment }) => {
  return (
    <Card>
      <h3>
        {doctor.name.first_name} {doctor.name.last_name}
      </h3>
      <p>Experience: {doctor.experience}</p>
      <p>Rating: {doctor.star}</p>
      <button onClick={() => onBookAppointment(doctor)}>
        Book Appointment
      </button>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0 0 10px 0;
  }

  p {
    margin: 5px 0;
  }

  button {
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #45a049;
  }
`;

export default DoctorCard;
