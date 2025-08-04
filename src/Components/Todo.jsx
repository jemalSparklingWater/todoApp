import React, { useState } from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
  // Functions/Events go here
  const deleteHandler = () => {
    setTodos(todos.filter(element => element.id != todo.id))
  }
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          
          return  {
            ...item,
            completed: !item.completed
          }
        }
        return item
      }) 
    )
    console.log(todos)

  }
  return(
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed": ""}`}>
        {text}
      </li>
      <button className='delete-btn' onClick={deleteHandler}>Delete</button>
      <button className='complete-btn' onClick={completeHandler}>Complete</button>
      
    </div>
    
  )
}

// Allow this function/component to be used outside of this file
export default Todo;


