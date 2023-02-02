import React from "react";
import styled from "styled-components";

const Mentors = () => {
  const mentors = [
    { title: "Digital Nomad", experts: "8,000", width: "180px" },
    { title: "Study Abroad vIsas", experts: "8,000", width: "220px" },
    { title: "Tech Nation Visas", experts: "8,000", width: "200px" },
    {
      title: "PHD Programes Applications",
      experts: "8,000",
      width: "270px",
    },
    { title: "Work Visa Applications", experts: "8,000", width: "230px" },
    { title: "Student Work Sources", experts: "8,000", width: "250px" },
  ];

  const firstMentors = mentors.slice(0, 3);
  const secondtMentors = mentors.slice(3, 6);
  //   console.log(firstMentors);
  return (
    <Container>
      <h2>Learn and grow on so many levels for free</h2>
      <p>Find mentors from educational & migration fields across the globe</p>

      <CardWrapper>
        {firstMentors.map((mentor, mentorIndex) => {
          return (
            <Card key={mentorIndex} style={{ width: `${mentor.width}` }}>
              <div className="circle"></div>
              <div className="content">
                <h5>{mentor.title}</h5>
                <p>{mentor.experts} experts</p>
              </div>
            </Card>
          );
        })}
        {/* <Card>hi</Card> */}
      </CardWrapper>
      <CardWrapper>
        {secondtMentors.map((mentor, mentorIndex) => {
          return (
            <Card key={mentorIndex} style={{ width: `${mentor.width}` }}>
              <div className="circle"></div>
              <div className="content">
                <h5>{mentor.title}</h5>
                <p>{mentor.experts} experts</p>
              </div>
            </Card>
          );
        })}
        {/* <Card>hi</Card> */}
      </CardWrapper>
      <CardWrapper>
        {firstMentors.map((mentor, mentorIndex) => {
          return (
            <Card key={mentorIndex} style={{ width: `${mentor.width}` }}>
              <div className="circle"></div>
              <div className="content">
                <h5>{mentor.title}</h5>
                <p>{mentor.experts} experts</p>
              </div>
            </Card>
          );
        })}
        {/* <Card>hi</Card> */}
      </CardWrapper>
      <Button>
        <button>Explore All</button>
      </Button>
    </Container>
  );
};

export default Mentors;

const Container = styled.section`
  margin-top: 130px;
  background: #f4f0f5 0% 0% no-repeat padding-box;
  padding: 50px 0;

  h2,
  p {
    text-align: center;
  }
  p {
    font-size: 13px;
    margin-top: 10px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 20px;
`;

const Card = styled.div`
  background: #fff;
  border: 0.7px solid #707070;
  border-radius: 15px;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 15px;
  transition: 0.2s ease-in;

  &:hover {
    transform: scale(1.05);
  }

  .circle {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #faecff;
  }

  .content {
    h5,
    p {
      text-align: left;
    }
    p {
      margin-top: 0;
      font-size: 12px;
      color: #1c1c1c;
    }
  }
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  button {
    background: #000;
    color: #fff;
    padding: 18px 60px;
    border: none;
    outline: none;
    border-radius: 50px;
    cursor: pointer;
  }
`;
