import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

const Grid = styled.div`
  display: grid;
`;

const SubHeading = styled.h1`
  margin: 0%;
  font-weight: ${typography.fontWeights.semibold};
  font-family: ${typography.fonts.primary};
  font-size: 32px;
  color: ${colors.white};
  position: relative;
  user-select: none;
`;

const Home = () => {
  return (
    <React.Fragment>
      <Grid
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SubHeading>
          Registered successfully MF!
        </SubHeading>
      </Grid>
    </React.Fragment>
  );
};

export { Home };