import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

import { GrClose } from "react-icons/gr";

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
    min-width: 500px;
    max-width: 500px;
    min-height: 600px;

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
  min-width: 480px;
  margin: 0;
  margin-top: 2%;
`;

const SubHeading = styled.h1`
  margin: 0;
  font-weight: ${typography.fontWeights.black};
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
                            }}
                        >
                            <SubHeading
                                style={{
                                    margin: "2%",
                                }}
                            >
                                {title}
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
                    </Grid>
                </StyledModal>
            </Overlay>
        </React.Fragment>
    );
};

export { GameModal };