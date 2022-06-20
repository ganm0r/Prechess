import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

import { GrClose } from "react-icons/gr";
import { Button } from "./Button";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
`;

const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow-x: hidden;
    overflow: scroll;
    scrollbar-width: none;
    background-color: ${colors.green};
    border-radius: 8px;
    min-width: 524px;
    max-width: 524px;
    min-height: 624px;

    ::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
`;

const Grid = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: repeat(3, 0.5fr) 3fr 0.5fr;
  align-items: center;
  justify-content: center;
`;

const Flex = styled.div`
  display: flex;
  max-width: 506px;
  min-width: 506px;
  margin: 0;
  margin-top: 2%;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const SubHeading = styled.h1`
  margin: 0;
  font-weight: ${typography.fontWeights.black};
  color: ${colors.white};
  font-size: 32px;
  position: relative;
  user-select: none;
`;

const GameModal = ({ isOpen, onClose, gameData, title }) => {
    if(!isOpen) return null;

    return (
        <React.Fragment>
            <Overlay>
                <StyledModal>
                    <Grid>
                        <Flex
                            style={{
                                backgroundColor: `${colors.orange}`,
                                justifyContent: "space-between",
                                alignItems: "center",
                                borderRadius: "8px",
                                marginBottom: "2%",
                            }}
                        >
                            <SubHeading
                                style={{
                                    margin: "2%",
                                    color: `${colors.black}`,
                                    textTransform: "uppercase",
                                }}
                            >
                                {title} 📚  
                            </SubHeading>
                            <GrClose
                                size={"32px "}
                                style={{
                                    margin: "2%",
                                    color: `${colors.black}`,
                                }}
                                onClick={onClose}
                                cursor="pointer"
                            />
                        </Flex>
                        <Flex
                            style={{
                                backgroundColor: `${colors.orange}`,
                                borderRadius: "8px",
                            }}
                        >
                            <SubHeading
                            style={{
                                margin: "2%",
                            }}
                            >
                                {gameData.name}
                            </SubHeading>
                        </Flex>
                        <Flex
                            style={{
                                backgroundColor: `${colors.orange}`,
                                borderRadius: "8px",
                            }}
                        >
                            <SubHeading
                            style={{
                                margin: "2%",
                            }}
                            >
                                {gameData.type}
                            </SubHeading>
                        </Flex>
                        <Flex
                            style={{
                                backgroundColor: `${colors.black}`,
                                borderRadius: "8px",
                                height: "100%",
                                marginTop: "9%",
                                zIndex: "1",
                                overflow: "hidden",
                                overflowY: "scroll",
                            }}
                        >
                            <SubHeading
                            style={{
                                margin: "2%",
                            }}
                            >
                                {gameData.game}
                            </SubHeading>
                        </Flex>
                        <Flex
                            style={{
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "2%",
                            }}
                        >
                            <Button>Update<span style={{ paddingLeft: "8px" }}>📝</span></Button>
                            <Button>Delete<span style={{ paddingLeft: "8px" }}>🗑️</span></Button>
                        </Flex>
                    </Grid>
                </StyledModal>
            </Overlay>
        </React.Fragment>
    );
};

export { GameModal };