import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

import { useState } from "react";
import { GameModal } from "./GameModal";

const StyledCard = styled.div`
  display: grid;
  background-color: ${colors.green};
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 22px;
  max-width: 200px;
  min-width: 200px;
  max-height: 200px;
  min-height: 200px;
  role: button;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const GameHeading = styled.h1`
  font-weight: ${typography.fontWeights.black};
  font-family: ${typography.fonts.primary};
  font-size: 16px;
  color: ${colors.white};
  user-select: none;
`;

const GameCard = ({ children, gridTemplateRows, game, onGameDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  return (
    <React.Fragment>
      <StyledCard
        style={{
          gridTemplateRows: gridTemplateRows,
        }}
        onClick={() => {
          setModalData(game);
          setIsModalOpen(true);
        }}
      >
        <img
          src="/prechess.jpg"
          width="100%"
          height="auto"
          margin="0"
          alt="prechess"
          style={{
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            opacity: "0.85",
          }}
        />
        <Flex
          style={{
            justifyContent: "flex-start",
            width: "100%",
            marginLeft: "4%",
          }}
        >
          <GameHeading
            style={{ marginRight: "5%", lineHeight: "28px", textAlign: "left" }}
          >
            🎯 {game.name}
            <br />⌛{" "}
            {new Date(game.updatedAt).toLocaleString("en-US", {
              dateStyle: "long",
            })}
          </GameHeading>
        </Flex>
      </StyledCard>
      <GameModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={"My Creations 📚"}
        onDelete={onGameDelete}
        gameData={modalData}
      />
    </React.Fragment>
  );
};

export { GameCard };
