import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

const Grid = styled.div`
  display: grid;
  position: relative;
`;

const SubHeading = styled.h1`
  margin: 0%;
  font-weight: ${typography.fontWeights.semibold};
  font-family: ${typography.fonts.primary};
  font-size: 36px;
  color: ${colors.white};
  position: relative;
`;

const Login = () => {
  return (
    <React.Fragment>
      <Grid
        style={{
            gridTemplateColumns: "0.9fr 0.7fr",
            alignItems: "center",
            justifyItems: "center",
            height: "95%",
        }}
      >
        <Card 
          gridTemplateRows={"repeat(4, 0.68fr)"}
        >
          <SubHeading>
            Hello again! Let's sign you in...
          </SubHeading>
          <Input
            type={"email"}
            title={"Email Address"}
            placeholder={"carlsenmagnus@gmail.com"}
            required={true}
            info={"Your email associated with this account!"}
          />
          <Input
            type={"password"}
            title={"Password"}
            placeholder={"IAmWorldChamp@2022"}
            required={true}
            info={"Your strong password please!"}
          />
          <Button children={"Yes, take me in!"} />
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export { Login };