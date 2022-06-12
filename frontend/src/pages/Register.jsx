import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState, useEffect } from "react";

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

const Form = styled.form`
  display: grid;
  position: relative;
  grid-template-rows: repeat(5, 0.5fr);
`;

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { username, email, password, confirmPassword } = formData;

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const onSubmit = (event) => {
    event.preventDefault();
  }

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
        <Card>
          <Grid
            style={{
              gridTemplateRows: "1fr 10fr",
            }}
          >
            <SubHeading>
              Welcome! Let's sign you up 🚀
            </SubHeading>
            <Form onSubmit={onSubmit} >
              <Input
                type={"text"}
                title={"Username"}
                placeholder={"Magunus Carlsen"}
                required={true}
                info={"Your username associated with this account!"}
                id={"username"}
                name={"username"}
                value={username}
                onChange={onChange}
              />
              <Input
                type={"email"}
                title={"Email Address"}
                placeholder={"carlsenmagnus@gmail.com"}
                required={true}
                info={"Your email associated with this account!"}
                id={"email"}
                name={"email"}
                value={email}
                onChange={onChange}
              />
              <Input
                type={"password"}
                title={"Password"}
                placeholder={"IAmWorldChamp@2022"}
                required={true}
                info={"Your strong password please!"}
                id={"password"}
                name={"password"}
                value={password}
                onChange={onChange}
              />
              <Input
                type={"password"}
                title={"Confirm Password"}
                placeholder={"IAmWorldChamp@2022"}
                required={true}
                info={"Your strong password please!"}
                id={"confirmPassword"}
                name={"confirmPassword"}
                value={confirmPassword}
                onChange={onChange}
              />
              <Button 
                children={"Yes, take me in!"} 
                type={"submit"}
              />
            </Form>
          </Grid>
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