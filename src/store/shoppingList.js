import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const MoveDirection = {
  Up: "UP",
  Down: "DOWN",
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: {
    sort: [],
    items: {},
  },
  reducers: {
    addItem: (state) => {
      const id = uuidv4();
      state.sort.push(id);
      state.items[id] = {
        name: "New Item",
        quantity: 0,
        price: 0,
      };
    },
    removeItem: (state, action) => {
      delete state.items[action.payload];
      state.sort.splice(state.sort.indexOf(action.payload), 1);
    },
    moveItem: (state, action) => {
      const { id, direction } = action.payload;

      const index = state.sort.indexOf(id);

      if (direction === MoveDirection.Up) {
        if (index > 0) {
          [state.sort[index], state.sort[index - 1]] = [
            state.sort[index - 1],
            state.sort[index],
          ];
        }
      } else {
        if (index < state.sort.length - 1) {
          [state.sort[index], state.sort[index + 1]] = [
            state.sort[index + 1],
            state.sort[index],
          ];
        }
      }
    },
    editItem: (state, action) => {
      const { id, field, value } = action.payload;
      if (field === "name") {
        state.items[id][field] = value;
      } else {
        if (value > 0) {
          state.items[id][field] = parseInt(value);
        } else {
          state.items[id][field] = 0;
        }
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  moveItem,
  editItem,
} = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
