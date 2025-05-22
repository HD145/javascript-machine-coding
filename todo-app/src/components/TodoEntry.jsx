import React from 'react'
import { useState } from 'react';
import TodoList from './TodoList';

const TodoEntry = () => {

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleAddTodo = () => {
        if(todo === "")return;
        const newArray = [...todoList]
        newArray.push({
            id: todoList.length + 1,
            completed: false,
            title: todo
        })
        setTodo("");
        setTodoList(newArray);
    }

    return (
        <div className='main'>
            <h2>Enter your Todo</h2>
            <div className='inputBox'>
                <input value={todo} type="text" onChange={(e) => setTodo(e.target.value)}></input>
                <button onClick={() => handleAddTodo()}>Add</button>
            </div>
            <TodoList todoList={todoList} setTodoList={setTodoList}/>
        </div>
    )
}

export default TodoEntry