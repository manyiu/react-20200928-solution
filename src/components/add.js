import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addItem } from "../store/shoppingList";

const Button = styled.button`
  position: absolute;
  right: 3em;
  bottom: 3em;
  font-size: 24px;
`;

const Add = () => {
  const dispatch = useDispatch();

  return <Button onClick={() => dispatch(addItem())}>🞣</Button>;
};

export default Add;
