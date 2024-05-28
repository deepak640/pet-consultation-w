import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DoctorCard from "../Doctorcard";
import doctors from "../assets/test.doctors.json"
// const doctors = [
//   {
//     name: {
//       first_name: "Emily",
//       last_name: "Davis",
//     },
//     experience: "15 years",
//     star: 4.7,
//   },
//   {
//     name: {
//       first_name: "Daniel",
//       last_name: "Brown",
//     },
//     experience: "9 years",
//     star: 4.6,
//   },
//   {
//     name: {
//       first_name: "Sophia",
//       last_name: "Miller",
//     },
//     experience: "11 years",
//     star: 4.9,
//   },
//   // Add more doctor objects here if needed
// ];

const Consultsection = () => {
  const navigate = useNavigate();
  const [bookedDoctor, setBookedDoctor] = useState(null);

  const handleBookAppointment = (doctor) => {
    setBookedDoctor(doctor);
    // Navigate to profile page and pass the booked doctor's information
    navigate("/profile", { state: { bookedDoctor: doctor } });
  };

  return (
    <Wrapper>
      <div className="container grid">
        <div className="consult-section-data">
          <h1 className="consult-heading">Consult a vet online</h1>
          <p className="consult-para">
            Book your schedule for an online vet consultation now
          </p>
        </div>
      </div>

      <div className="container grid grid-two-column">
        <div className="inner-consult-section-image">
          <picture>
            <img src="./images/about2.svg" alt="consult" />
          </picture>
        </div>
        <div className="inner-consult-data">
          <h2 className="inner-consult-heading">
            Instant Consultation (10am - 7pm)
          </h2>
          <p className="inner-consult-para1">
            Book your Schedule for an online vet consultation Now! You will be
            notified about the Vet assignment shortly.
          </p>
          <h3 className="inner-consult-para">MRP 200</h3>
          <div className="doctor-cards">
            {doctors.slice(0, 3).map((doctor, index) => (
              <DoctorCard
                key={index}
                doctor={doctor}
                onBookAppointment={handleBookAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 2rem;

  .consult-heading {
    text-transform: uppercase;
    font-size: 5rem;
    text-align: center;
  }

  .consult-para {
    text-align: center;
  }

  .grid-two-column {
    margin-top: 75px;
  }

  .inner-consult-heading {
    font-size: 25px;
    text-align: center;
  }

  .inner-consult-para {
    text-align: center;
    margin-top: 20px;
  }

  .inner-consult-para1 {
    margin-top: 20px;
  }

  picture {
    text-align: center;
    padding: 5rem 0;
  }

  img {
    max-width: 60%;
  }

  .doctor-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
  }
`;

export default Consultsection;
