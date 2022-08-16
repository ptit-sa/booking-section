import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import orderReducer from "../features/booking/orderSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    order: orderReducer,
  },
});
