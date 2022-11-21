import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;
const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center; */

  width: 100%;
  flex-direction: column;
  height: 100%;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  z-index: 3;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 0, 0, 0.2);
`;
const Title = styled.h5`
  color: white;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
`;

const CategoryItems = ({ item }) => {
  return (
    <Container>
      <Link to={`/productList/${item.category}`}>
        <Image src={item.image} />
        <InfoContainer>
          <Button>Shop Now</Button>
          <Title>{item.title}</Title>
        </InfoContainer>
      </Link>
    </Container>
  );
};

export default CategoryItems;
