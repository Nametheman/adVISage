import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RxCaretRight, RxCaretLeft } from "react-icons/rx";
import image1 from "../assets/images/Group 125.png";
import image2 from "../assets/images/Group 126.png";
import image3 from "../assets/images/Group 127.png";
import image4 from "../assets/images/Group 128.png";
import image5 from "../assets/images/Group 129.png";
import image6 from "../assets/images/Group 130.png";
import image7 from "../assets/images/Group 131.png";

const Carousel = () => {
  const images = [
    {
      image: image1,
      id: "1",
      name: "Martha Exelsior",
      job: "Digital Nomad Expert",
      location: "Lagos, Nigeria",
    },
    {
      image: image2,
      id: "2",
      name: "Martha Exelsior",
      job: "Digital Nomad Expert",
      location: "Lagos, Nigeria",
    },
    {
      image: image3,
      id: "3",
      name: "Martha Exelsior",
      job: "Digital Nomad Expert",
      location: "Lagos, Nigeria",
    },
    {
      image: image4,
      id: "4",
      name: "Martha Exelsior",
      job: "Digital Nomad Expert",
      location: "Lagos, Nigeria",
    },
    {
      image: image5,
      id: "5",
      name: "Martha Exelsior",
      job: "Digital Nomad Expert",
      location: "Lagos, Nigeria",
    },
    {
      image: image6,
      id: "6",
      name: "Martha Exelsior",
      job: "Digital Nomad Expert",
      location: "Lagos, Nigeria",
    },
    {
      image: image7,
      id: "7",
      name: "Martha Exelsior",
      job: "Digital Nomad Expert",
      location: "Lagos, Nigeria",
    },
  ];

  const [indexOfFirstImage, setIndexOfFirstImage] = useState(0);
  const [indexOfLastImage, setIndexOfLastImage] = useState(5);
  const [translatePoint, setTranslatePoint] = useState(0);
  const [init, setInit] = useState(1);
  const totalImages = images.length;

  const myImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const nextSlideHandler = () => {
    if (init >= 4) {
      return;
    } else {
      setTranslatePoint(translatePoint + 275);
      setInit(init + 1);
    }
  };
  const prevSlideHandler = () => {
    if (init <= 1) {
      return;
    } else {
      setTranslatePoint(translatePoint - 275);
      setInit(init - 1);
    }
  };
  return (
    <Container>
      <Head>
        <h3>Discover the worlds top advisors and experts</h3>
        <div className="actions">
          <div className="explore">
            <button>Explore All</button>
          </div>
          <div>
            <RxCaretLeft
              size={30}
              style={{ cursor: "pointer" }}
              onClick={prevSlideHandler}
            />
            <RxCaretRight
              size={30}
              style={{ cursor: "pointer" }}
              onClick={nextSlideHandler}
            />
          </div>
        </div>
      </Head>
      <MyCarousel>
        {images.map((image) => {
          return (
            <div
              className="slideImages"
              style={{ transform: `translateX(-${translatePoint}px)` }}
            >
              <img src={image.image} alt="" />
              <div className="expertDetails">
                <h5>{image.name}</h5>
                <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                  {image.location}
                </p>
                <p>{image.job}</p>
              </div>
            </div>
          );
        })}
      </MyCarousel>
    </Container>
  );
};

export default Carousel;
const Container = styled.section``;
const Head = styled.div`
  display: flex;
  padding: 20px 90px;
  justify-content: space-between;
  align-items: center;

  .actions {
    display: flex;
    align-items: center;
    gap: 20px;

    .explore {
      button {
        padding: 8px 15px;
        font-size: 10px;
        border-radius: 30px;
        border: 1px solid #000;
        background: transparent;
        margin-bottom: 3px;
        cursor: pointer;
      }
    }
  }
`;
const MyCarousel = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  overflow-x: hidden;
  padding-left: 90px;

  .slideImages {
    transition: all 0.3s linear;

    position: relative;
    img {
      transition: all 0.3s linear;
      width: 255px;
    }
    .expertDetails {
      color: #fff;
      position: absolute;
      z-index: 20;
      //   top: 0;
      //   right: 0;
      bottom: 50px;
      left: 20%;
      text-align: center;

      h5 {
        margin-bottom: 5px;
        font-size: 20px;
      }
    }
  }
`;
