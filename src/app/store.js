import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./featuress/todo/todoSlice";

//create redux store
const store = configureStore({
  reducer: {
    kajkam: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

//export default
export default store;
