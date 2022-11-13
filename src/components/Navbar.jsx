import PropTypes from "prop-types";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { mobileDevices, tabletDevices } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobileDevices({ height: "50px" })}
`;
const Wrapper = styled.div`
  margin: 0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Centre = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobileDevices({ flex: 3, justifyContent: "center" })}
`;
const Lang = styled.span`
  font-size: 14;
  cursor: pointer;
  ${mobileDevices({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 2px solid lightgrey;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin: 25px;
  padding: 5px;
  ${mobileDevices({ marginBottom: "10px" })}
`;

const Input = styled.input`
  border: none;
  ${mobileDevices({ width: "50px" })}
`;

const Logo = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  ${mobileDevices({ fontSize: "20px" })}
`;
const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: bold;
  ${mobileDevices({ marginLeft: "10px", fontSize: "10px" })}
`;
const NavbarComponent = ({ title }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lang>EN</Lang>
          <SearchContainer>
            <Input placeholder="search..." />
            <FaSearch style={{ color: "gray" }} />
          </SearchContainer>
        </Left>
        <Centre>
          <Logo>{title}</Logo>
        </Centre>
        <Right>
          <MenuItems>Register</MenuItems>
          <MenuItems>Login</MenuItems>
          <MenuItems>
            <FaCartPlus className="fa-2xl" />
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};
NavbarComponent.defaultProps = {
  title: "SMARTROVE.",
};
NavbarComponent.propTypes = {
  title: PropTypes.string,
};

export default NavbarComponent;
