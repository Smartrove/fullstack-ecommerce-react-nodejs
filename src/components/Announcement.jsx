import React from "react";
import styled from "styled-components";
import { mobileDevices } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;

  ${mobileDevices({ marginTop: "50px", width: "100%" })}
`;

const Announcement = () => {
  return <Container>Super deal! Free Shipping on order above $50</Container>;
};

export default Announcement;
