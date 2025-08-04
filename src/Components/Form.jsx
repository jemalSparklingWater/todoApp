import React, { useState } from 'react';


const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    // Functions to handle tasks
    const inputTextHandler = (event) => {
        setInputText(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        // const str = "ada"
        // if (str.trim()) { console.log("Works")}

        if (inputText.trim()) {
                // This takes the current inputField and adds it to our todos array
            setTodos([
                ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
            ])
            // Once the todo has been added, we reset inputText to an empty string
            setInputText("")
            }
             
        
    }

    const statusHandler = (event) => {
        event.preventDefault();
        setStatus(event.target.value)
    }

 
    return (
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-input"
            />
            <button className="todo-button" onClick={submitHandler}>
                +
            </button> 
            <div className="select">
                <select onChange={statusHandler} name="todos" className='filter-todo'>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
} 

export default Form;



// Example of spread operator usage:
// Takes everything from todos and then we add a new value in updatedTodos.

// const todos = ['do pushups', 'eat donuts', 'sleep']

// const updatedTodos = [
// 	...todos,
//   'wakeup and stay woke'
// ]

// console.log(updatedTodos)