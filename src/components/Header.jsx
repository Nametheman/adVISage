import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Head>
        <h3>adVISAge</h3>

        <LinkWrapper>
          <Links>
            <a href="#">Hire talents</a>
            <a href="#">Become an advisor</a>
            <a href="#">Find an advisor</a>
          </Links>

          <GetStarted>Get Started</GetStarted>
        </LinkWrapper>
      </Head>
      <Banner>
        <p>Your adVISAge special merchandise is here. Dig in and get yours!</p>
      </Banner>
    </Container>
  );
};

export default Header;

const Container = styled.header``;
const Head = styled.nav`
  display: flex;
  padding: 10px 80px;
  justify-content: space-between;
  align-items: center;
`;
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Links = styled.div`
  a {
    padding: 5px 20px;
    text-decoration: none;
    color: #000;
  }
`;
const Banner = styled.div`
  background: #b500f7;
  //   height: 30px;
  width: 100%;

  p {
    padding: 10px 0;
    text-align: center;
    color: #fff;
  }
`;
export const GetStarted = styled.button`
  padding: 10px 35px;
  border-radius: 30px;
  border: none;
  background: transparent linear-gradient(180deg, #4d94f8 0%, #d284e2 100%) 0%
    0% no-repeat padding-box;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover {
    transform: translateY(-2px);
  }
`;
