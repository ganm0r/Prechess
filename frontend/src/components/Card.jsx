import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";

const StyledCard = styled.div`
    display: grid;
    background-color: ${colors.green};
    border-radius: 8px;
    box-sizing: border-box;
    padding: 22px;
    margin-bottom: 16px;
`;

const Card = ({ children, gridTemplateRows, bgColor }) => {
  return (
    <React.Fragment>
        <StyledCard
            style={{
                gridTemplateRows: gridTemplateRows,
                backgroundColor: bgColor,
            }}
        >
            {children}
        </StyledCard>
    </React.Fragment>
  );
};

export { Card };