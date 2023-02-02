import React from "react";
import styled from "styled-components";
import { GetStarted } from "./Header";
import image1 from "../assets/images/Rectangle 12.png";
import image2 from "../assets/images/Rectangle 13.png";
import image3 from "../assets/images/Rectangle 14.png";

const FourthSection = () => {
  return (
    <Container>
      <Box>
        <div className="imageHolder">
          <img src={image1} alt="" />
        </div>
        <div className="boxContents">
          <h2>
            Get your chances up by 10x <br /> with iconic and legendary <br />{" "}
            advisors
          </h2>
          <p>
            If you’re looking for advice, jamming or networking - adVISAge lets
            you <br /> freely schedule a 1:1 mentorship session in fun new ways
            and work with <br /> them directly.
          </p>
          <GetStarted>Explore Members</GetStarted>
        </div>
      </Box>
      <Box style={{ flexDirection: "row-reverse" }}>
        <div className="imageHolder">
          <img src={image2} alt="" />
        </div>
        <div className="boxContents">
          <h2>
            Get your chances up by 10x <br /> with iconic and legendary <br />{" "}
            advisors
          </h2>
          <p>
            If you’re looking for advice, jamming or networking - adVISAge lets
            you <br /> freely schedule a 1:1 mentorship session in fun new ways
            and work with <br /> them directly.
          </p>
          <GetStarted>Explore Members</GetStarted>
        </div>
      </Box>
      <Box>
        <div className="imageHolder">
          <img src={image3} alt="" />
        </div>
        <div className="boxContents">
          <h2>
            Get your chances up by 10x <br /> with iconic and legendary <br />{" "}
            advisors
          </h2>
          <p>
            If you’re looking for advice, jamming or networking - adVISAge lets
            you <br /> freely schedule a 1:1 mentorship session in fun new ways
            and work with <br /> them directly.
          </p>
          <GetStarted>Explore Members</GetStarted>
        </div>
      </Box>
    </Container>
  );
};

export default FourthSection;

const Container = styled.section`
  padding: 60px;
`;
const Box = styled.div`
  display: flex;
  //   gap: 100px;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;

  .imageHolder {
    background: #072659;
    height: 270px;
    width: 300px;
    border-radius: 10px;
    position: relative;

    img {
      position: absolute;
      bottom: 15px;
      width: 330px;
      height: 230px;
    }
  }

  .boxContents {
    h2 {
      font-size: 25px;
    }
    h2,
    p {
      margin-bottom: 10px;
    }
  }
`;
