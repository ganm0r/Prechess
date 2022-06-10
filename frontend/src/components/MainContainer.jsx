import styled from "styled-components";
import colors from "../theme/colors";

const MainContainer = styled.div(
  ({ theme }) => `
    width: 100vw;
    height: 100vh;
    background-color: ${colors["black"]};
  `
);

export { MainContainer };