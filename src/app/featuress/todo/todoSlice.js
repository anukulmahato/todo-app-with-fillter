import { createSlice } from "@reduxjs/toolkit";
import { todos } from "../../../data/todos";

//create todo slice
export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    error: null,
    message: null,
    loader: false,
    filter: "All",
  },
  reducers: {
    loadAllTodos: (state) => {
      state.todos = todos;
    },
    createNewTodo: (state, action) => {
      state.todos.push({
        ...action.payload,
        id: Math.floor(Math.random() * 1000000),
      });
    },
    delateTodo: (state, action) => {
      state.todos = state.todos.filter((data) => data.id != action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

//export action
export const { loadAllTodos, createNewTodo, delateTodo, setFilter } =
  todoSlice.actions;

//export todo reducer
export default todoSlice.reducer;
