import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { GameForm } from "./GameForm";
import { useState } from "react";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 380px;
`;

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  &:hover {
    color: ${colors.grey};
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <React.Fragment>
      {user ? (
        <StyledNavbar>
          <SubHeading>
            {user && user.name}
            <span style={{ paddingLeft: "8px" }}>💕</span>
          </SubHeading>
          <Flex>
            <SubHeading
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Create<span style={{ paddingLeft: "8px" }}>✨</span>
            </SubHeading>
            <SubHeading onClick={onLogout}>
              Logout<span style={{ paddingLeft: "8px" }}>🚪</span>
            </SubHeading>
          </Flex>
        </StyledNavbar>
      ) : (
        <StyledNavbar>
          <SubHeading onClick={() => navigate("/")}>
            PreChess<span style={{ paddingLeft: "8px" }}>🎓</span>
          </SubHeading>
        </StyledNavbar>
      )}
      <GameForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={"Create ✨"}
      />
    </React.Fragment>
  );
};

export { Navbar };
