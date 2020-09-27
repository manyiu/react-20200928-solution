import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  background-color: hsla(0, 100%, 100%, 0.9);
`;

const Total = () => {
  const total = useSelector((state) => {
    const {
      shoppingList: { sort: list, items },
    } = state;

    return list.reduce(
      (accumulator, id) => accumulator + items[id].price * items[id].quantity,
      0
    );
  });

  if (total > 0) {
    return <Container>Total: ${total}</Container>;
  } else {
    return null;
  }
};

export default Total;
