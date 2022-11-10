import PropTypes from "prop-types";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
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
`;
const Lang = styled.span`
  font-size: 14;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 2px solid lightgrey;
  border-radius: 15px;
  display: flex;
  align-items: center;
  margin: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Logo = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;
const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: bold;
`;
const NavbarComponent = ({ title }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lang>EN</Lang>
          <SearchContainer>
            <Input />
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
            <FaCartPlus className="fa-2xl" style={{ fontSize: "50px" }} />
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
