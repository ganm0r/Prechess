import React from 'react';
import styled from "styled-components";

import { Button } from "../components/Button";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import typography from "../theme/typography";
import colors from "../theme/colors";

const Grid = styled.div`
  display: grid;
  position: relative;
`;

const Heading = styled.h1`
  margin: 0;
  font-weight: ${typography.fontWeights.black};
  font-size: 92px;
  line-height: 88px;
  color: ${colors.white};
  user-select: none;
`;

const SubHeading = styled.h3`
  margin: 0;
  margin-top: 4%;
  font-weight: ${typography.fontWeights.bold};
  font-size: 56px;
  line-height: 64px;
  color: ${colors.white};
  user-select: none;
`;

const Image = styled.img`
  pointer-events: none;
`;

const Landing = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if(user) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <React.Fragment>
        <Grid
            style={{
                gridTemplateColumns: "0.9fr 0.7fr",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Grid
                style={{
                    height: "80%",
                    padding: "36px",
                    paddingTop: "64px",
                    gridTemplateRows: "2.5fr 1.5fr 1fr",
                    alignItems: "center",
                }}
            >
                <Heading>
                    Your <br />
                    <Heading style={{ marginBottom: "8px", color: colors.grey }}>Personalised</Heading>
                    Chess Database
                </Heading>
                <SubHeading>
                    All your favourite openings, <br/>
                    preparations and games <br/>
                    in <span style={{ color: colors.grey }}>one</span> place.
                </SubHeading>
                <Grid
                    style={{
                        width: "85%",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "48px",
                        marginTop: "5%",
                    }}
                >
                    <Button onClick={() => navigate("/login")} >Sign In<span style={{ paddingLeft: "8px" }}>🪴</span></Button>
                    <Button onClick={() => navigate("/register")} >Sign Up<span style={{ paddingLeft: "8px" }}>🌱</span></Button>
                </Grid>
            </Grid>
            <Image
                src="/Vishy.png"
                alt="Vishy Anand"
                style={{
                    height: "90%",
                    marginTop: "21%",
                }}
            />
        </Grid>
    </React.Fragment>
  );
};

export { Landing };