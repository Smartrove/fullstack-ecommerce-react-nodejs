import React from "react";
import styled from "styled-components";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useState } from "react";
import { slideItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  // background-color: coral;
  position: absolute;
  align-items: center;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "right" && "10px"}
  right: ${(props) => props.direction === "left" && "10px"}
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 82vh;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  font-size: 20px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <FaArrowCircleLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideItems &&
          slideItems.map((item) => (
            <Slide key={item.id} bg={item.bg}>
              <ImageContainer>
                <Image src={item.image} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.description} </Description>
                <Button>Shop Now</Button>
              </InfoContainer>
            </Slide>
          ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("left")}>
        <FaArrowCircleRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
