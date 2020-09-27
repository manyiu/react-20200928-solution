import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  removeItem,
  moveItem,
  editItem,
  MoveDirection,
} from "../store/shoppingList";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) auto auto auto;
  background-color: hsla(0, 100%, 100%, 0.9);
  font-size: inherit;
`;

const Input = styled.input`
  background-color: hsla(0, 100%, 100%, 0.9);
  border: none;
  font-size: inherit;
`;

const Button = styled.button`
  background-color: hsla(0, 100%, 100%, 0.9);
  border: none;
  cursor: pointer;
  font-size: inherit;
`;

const Name = styled(Input)``;
const Quantity = styled(Input)``;
const Price = styled(Input)``;
const Delete = styled(Button)``;
const Move = styled(Button)``;

const Item = ({ id }) => {
  const { name, quantity, price } = useSelector(
    (state) => state.shoppingList.items[id]
  );
  const dispatch = useDispatch();

  return (
    <Container>
      <Name
        placeholder={"Item name"}
        value={name}
        onChange={(event) =>
          dispatch(editItem({ id, field: "name", value: event.target.value }))
        }
      />
      <Quantity
        type="number"
        min={0}
        step={1}
        placeholder={"Quantity"}
        value={quantity}
        onChange={(event) =>
          dispatch(
            editItem({
              id,
              field: "quantity",
              value: event.target.value,
            })
          )
        }
      />
      <Price
        type="number"
        min={0}
        step={1}
        placeholder={"Price"}
        value={price}
        onChange={(event) =>
          dispatch(
            editItem({
              id,
              field: "price",
              value: event.target.value,
            })
          )
        }
      />
      <Move
        onClick={() => dispatch(moveItem({ id, direction: MoveDirection.Up }))}
      >
        ⬆️
      </Move>
      <Move
        onClick={() =>
          dispatch(moveItem({ id, direction: MoveDirection.Down }))
        }
      >
        ⬇️
      </Move>
      <Delete onClick={() => dispatch(removeItem(id))}>❌</Delete>
    </Container>
  );
};

export default Item;
