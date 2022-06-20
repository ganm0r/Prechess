import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GameCard } from "../components/GameCard";
import { GameModal } from "../components/GameModal";
import { GameForm } from "../components/GameForm";

const Grid = styled.div`
  display: grid;
`;

const Flex = styled.div`
  display: flex;
`;

const FlexScroll = styled.div`
  display: flex;

  ::-webkit-scrollbar {
    height: 4px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.black}; 
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.grey};
  }

  scrollbar-color: ${colors.grey} ${colors.black};
`;

const SubHeading = styled.h1`
  margin: 0;
  font-weight: ${typography.fontWeights.black};
  font-size: 24px;
  color: ${colors.white};
  user-select: none;
`;

const GameHeading = styled.h1`
  font-weight: ${typography.fontWeights.black};
  font-family: ${typography.fonts.primary};
  font-size: 16px;
  color: ${colors.white};
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
];

const GAMES = [
  {
    name: "London System",
    type: "Opening",
    game: "1. d4 d5 2. Nf3 Nf6 3. Bf4"
  },
  {
    name: "Tal v Kasparov 1992",
    type: "Game",
    game: "1. e4 c5 2. Nf3 d6 3.Bb5+ Nd7 4.d4 Nf6",
  },
  {
    name: "Tal v Kasparov 1992",
    type: "Game",
    game: "1. e4 c5 2. Nf3 d6 3.Bb5+ Nd7 4.d4 Nf6",
  },
  {
    name: "Tal v Kasparov 1992",
    type: "Game",
    game: "1. e4 c5 2. Nf3 d6 3.Bb5+ Nd7 4.d4 Nf6",
  },
  {
    name: "Tal v Kasparov 1992",
    type: "Game",
    game: "1. e4 c5 2. Nf3 d6 3.Bb5+ Nd7 4.d4 Nf6",
  },
  {
    name: "Tal v Kasparov 1992",
    type: "Game",
    game: "1. e4 c5 2. Nf3 d6 3.Bb5+ Nd7 4.d4 Nf6",
  },
  {
    name: "Tal v Kasparov 1992",
    type: "Game",
    game: "1. e4 c5 2. Nf3 d6 3.Bb5+ Nd7 4.d4 Nf6",
  },
  {
    name: "Tal v Kasparov 1992",
    type: "Game",
    game: "1. e4 c5 2. Nf3 d6 3.Bb5+ Nd7 4.d4 Nf6",
  },
  {
    name: "Tal v Kasparov 1992",
    type: "Game",
    game: "1. e4 c5 2. Nf3 d6 3.Bb5+ Nd7 4.d4 Nf6",
  },
];

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
          gap: "5%",
        }}
      >
        {HOME_ROWS.map((content) => (
          <Grid
            style={{
              alignItems: "center",
              justifyContent: "center",
              gridTemplateColumns: "1fr 5fr",
              margin: "0",
              marginTop: "1.2%",
            }}
          >
            <SubHeading key={`${content.heading}`}>{content.heading}</SubHeading>
            <FlexScroll
              style={{
                flexDirection: "row",
                gap: "1.2%",
                height: "auto",
                overflowX: "scroll",
                scrollbarWidth: "thin",
                width: "82vw",
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
            </FlexScroll>
          </Grid>
        ))}
        <GameModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={"My creations"}
          gameData={modalData}
        />
      </Grid>
    </React.Fragment>
  );
};

export { Home };