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
  font-size: 32px;
  color: ${colors.white};
  position: relative;
  user-select: none;
`;

const Register = () => {
  return (
    <React.Fragment>
      <Grid
        style={{
            gridTemplateColumns: "3fr 1fr",
            alignItems: "center",
            justifyItems: "center",
            height: "96%",
        }}
      >
        <Card 
          gridTemplateRows={"repeat(6, 0.5fr)"}
        >
          <SubHeading>
            Welcome! Let's sign you up...
          </SubHeading>
          <Input
            type={"text"}
            title={"Username"}
            placeholder={"Magunus Carlsen"}
            required={true}
            info={"Your username associated with this account!"}
          />
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
          <Input
            type={"password"}
            title={"Confirm Password"}
            placeholder={"IAmWorldChamp@2022"}
            required={true}
            info={"Your strong password please!"}
          />
          <Button children={"Yes, take me in!"} />
        </Card>
        <img
          src="/prechess.jpg"
          alt="Mikhail Tal"
          style={{
              width: "100%",
              height: "100%",
              pointerEvents: "none",
          }}
        />
      </Grid>
    </React.Fragment>
  );
};

export { Register };