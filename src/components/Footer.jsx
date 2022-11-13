import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaDribbble,
  FaPinterest,
  FaMapMarkedAlt,
  FaEnvelope,
  FaPhone,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaStripe,
} from "react-icons/fa";
import { mobileDevices } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobileDevices({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobileDevices({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobileDevices({ backgroundColor: "#fff8f8" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
`;
const Logo = styled.h1`
  font-weight: bold;
  flex: 1;
`;
const Description = styled.div`
  flex: 1;
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
const ContactItem = styled.h5`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.div`
  font-size: 40px;
  display: flex;
  flex: 1;
  align-items: center;
  width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SMARTROVE.</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
          accusamus! Officiis voluptatem incidunt quibusdam vel.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FaFacebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <FaGithub />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <FaPinterest />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <FaDribbble />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FaMapMarkedAlt style={{ marginRight: "10px" }} />
          Lagos, Nigeria
        </ContactItem>
        <ContactItem>
          <FaPhone style={{ marginRight: "10px" }} />
          +2348168800815
        </ContactItem>
        <ContactItem>
          <FaEnvelope style={{ marginRight: "10px" }} />
          olaokunolalekan@gmail.com
        </ContactItem>
        <Payment>
          <FaCcMastercard style={{ marginRight: "10px", color: "3B5999" }} />
          <FaCcPaypal style={{ margin: "10px", color: "3B5999" }} />
          <FaCcVisa style={{ margin: "10px", color: "3B5999" }} />
          <FaStripe style={{ margin: "10px", color: "3B5999" }} />
        </Payment>
      </Right>
    </Container>
  );
};

export default Footer;
