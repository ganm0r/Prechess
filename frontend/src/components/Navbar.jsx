import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

import { useNavigate } from "react-router-dom";

const StyledNavbar = styled.div`
    display: flex;
    align-items: center;
    max-width: 100vw;
    background-color: ${colors.black};
    padding: 8px 36px;
    box-shadow: 0px 4px 8px ${colors.green};
`;

const SubHeading = styled.h1`
  margin: 0;
  font-weight: ${typography.fontWeights.black};
  font-size: 36px;
  line-height: 48px;
  color: ${colors.white};
  position: relative;
  cursor: pointer;
  role: button;
  user-select: none;
`;

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <StyledNavbar>
                <SubHeading onClick={() => navigate("/")}>PreChess</SubHeading>
            </StyledNavbar>
        </React.Fragment>
    );
};

export { Navbar };