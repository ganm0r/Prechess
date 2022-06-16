import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

import { Input } from "./Input";
import { Button } from "./Button";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
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
    min-width: 720px;
    max-width: 500px;
    max-height: 720px;
`;

const StyledModalForm = styled.form`
  display: grid;
  position: relative;
  grid-template-rows: repeat(3, 0.5fr) 3fr 0.5fr;
  margin: 2%;
  margin-top: 0;
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const GameModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        game: "",
    });

    const { name, type, game } = formData;

    const dispatch = useDispatch();

    //const { game, isLoading, isSuccess, isError, message } = useSelector((state) => state.game);

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

    // if(isLoading) {
    //     return (
    //       <Flex
    //         style={{
    //           alignItems: "center",
    //           justifyContent: "center"
    //         }}
    //       >
    //         <HashLoader color={colors.orange} />
    //       </Flex>
    //     )
    //   }

    if(!isOpen) return null;

    return (
        <React.Fragment>
            <Overlay>
                <StyledModal>
                    <StyledModalForm>
                        <Button onClick={onClose} children={"Close"}/>
                        <Input
                            type={"text"}
                            title={"Name"}
                            placeholder={"The Evans Gambit"}
                            required={true}
                            info={"Maximum 30 characters"}
                            id={"name"}
                            name={"name"}
                            value={name}
                            onChange={onChange}
                        />
                        <Input
                            type={"text"}
                            title={"Type"}
                            placeholder={"The Evans Gambit"}
                            required={true}
                            info={"Maximum 30 characters"}
                            id={"name"}
                            name={"name"}
                            value={name}
                            onChange={onChange}
                        />
                        <Input
                            type={"password"}
                            title={"PNG"}
                            placeholder={"IAmWorldChamp@2022"}
                            required={true}
                            info={"Your strong password please!"}
                            id={"password"}
                            name={"password"}
                            value={game}
                            onChange={onChange}
                        />
                        <Button
                            type={"submit"}
                        >
                            Test<span style={{ paddingLeft: "4px" }}>🪴</span>
                        </Button>
                    </StyledModalForm>
                </StyledModal>
            </Overlay>
        </React.Fragment>
    )
};

export { GameModal };