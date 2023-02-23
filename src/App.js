// I referred to Instructor Calhoun's movie-react repository on GitHub with help constructing some of the elements of this project. 

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  
  
  return (
    <div className="App container border border-dark col-sm-10 mt-4">
      <div className="row my-4 border border-dark">
        <Form />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
