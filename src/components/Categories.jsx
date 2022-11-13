import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItems from "./CategoryItems";
import { mobileDevices } from "../responsive";

const Container = styled.div`
  display: flex;
  padding-top: 550px;
  justify-content: space-between;
  ${mobileDevices({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItems key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
