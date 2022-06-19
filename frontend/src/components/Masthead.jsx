import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

const StyledMasthead = styled.a`
  font-weight: ${typography.fontWeights.black};
  font-family: ${typography.fonts.primary};
  font-size: 18px;
  color: ${colors.white};
  user-select: none;
  text-decoration: none;
  margin: auto;
  cursor: pointer;

  &:hover {
    color: ${colors.orange};
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Flex = styled.div`
  display: flex;
  margin: 0;
  background: ${colors.green};
  width: 100vw;
  height: 68px;
  text-align: center;
`;

const Masthead = () => {
  return (
    <Flex>
      <StyledMasthead
        href="https://github.com/ganm0r/learn-mern"
        target="_blank"
      >
        Crafted with 💖 by Gandharv
      </StyledMasthead>
    </Flex>
  );
};

export { Masthead };