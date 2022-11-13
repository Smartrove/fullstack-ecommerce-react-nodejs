import React from "react";
import styled from "styled-components";
import { mobileDevices } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(5, 255, 255, 0.5), rgba(25, 25, 255, 0.5)),
    url("product-1.jpg");
  background-repeat: repeat-y;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: rgba(200, 200, 200, 0.3);
  ${mobileDevices({ width: "80%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 20px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 10px;
  background: rgba(255, 5, 5, 0.2);
  color: white;

  &:hover {
    background: rgba(2, 2, 200, 0.3);
  }
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create Account</Title>
        <Form>
          <Input type="text" placeholder="Enter First Name" />
          <Input type="text" placeholder="Enter Last Name" />
          <Input type="text" placeholder="Enter Username" />
          <Input type="email" placeholder="Enter Email" />
          <Input type="password" placeholder="Enter Password" />
          <Input type="password" placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>Privacy Policy</b>
          </Agreement>
          <Button type="submit">Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
