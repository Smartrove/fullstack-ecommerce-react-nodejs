import React from "react";
import styled from "styled-components";
import { FaTelegramPlane } from "react-icons/fa";
import { mobileDevices } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobileDevices({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  ${mobileDevices({ width: "90%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>Get timely update for your favorite products</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <FaTelegramPlane style={{ fontSize: "20px" }} />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
