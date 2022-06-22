import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GameCard } from "../components/GameCard";
import { getGames, deleteGame, reset } from "../features/games/gameSlice";
import { HashLoader } from "react-spinners";
import { toast } from "react-toastify";

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
  font-size: 28px;
  color: ${colors.white};
  user-select: none;
`;

const StyledCard = styled.div`
  display: grid;
  background-color: ${colors.black};
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 22px;
  max-width: 200px;
  min-width: 200px;
  max-height: 200px;
  min-height: 200px;
  overflow: scroll;
  text-align: left;
  opacity: 0.8;

  ::-webkit-scrollbar {
    height: 0px;
  }
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { games, isLoading, isError, message } = useSelector(
    (state) => state.games
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/");
    }

    dispatch(getGames());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch, isError, message]);

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
          alignItems: "start",
          justifyContent: "flex-start",
          gridTemplateRows: "repeat(3, 1fr) 0.5fr",
          padding: "18px 36px",
          gap: "5%",
        }}
      >
        {HOME_ROWS.map((content) => (
          <Grid
            key={content.heading}
            style={{
              alignItems: "center",
              justifyContent: "center",
              gridTemplateColumns: "1fr 5fr",
              margin: "0",
              marginTop: "1.2%",
              textAlign: "center",
            }}
          >
            <SubHeading key={`${content.heading}`}>
              {content.heading}
            </SubHeading>
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
              <StyledCard>
                <SubHeading
                  style={{
                    marginLeft: "20%",
                    marginTop: "20%",
                    fontSize: "96px",
                  }}
                >
                  ♟️
                </SubHeading>
              </StyledCard>
              {games.map((game) =>
                content.heading.includes(game.type.toUpperCase()) ? (
                  <GameCard
                    gridTemplateRows={"repeat(2, 1fr)"}
                    key={game._id}
                    game={game}
                    onGameDelete={() => {
                      dispatch(deleteGame(game._id));
                      toast.success(game.type + " deleted successfully!");
                    }}
                  />
                ) : null
              )}
            </FlexScroll>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export { Home };
