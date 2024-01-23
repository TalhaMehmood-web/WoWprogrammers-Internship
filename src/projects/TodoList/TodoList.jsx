import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  // const [status, setStatus] = useState("pending");
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      todo: task,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, data]);
    setTask("");
    setTodos((updatedTodos) => {
      localStorage.setItem("todoList", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);

    setTodos(updatedTodos);
    localStorage.setItem("todoList", JSON.stringify(updatedTodos));
  };
  const handleStatus = (i, e) => {
    console.log(i);
    // setStatus(e.target.checked);
    // console.log(status);
  };
  const handleEdit = () => {};
  const data = JSON.parse(localStorage.getItem("todoList"));
  return (
    <div className="flex flex-col justify-center bg-slate-700 rounded-md shadow-xl p-7">
      <p className="text-3xl font-bold">
        Let's Create Coder's Todo List Together
      </p>
      <div className="flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Let's Add New Coder Task"
            className="text-xl my-2 text-slate-500 outline-none px-3 py-1 rounded-md  bg-blue-100 w-[20rem]"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </form>

        <div className={"my-2 flex justify-between w-full items-center"}>
          <div className="flex flex-1 justify-around">
            <p className="text-white font-medium cursor-pointer text-md">ALL</p>
            <p className="text-white font-medium cursor-pointer text-md">
              Pending
            </p>
            <p className="text-white font-medium cursor-pointer text-md">
              Completed
            </p>
          </div>
          <div>
            <button
              className={
                "text-white font-medium bg-red-500 hover:bg-red-500/90 cursor-pointer border-red-600 rounded-md px-2 py-1"
              }
            >
              Clear All
            </button>
          </div>
        </div>

        <table className="min-w-full bg-transparent border border-gray-300">
          <thead>
            <tr>
              <th className="border-b p-2"></th>
              <th className="border-b p-2 text-start">Todo</th>
              <th className="border-b p-2 text-start">Edit</th>
              <th className="border-b p-2 text-start">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((todo, i) => (
              <tr key={i}>
                <td className="border-b p-2 ">
                  <input
                    type="checkbox"
                    // checked={status}
                    className="cursor-pointer"
                    onChange={(e) => handleStatus(i, e)}
                  />
                </td>
                <td className="border-b p-2 text-lg font-medium">
                  {todo.status === true ? (
                    <p>{todo.todo}</p>
                  ) : (
                    <del className="text-green-500">{todo.todo}</del>
                  )}
                </td>
                <td className="border-b p-2">
                  <button
                    className="text-white font-medium bg-blue-500 border-blue-600 rounded-md px-3 py-1"
                    onClick={() => handleEdit()}
                  >
                    Edit
                  </button>
                </td>
                <td className="border-b p-2">
                  <button
                    className="text-white font-medium bg-red-500 hover:bg-red-500/90 cursor-pointer border-red-600 rounded-md px-2 py-1"
                    onClick={() => handleDelete(i)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
