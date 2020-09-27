import { configureStore } from "@reduxjs/toolkit";
import shoppingList from "./shoppingList";

const store = configureStore({
  reducer: {
    shoppingList,
  },
});

export default store;
