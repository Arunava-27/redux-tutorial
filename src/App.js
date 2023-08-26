import React from "react";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";

function App() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center bg-slate-700 h-screen">
      <h1 className="text-6xl font-bold font-serif text-center text-green-600">
        Todo App
      </h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
