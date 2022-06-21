import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GameCard } from "../components/GameCard";
import { GameModal } from "../components/GameModal";
import { GameForm } from "../components/GameForm";
import { getGames, reset } from "../features/games/gameSlice";
import { HashLoader } from "react-spinners";

const Grid = styled.div`
  display: grid;
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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
    heading: "OPENINGS 📖",
  },
  {
    heading: "PREPARATIONS ⚙️",
  },
  {
    heading: "GAMES 🕹️",
  },
];

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { games, isLoading, isError, isSuccess, message } = useSelector((state) => state.games);

  useEffect(() => {
    if(isError) {
      console.log(message);
    }

    if(!user) {
      navigate("/");
    }

    dispatch(getGames());

    return () => {
      dispatch(reset());
    }
  }, [user, navigate, dispatch, isError, message]);

  if(isLoading) {
    return (
      <Flex
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <HashLoader color={colors.orange} />
      </Flex>
    )
  }
  
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
                width: "80vw",
              }}
            >
              {games.map((game) => (
                content.heading.includes(game.type.toUpperCase()) ? (
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
                        marginLeft: "4%",
                      }}
                    >
                      <GameHeading style={{ marginRight: "5%", lineHeight: "28px" }}> 
                        🎯 {game.name} <br /> ⌛ {new Date(game.updatedAt).toLocaleString("en-US", { dateStyle: "long"})}
                      </GameHeading>
                    </Flex>
                  </GameCard>
                ) : null
              ))}
            </FlexScroll>
          </Grid>
        ))}
        <GameModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={"My creations 📚"}
          gameData={modalData}
        />
      </Grid>
    </React.Fragment>
  );
};

export { Home };