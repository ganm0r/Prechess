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
`;

const GameCard = ({ children, gridTemplateRows }) => {
  return (
    <React.Fragment>
        <StyledCard
            style={{
                gridTemplateRows: gridTemplateRows,
            }}
        >
            {children}
        </StyledCard>
    </React.Fragment>
  );
};

export { GameCard };