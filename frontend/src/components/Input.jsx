import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

import { FaInfoCircle } from "react-icons/fa";

const Flex = styled.div`
  display: flex;
`;

const Grid = styled.div`
  display: grid;
`;

const StyledInputTitle = styled.p`
  font-weight: ${typography.fontWeights.black};
  font-family: ${typography.fonts.primary};
  font-size: 18px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${colors.white};
  margin: 2%;
  margin-left: 0%;
  user-select: none;
`;

const StyledInputInfo = styled.p`
  font-weight: ${typography.fontWeights.black};
  font-family: ${typography.fonts.primary};
  color: ${colors.white};
  font-size: 13px;
  margin-top: 0;
  margin-bottom: 2%;
  padding-left: 6px;
  user-select: none;
  text-transform: none;
`;

const StyledInputField = styled.input`
  border-style: solid;
  border-radius: 10px;
  border-width: 2px;
  min-width: 400px;
  padding: 12px;
  box-sizing: border-box;
  border-color: ${colors.white};
  background-color: ${colors.green};
  font-family: ${typography.fonts.primary};
  font-weight: ${typography.fontWeights.semibold};
  letter-spacing: 1.5px;
  font-size: 20px;
  color: ${colors.black};
  margin-bottom: 2%;

  &:focus {
    outline: none;
    border-color: ${colors.orange};
  }
`;

const Input = ({
  title,
  type,
  placeholder,
  required,
  info,
  id,
  name,
  value,
  className,
  onChange,
  maxLength,
}) => {
  return (
    <React.Fragment>
      <Grid
        style={{
          gridTemplateRows: "0.5fr 0.5fr 1fr",
          alignItems: "flex-start",
        }}
      >
        <StyledInputTitle>{title}</StyledInputTitle>
        <Flex
          style={{
            flexDirection: "row",
          }}
        >
          <FaInfoCircle
            style={{
              paddingTop: "1px",
            }}
          />
          <StyledInputInfo>{info}</StyledInputInfo>
        </Flex>
        <StyledInputField
          type={type}
          placeholder={placeholder}
          spellCheck="false"
          autoComplete="off"
          required={required}
          id={id}
          name={name}
          className={className}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
        ></StyledInputField>
      </Grid>
    </React.Fragment>
  );
};

export { Input };
