import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <form
      className="space-x-3 mt-12 w-3/12 flex justify-between"
      onSubmit={addTodoHandler}
    >
      <input
        className=" flex-1 bg-gray-800 border rounded border-gray-700 focus:border-indigo-500 focus:right-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
