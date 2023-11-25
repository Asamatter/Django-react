import React from "react";
import "./styles/App.css";
import TodoListForm from "./components/Todo/TodoListForm";


function App() {
  return (
    <>
      <div className="relative">
        <h1 className="text-gray-700 text-2xl font-bold mb-9 ">アップ名</h1>

        <TodoListForm />


      </div>
    </>
  );
}

export default App;
