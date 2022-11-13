import { css } from "styled-components";
export const mobileDevices = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }

    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
export const tabletDevices = (props) => {
  return css`
    @media only screen and (max-width: 1024px) {
      ${props}
    }
  `;
};
