import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  location: {
    price: "",
    id: "",
  },
};
const orderSlice = createSlice({
  name: "scanner",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setId } = orderSlice.actions;
export default orderSlice.reducer;
