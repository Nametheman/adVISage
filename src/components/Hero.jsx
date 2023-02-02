import React, { useState } from "react";
import styled from "styled-components";
import { GrSearch } from "react-icons/gr";
import { GetStarted } from "./Header";
import images from "../assets/images/Group 133.png";

const Hero = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Container>
      <SwitchButton>
        <div style={{ borderBottom: "1px solid #cacaca" }}>
          <button
            onClick={() => {
              setToggle(false);
            }}
            style={{
              color: `${!toggle ? "#B500F7" : ""}`,
              borderBottom: `${!toggle ? "3px solid #B500F7" : ""}`,
            }}
          >
            Advisee
          </button>
          <button
            onClick={() => {
              setToggle(true);
            }}
            style={{
              color: `${toggle ? "#B500F7" : ""}`,
              borderBottom: `${toggle ? "3px solid #B500F7" : ""}`,
            }}
          >
            Advisor
          </button>
        </div>
      </SwitchButton>
      <AdviseeContent style={{ display: `${toggle ? "none" : "block"}` }}>
        <h1>
          Learn and grow with help <br /> of world class travel advisors <br />{" "}
          for free
        </h1>
        <p>
          Book and meet over 11,979+ mentors for 1:1 mentorship <br /> in our
          global community.
        </p>
        <ActionSection>
          <div className="hi">
            <Search>
              <GrSearch size={18} />
              <input
                type="search"
                placeholder="Search by country, school or language"
              />
            </Search>
            <ExpertiseSelect>
              <select name="idk" id="I-don't-know">
                <option value="">Expertise</option>
                <option value="dog">I</option>
                <option value="cat">Really</option>
                <option value="hamster">Have</option>
                <option value="parrot">No</option>
                <option value="spider">Idea</option>
                {/* <option value="goldfish">Goldfish</option> */}
              </select>
            </ExpertiseSelect>
            <CountrySelect>
              <select name="idk" id="I-don't-know">
                <option value="">Country</option>
                <option value="dog">Ok</option>
                <option value="cat">Just</option>
                <option value="hamster">Take</option>
                <option value="parrot">Your</option>
                <option value="spider">Time</option>
                {/* <option value="goldfish">Goldfish</option> */}
              </select>
            </CountrySelect>
          </div>
          <GetStarted style={{ fontSize: "11px" }}>Get Started</GetStarted>
        </ActionSection>
      </AdviseeContent>
      <AdvisorContent style={{ display: `${!toggle ? "none" : "block"}` }}>
        <h1>
          Your next chapter, made <br /> possible by advising people
        </h1>
        <p>
          Build confidence as a leader, grow your network, and define <br />{" "}
          your legacy.
        </p>
        <GetStarted>Get Started</GetStarted>
      </AdvisorContent>
      <Image>
        <img src={images} alt="" />
      </Image>
    </Container>
  );
};

export default Hero;
const Container = styled.section`
  padding: 40px 80px;
  //   width: 70%;
  position: relative;
  height: 450px;

  h1,
  p {
    margin-bottom: 5px;
    //     width: 55%;
  }
  h1 {
    font-size: 40px;
  }
  p {
    font-size: 20px;
  }
`;

const SwitchButton = styled.div`
  width: 180px;
  display: flex;
  margin: 20px 0;

  button {
    padding: 5px 30px 5px 1px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

const ActionSection = styled.div`
  width: 65%;
  margin-top: 30px;
  border: 1px solid #cacaca;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  .hi {
    display: flex;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 300px;
  padding: 5px 0;
  border-right: 1px solid #000;

  input {
    border: none;
    outline: none;
    width: 280px;

    &::placeholder {
      font-size: 12px;
      font-weight: 600;
    }
  }
`;

const ExpertiseSelect = styled.div`
  padding: 3px 20px 3px 0;
  border-right: 1px solid #000;

  select {
    padding: 0 15px;
    border: none;
    outline: none;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }
`;
const CountrySelect = styled.div`
  padding: 3px 20px 3px 0;

  select {
    padding: 0 15px;
    border: none;
    outline: none;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    color: #430759;
  }
`;
const Image = styled.div`
  position: absolute;
  top: 60px;
  right: 140px;

  img {
    height: 480px;
    // width: 400px;
  }
`;

const AdviseeContent = styled.div`
  h1,
  p {
    // margin-bottom: 30px;
  }
  transition: 0.3s;
`;
const AdvisorContent = styled.div`
  transition: 0.3s;
  h1,
  p {
    margin-bottom: 30px;
  }
`;
