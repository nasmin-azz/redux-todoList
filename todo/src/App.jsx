import { useState } from "react";
import "./App.css";
import TodoAdderForm from "./components/TodoAdderForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <TodoAdderForm />
      <TodoList/>
    </>
  );
}

export default App;
