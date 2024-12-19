import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewTodo,
  delateTodo,
  setFilter,
} from "../../app/featuress/todo/todoSlice";

const Todo = () => {
  const [input, setInput] = useState({
    name: "",
    status: "Pending",
  });
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch();

  const handleCreateTodo = (e) => {
    e.preventDefault();
    dispatch(createNewTodo(input));
    setInput({
      name: "",
      status: "Pending",
    });
  };

  const handleTodoDelete = (id) => {
    dispatch(delateTodo(id));
  };

  const { todos, filter } = useSelector((state) => state.kajkam);
  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };
  // const filteredTodos = filter ==="All" ? todos.filter((todo) => todo.status === filter)
  // Filter todos based on the current filter
  const filteredTodos =
    filter === "All" ? todos : todos.filter((todo) => todo.status === filter);

  return (
    <div>
      <form onSubmit={handleCreateTodo} className="p-5 shadow-md mb-5">
        <div>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
            placeholder="Todo Name"
          />
        </div>
        <div>
          <select
            name="status"
            id=""
            value={input.status}
            onChange={handleInputChange}
          >
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="p-2 bg-green-500 rounded-md text-white"
          >
            Create
          </button>
        </div>
      </form>

      <div className="flex justify-between align-middle py-3">
        <h2 className="text-3xl font-bold">All Todos</h2>
        <div className="flex align-middle">
          <h2 className="content-center mr-3 font-bold">Filter</h2>
          <select
            onChange={handleFilterChange}
            className="border-sky-500 border p-2"
            name=""
            id=""
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Done">Done</option>
          </select>
        </div>
      </div>
      <hr />
      <ul className="mt-3">
        {filteredTodos.map((item) => {
          return (
            <li
              className="shadow-md p-3 mb-3 flex justify-between"
              key={item.id}
            >
              <div>
                {item.name} <br />
                Status: {item.status}
              </div>
              <button
                onClick={() => handleTodoDelete(item.id)}
                className="p-2 bg-red-500 text-white rounded-md"
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
