import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

const Masthead = styled.a`
  font-weight: ${typography.fontWeights.bold};
  font-size: 22px;
  color: ${colors.grey};
  bottom: 836px;
  position: absolute;
  text-align: left;
  margin-left: 36px;
  user-select: none;
  role: button;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${colors.white};
  }
`;

export { Masthead };