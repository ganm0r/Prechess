import React from "react";
import styled from "styled-components";

import colors from "../theme/colors";
import typography from "../theme/typography";

const StyledButton = styled.button`
    background-color: ${colors.orange};
    font-weight: ${typography.fontWeights.black};
    font-size: 24px;
    box-sizing: border-box;
    color: white;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 14px;
    outline: none;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    margin-top: 7%;

    &:active {
        transform: scale(0.98);
    }
`;

const Button = ({ children, onClick, disabled, cursor, to, type, className }) => {
    return (
        <StyledButton
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{ cursor: cursor }}
            className={className}
        >
            {children}
        </StyledButton>
    );
};

export { Button };