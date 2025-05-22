import React from 'react'
import { useState } from 'react'

const TodoList = ({setTodoList, todoList}) => {
    const handleCheck = (val, id) =>{
        const newArray = [...todoList]
        const idx = newArray.findIndex(item=>item?.id === id)
        newArray[idx].completed = val;
        setTodoList(newArray) 
    }

    const handleDelete = (id) => {  
        const newArray = todoList.filter(item => item.id !== id);
        setTodoList(newArray)
    }
    return (
        <div>
            <h4>List of your Todos</h4>
            <div className='todo'>
            {
                todoList.map(item => (
                    <li className='todoItem' key = {item.id}>
                        <input checked={item.completed} type ="checkbox" onChange={(e)=>handleCheck(e.target.checked, item?.id)}></input>
                        {item?.completed ? <s> {item?.title} </s>: <div> {item?.title} </div>} 
                        <button style={{marginLeft:"30px"}} onClick={()=>handleDelete(item?.id)}>Delete</button>
                    </li>
                ))
            }
            </div>

        </div>
    )
}

export default TodoList