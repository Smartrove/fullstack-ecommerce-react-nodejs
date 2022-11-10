import React from "react";
import styled from "styled-components";
import { FaCartPlus, FaHeart, FaSearch } from "react-icons/fa";

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  z-index: 3;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: f5fbfd;
  position: relative;

  &: hover ${InfoContainer} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  z-index: 3;
`;
const Image = styled.img`
  height: 75%;
  z-index: 3;
`;
const Icon = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ product }) => {
  return (
    <Container style={{ backgroundColor: "turquoise" }}>
      <Circle />
      <Image src={product.image} />
      <InfoContainer style={{ fontSize: "20px", color: "coral" }}>
        <Icon>
          <FaCartPlus />
        </Icon>
        <Icon>
          <FaSearch />
        </Icon>
        <Icon>
          <FaHeart />
        </Icon>
      </InfoContainer>
    </Container>
  );
};

export default Product;
