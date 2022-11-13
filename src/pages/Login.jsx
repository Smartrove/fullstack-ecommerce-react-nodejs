import React from "react";
import styled from "styled-components";
import { mobileDevices } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 5, 5, 0.5), rgba(25, 25, 255, 0.5)),
    url("product-3.jpg");
  background-repeat: repeat-y;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 30%;
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
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  margin: 20px 10px 0px 0px;
  padding: 15px 10px;
  background: rgba(255, 5, 5, 0.2);
  color: white;

  &:hover {
    background: rgba(2, 2, 200, 0.3);
  }
`;
const Link = styled.a`
  cursor: pointer;
  color: black;
  margin: 20px 10px 0px 0px;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Enter Password" />
          <Button type="submit">Login</Button>
          <Link>Forgot Password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
