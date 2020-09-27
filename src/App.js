import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import "./App.css";
import Add from "./components/add";
import Item from "./components/item";
import Total from "./components/total";

const Container = styled.div`
  display: grid;
  margin: auto;
  font-size: 24px;
`;

function App() {
  const list = useSelector((state) => state.shoppingList.sort);

  const renderItems = () => list.map((id) => <Item key={id} id={id}></Item>);

  return (
    <>
      <Container>
        {renderItems()}
        <Total />
      </Container>
      <Add />
    </>
  );
}

export default App;
