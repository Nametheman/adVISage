import React from "react";
import styled from "styled-components";
import { GetStarted } from "./Header";
import icon1 from "../assets/images/ic1.svg";
import icon2 from "../assets/images/ic2.svg";
import icon3 from "../assets/images/ic3.svg";
import icon4 from "../assets/images/ic4.svg";

const Footer = () => {
  const links = [
    { name: "About", path: "#" },
    { name: "Annual Events", path: "#" },
    { name: "Job Board", path: "#" },
    { name: "Become a Partner", path: "#" },
    { name: "Guides Series", path: "#" },
    { name: "Sales Articles", path: "#" },
    { name: "Marketing Articles", path: "#" },
    { name: "Our Blogs", path: "#" },
    { name: "Podcast", path: "#" },
    { name: "Member Resoources", path: "#" },
    { name: "Executive Dinners", path: "#" },
    { name: "Communities", path: "#" },
    { name: "Referral Program", path: "#" },
    { name: "Contribute", path: "#" },
    { name: "Privacy Policy", path: "#" },
    { name: "Terms & Conditions", path: "#" },
    { name: "Code of Conduct", path: "#" },
  ];

  const socials = [
    { name: "fb", icon: icon1 },
    { name: "git", icon: icon2 },
    { name: "twitter", icon: icon3 },
    { name: "in", icon: icon4 },
  ];
  const partnerLinks = links.slice(0, 5);
  const resourcesLinks = links.slice(5, 9);
  const membersLinks = links.slice(9, 14);
  const legalLinks = links.slice(14, 17);
  return (
    <Container>
      <div className="footerLink">
        <h3>PARTNER</h3>
        {partnerLinks.map((link) => {
          return <a href={link.path}>{link.name}</a>;
        })}
      </div>
      <div className="footerLink">
        <h3>RESOURCES</h3>
        {resourcesLinks.map((link) => {
          return <a href={link.path}>{link.name}</a>;
        })}
      </div>
      <div className="footerLink">
        <h3>MEMBERS ONLY</h3>
        {membersLinks.map((link) => {
          return <a href={link.path}>{link.name}</a>;
        })}
      </div>
      <div className="footerLink">
        <h3>LEGAL</h3>
        {legalLinks.map((link) => {
          return <a href={link.path}>{link.name}</a>;
        })}
      </div>
      <div className="footerLink">
        <h3>
          SUBSCRIBE TO OUR <br /> NEWSLETTER
        </h3>
        <p>
          The latest news, articles and <br /> resources, sent to your inbox{" "}
          <br />
          weekly.
        </p>
        <GetStarted style={{ marginTop: "15px" }}>Subscribe</GetStarted>
        <div className="socialsWrapper">
          {socials.map((social) => {
            return (
              <div className="iconHolder">
                <img src={social.icon} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Footer;
const Container = styled.footer`
  background: #faecff;
  padding: 50px 100px;
  display: flex;
  gap: 100px;

  .footerLink {
    display: flex;
    flex-direction: column;
    gap: 13px;

    h3 {
      font-size: 14px;
    }

    a,
    p {
      color: #1c1c1c;
      text-decoration: none;
      font-size: 14px;
    }

    .socialsWrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .iconHolder {
        background: #000;
        height: 35px;
        width: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;

        img {
          width: 25px;
        }
      }
    }
  }
`;
