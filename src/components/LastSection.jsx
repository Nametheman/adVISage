import React from "react";
import styled from "styled-components";
import logo from "../assets/images/Rectangle 16.png";
import { GetStarted } from "./Header";
import image from "../assets/images/Group 132.png";

const LastSection = () => {
  return (
    <Container>
      <Head>
        <h2>
          Why members are excited about <br /> adVISAge since its inception
        </h2>
      </Head>
      <CardSection>
        <Card>
          <div className="cardHead">
            <img src={logo} alt="" />
            <div className="cardHeadDetails">
              <h5>Diamond Matba</h5>
              <p>MSc. Student at YALE University</p>
            </div>
          </div>
          <div className="cardContent">
            <p>
              If you’re looking for advice, jamming or networking - adVISAge
              lets you freely schedule a 1:1 mentorship session in fun new ways
              and work with them directly.
            </p>
          </div>
        </Card>
        <Card>
          <div className="cardHead">
            <img src={logo} alt="" />
            <div className="cardHeadDetails">
              <h5>Diamond Matba</h5>
              <p>MSc. Student at YALE University</p>
            </div>
          </div>
          <div className="cardContent">
            <p>
              If you’re looking for advice, jamming or networking - adVISAge
              lets you freely schedule a 1:1 mentorship session in fun new ways
              and work with them directly.
            </p>
          </div>
        </Card>
        <Card>
          <div className="cardHead">
            <img src={logo} alt="" />
            <div className="cardHeadDetails">
              <h5>Diamond Matba</h5>
              <p>MSc. Student at YALE University</p>
            </div>
          </div>
          <div className="cardContent">
            <p>
              If you’re looking for advice, jamming or networking - adVISAge
              lets you freely schedule a 1:1 mentorship session in fun new ways
              and work with them directly.
            </p>
          </div>
        </Card>
        <Card>
          <div className="cardHead">
            <img src={logo} alt="" />
            <div className="cardHeadDetails">
              <h5>Diamond Matba</h5>
              <p>MSc. Student at YALE University</p>
            </div>
          </div>
          <div className="cardContent">
            <p>
              If you’re looking for advice, jamming or networking - adVISAge
              lets you freely schedule a 1:1 mentorship session in fun new ways
              and work with them directly.
            </p>
          </div>
        </Card>
        <Card>
          <div className="cardHead">
            <img src={logo} alt="" />
            <div className="cardHeadDetails">
              <h5>Diamond Matba</h5>
              <p>MSc. Student at YALE University</p>
            </div>
          </div>
          <div className="cardContent">
            <p>
              If you’re looking for advice, jamming or networking - adVISAge
              lets you freely schedule a 1:1 mentorship session in fun new ways
              and work with them directly.
            </p>
          </div>
        </Card>
        <Card>
          <div className="cardHead">
            <img src={logo} alt="" />
            <div className="cardHeadDetails">
              <h5>Diamond Matba</h5>
              <p>MSc. Student at YALE University</p>
            </div>
          </div>
          <div className="cardContent">
            <p>
              If you’re looking for advice, jamming or networking - adVISAge
              lets you freely schedule a 1:1 mentorship session in fun new ways
              and work with them directly.
            </p>
          </div>
        </Card>
      </CardSection>
      <SecondSection>
        <div>
          <h1 style={{ textAlign: "center" }}>
            Become an adVISAge member <br /> today.
          </h1>
          <GetStarted
            style={{
              padding: "20px 90px",
              fontWeight: "600",
              fontSize: "15px",
              marginTop: "50px",
            }}
          >
            Join now (for free)
          </GetStarted>
        </div>
        <img src={image} alt="" />
      </SecondSection>
    </Container>
  );
};

export default LastSection;

const Container = styled.section`
  padding: 20px 90px;
  margin-top: 40px;
`;

const Head = styled.div`
  h2 {
    text-align: center;
    font-size: 30px;
  }
`;

const CardSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  padding: 0 70px;
  margin-top: 30px;
`;
const Card = styled.div`
  height: 250px;
  width: 290px;
  border: 1px solid #9e8da2;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 30px;
  transition: 0.1s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px #faecff;
    border: 1px solid #dfdcdc;
  }

  .cardHead {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 60px;
    }

    .cardHeadDetails {
      h5 {
        font-size: 14px;
      }
      p {
        font-size: 10px;
      }
    }
  }

  .cardContent {
    font-size: 15px;
    margin-top: 20px;
  }
`;

const SecondSection = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
  align-items: center;
  position: relative;

  img {
    position: absolute;
    width: 900px;
    top: 30px;
  }
`;
