import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { loadAllTodos } from "./app/featuress/todo/todoSlice";
import Todo from "./components/todo/Todo";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllTodos());
  }, []);
  return (
    <>
      <div className="w-[1000px] mx-auto mt-[100px]">
        <Todo />
      </div>
    </>
  );
}

export default App;
