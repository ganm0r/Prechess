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
import { register, reset } from "../features/auth/authSlice";
import { HashLoader } from "react-spinners";

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
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { name, email, password, confirmPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if(isError) {
      toast.error(message);
    }

    if(isSuccess || user) {
      navigate("/home");
    }

    dispatch(reset());

  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      toast.error("Passwords do not match!");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  }

  if(isLoading) {
    return <HashLoader color={colors.orange} />
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
              gridTemplateRows: "1fr 10fr",
            }}
          >
            <SubHeading>
              Welcome! Let's sign you up 🚀
            </SubHeading>
            <Form onSubmit={onSubmit} >
              <Input
                type={"text"}
                title={"name"}
                placeholder={"Magunus Carlsen"}
                required={true}
                info={"Your name associated with this account!"}
                id={"name"}
                name={"name"}
                value={name}
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
      </Grid>
    </React.Fragment>
  );
};

export { Register };