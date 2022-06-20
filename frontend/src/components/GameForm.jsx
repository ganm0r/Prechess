import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

import { Input } from "./Input";
import { Button } from "./Button";
import { Select } from "./Select";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";
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
    overflow: hidden;
    scrollbar-width: none;
    background-color: ${colors.green};
    border-radius: 8px;
    min-width: 524px;
    max-width: 524px;
    min-height: 620px;

    ::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
`;

const StyledModalForm = styled.form`
    display: grid;
    position: relative;
    grid-template-rows: repeat(5, 0.5fr);
    margin: 2%;
    margin-top: 0;
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

const GAME_TYPES = [
    {
      type: "Opening",
    },
    {
      type: "Preparation",
    },
    {
      type: "Game",
    },
];

const GameForm = ({ isOpen, onClose, gameData, title }) => {
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        game: "",
    });

    const { name, type, game } = formData;

    const dispatch = useDispatch();

    const onChange = (event) => {
        setFormData((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }))
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const gameData = {
          name,
          type,
          game,
        };
    }

    if(!isOpen) return null;

    return (
        <React.Fragment>
            <Overlay>
                <StyledModal>
                    <StyledModalForm>
                        <Flex
                            style={{
                                    backgroundColor: `${colors.orange}`,
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    borderRadius: "8px",
                                    marginBottom: "4%",
                                }}
                            >
                            <SubHeading
                                style={{
                                    margin: "2%",
                                    color: `${colors.black}`,
                                    textTransform: "uppercase",
                                }}
                            >
                                {title} ✨
                            </SubHeading>
                            <GrClose
                                size={"32px"}
                                style={{
                                    margin: "2%",
                                    color: `${colors.black}`,
                                }}
                                onClick={onClose}
                                cursor="pointer"
                            />
                        </Flex>
                        <Input
                            type={"text"}
                            title={"Name"}
                            placeholder={"London System"}
                            required={true}
                            info={"Maximum 30 characters please!"}
                            id={"name"}
                            name={"name"}
                            value={name}
                            onChange={onChange}
                        />
                        <Select
                            title={"Type"}
                            required={true}
                            info={"Select game type!"}
                            id={"type"}
                            name={"type"}
                            value={type}
                            onChange={onChange}
                        >
                            {GAME_TYPES.map((game) => (
                                <option key={game.type} value={game.type}>{game.type}</option>
                            ))}
                        </Select>
                        <Input
                            type={"text"}
                            title={"PNG"}
                            placeholder={"1. d4 d5 2. Nf3 Nf6 3. Bf4"}
                            required={true}
                            info={"Your awesome png please!"}
                            id={"png"}
                            name={"png"}
                            value={game}
                            onChange={onChange}
                        />
                        <Button
                            type={"submit"}
                        >
                            Okay, add it!<span style={{ paddingLeft: "4px" }}>🪴</span>
                        </Button>
                    </StyledModalForm>
                </StyledModal>
            </Overlay>
        </React.Fragment>
    )
};

export { GameForm };