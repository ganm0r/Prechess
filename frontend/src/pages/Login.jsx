import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import { HashLoader } from "react-spinners";

const Grid = styled.div`
  display: grid;
  position: relative;
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const SubHeading = styled.h1`
  margin: 0%;
  font-weight: ${typography.fontWeights.black};
  font-family: ${typography.fonts.primary};
  font-size: 28px;
  color: ${colors.white};
  position: relative;
  user-select: none;
`;

const Form = styled.form`
  display: grid;
  position: relative;
  grid-template-rows: repeat(3, 0.5fr);
`;

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/home");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return (
      <Flex
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HashLoader color={colors.orange} />
      </Flex>
    );
  }

  return (
    <React.Fragment>
      <Grid
        style={{
          alignItems: "center",
          justifyItems: "center",
          height: "96%",
          marginLeft: "5%",
          marginRight: "5%",
        }}
      >
        <Card>
          <Grid
            style={{
              gridTemplateRows: "1fr 5fr",
            }}
          >
            <SubHeading>Hello again! Let's sign you in 🚀</SubHeading>
            <Form onSubmit={onSubmit}>
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
              <Button type={"submit"}>
                Let's Go<span style={{ paddingLeft: "4px" }}>🪴</span>
              </Button>
            </Form>
          </Grid>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export { Login };
