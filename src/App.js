
import './App.css';
import TodoList from './Components/TodoList';
import Title from './Components/Title';
import Form from "./Components/Form";
import React, { useState, useEffect } from 'react';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); // Contains all todos
  const [status, setStatus] = useState("all")
  // We need a new 'state' that contains filtered todos based on what is clicked 
  // on the drop down menu.
  const [filteredTodos, setFilteredTodos] = useState([])
  
  useEffect(() => {
    filterHandler();
  }, [todos, status])

  // The filterHandler function needs a state to know, what to do with its logic
  // for this, I have already added the status state.
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
 }
  // Once you have the intial filteredTodos state, a filterHandler is required to
  // to acctually keep it updated based on what users wants.



  return (
    <div className="App">
      
      <Title />
  
      <Form 
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
    
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}      
      />
      

    </div>
  );
}

export default App;
