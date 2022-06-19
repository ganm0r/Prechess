import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";

const StyledCard = styled.div`
    display: grid;
    background-color: ${colors.green};
    border-radius: 8px;
    box-sizing: border-box;
    margin-bottom: 22px;
    min-width: 200px;
    max-height: 200px;
    role: button;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        transform: scale(0.98);
    }
`;

const GameCard = ({ children, gridTemplateRows, gameTitle, onGameCardClick }) => {
  return (
    <React.Fragment>
        <StyledCard
            style={{
                gridTemplateRows: gridTemplateRows,
            }}
            onClick={onGameCardClick}
        >
            {children}
        </StyledCard>
    </React.Fragment>
  );
};

export { GameCard };