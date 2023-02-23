// I referred to Instructor Calhoun's movie-react repository on GitHub to help with constructing some of the elements of this project. 

import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  
  const [todoList, setTodoList] = useState([]);
  
  return (
    <div className="App container border border-dark col-sm-10 mt-4">
      <div className="d-flex flex-row m-4 border border-dark">
        <Form todoList={todoList} setTodoList={setTodoList} />
        <TodoList todoList={todoList} setTodoList={setTodoList}/>
      </div>
    </div>
  );
}

export default App;
