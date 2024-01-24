import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [currentView, setCurrentView] = useState("all");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

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
  // for deleting a todo item
  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);

    setTodos(updatedTodos);
    localStorage.setItem("todoList", JSON.stringify(updatedTodos));
  };
  /// for updating the completion status
  const handleStatus = (index, e) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: e.target.checked } : todo
    );

    setTodos(updatedTodos);
    localStorage.setItem("todoList", JSON.stringify(updatedTodos));
  };
  const handleEdit = (index) => {
    // const editedTodo = todos.find((_, i) => i === index);
    // setTask(editedTodo.todo, () => {
    //   const updatedTodos = todos.map((item, i) =>
    //     i === index ? { ...item, todo: task } : item
    //   );
    //   const filteredTodos = updatedTodos.filter((_, i) => i !== index);
    //   console.log(filteredTodos);
    //   setTodos(filteredTodos);
    //   localStorage.setItem("todoList", JSON.stringify(filteredTodos));
    // });
  };
  // clearing the entire todos array locally and in local storage ;
  const clearAll = () => {
    localStorage.removeItem("todoList");
    setTodos([]);
  };
  // display all todos
  const displayAll = () => {
    setCurrentView("all");
  };

  const displayPendingTodos = () => {
    setCurrentView("pending");
  };

  const displayCompletedTodos = () => {
    setCurrentView("completed");
  };
  const getFilteredTodos = [];
  const data = JSON.parse(localStorage.getItem("todoList"));
  return (
    <div className="flex flex-col justify-center bg-white text-slate-800 rounded-md shadow-xl p-7">
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
            <p
              onClick={displayAll}
              className=" font-medium cursor-pointer text-md"
            >
              ALL
            </p>
            <p
              onClick={displayPendingTodos}
              className=" font-medium cursor-pointer text-md"
            >
              Pending
            </p>
            <p
              onClick={displayCompletedTodos}
              className=" font-medium cursor-pointer text-md"
            >
              Completed
            </p>
          </div>
          <div>
            <button
              onClick={clearAll}
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
              <th className="border-b p-2 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {getFilteredTodos?.map((todo, i) => (
              <tr
                className={` ${
                  todo.completed ? "bg-[#dcffe4]" : "bg-[#ffedee]"
                } mb-[20px]`}
                key={i}
              >
                <td className={`border-b  p-2`}>
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    onChange={(e) => handleStatus(i, e)}
                  />
                </td>
                <td className="border-b p-2  text-lg font-medium">
                  {todo.completed === true ? (
                    <del className=" text-[1.2rem] font-medium text-black ">
                      {todo.todo}
                    </del>
                  ) : (
                    <p>{todo.todo}</p>
                  )}
                </td>
                <td className="border-b p-2">
                  <button
                    className="text-white font-medium bg-blue-500 border-blue-600 rounded-md px-3 py-1"
                    onClick={() => handleEdit(i)}
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
                <td className="border-b text-center p-2">
                  {todo.completed ? (
                    <i className="fas text-green-600 fa-check"></i>
                  ) : (
                    <i className="fas text-red-600 fa-times"></i>
                  )}
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
