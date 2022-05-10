import { createSlice } from "@reduxjs/toolkit";

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: [],
  reducers: {
    loadShoppingList: (shoppingList, action) => [...action.payload],
    deleteItem: (shoppingList, action) =>
      shoppingList.filter((item) => item.id !== action.payload),
  },
});

export const {
  loadShoppingList: loadShoppingListActionCreator,
  deleteItem: deleteItemActionCreator,
} = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
