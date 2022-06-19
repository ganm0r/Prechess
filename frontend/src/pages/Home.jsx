import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GameCard } from "../components/GameCard";
import { GameModal } from "../components/GameModal";

const Grid = styled.div`
  display: grid;
`;

const Flex = styled.div`
  display: flex;
`;

const SubHeading = styled.h1`
  margin: 0;
  font-weight: ${typography.fontWeights.black};
  font-size: 24px;
  color: ${colors.white};
  position: relative;
  user-select: none;
`;

const GameHeading = styled.h1`
  font-weight: ${typography.fontWeights.black};
  font-family: ${typography.fonts.primary};
  font-size: 16px;
  color: ${colors.white};
  position: relative;
  user-select: none;
`;

const HOME_ROWS = [
  {
    heading: "OPENINGS",
  },
  {
    heading: "PREPARATIONS",
  },
  {
    heading: "GAMES",
  },
]

const GAMES = [
  {
    name: "London System",
  },
  {
    name: "French Defense",
  },
  {
    name: "Ruy Lopez",
  },
  {
    name: "Sicilian Defense",
  },
  {
    name: "Italian Game",
  },
  {
    name: "Caro-Kann Defense",
  },
  {
    name: "King's Gambit",
  },
  {
    name: "Alekhine's Defense",
  },
  {
    name: "Scandinavian Defense",
  },
]

// Max character count for game name = 30

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if(!user) {
      navigate("/");
    }
  }, [user, navigate]);
  
  return (
    <React.Fragment>
      <Grid
        style={{
          alignItems: "start",
          justifyContent: "flex-start",
          gridTemplateRows: "repeat(3, 1fr) 0.5fr",
          padding: "18px 36px",
          gap: "6.4%",
          marginTop: "2.7%",
        }}
      >
        {HOME_ROWS.map((content) => (
          <Grid
            style={{
              alignItems: "center",
              justifyContent: "center",
              gridTemplateColumns: "0.5fr 3fr",
              margin: "0",
            }}
          >
            <SubHeading key={`${content.heading}`}>{content.heading}</SubHeading>
            <Flex
              style={{
                flexDirection: "row",
                gap: "1.2%",
                height: "auto",
                overflowX: "scroll",
                scrollbarWidth: "thin",
              }}
            >
              {GAMES.map((game) => (
                <GameCard
                  gridTemplateRows={"repeat(2, 1fr)"}
                  key={game.name}
                  gameTitle={game.name}
                  onGameCardClick={() => {
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
                      marginLeft: "5%",
                    }}
                  >
                    <GameHeading style={{ marginRight: "5%", }}> 🎯 {game.name} </GameHeading>
                  </Flex>
                </GameCard>
              ))}
            </Flex>
          </Grid>
        ))}
        <GameModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={"My creations"}
          gameData={{modalData}}
        />
      </Grid>
    </React.Fragment>
  );
};

export { Home };