import { useState, useContext } from 'react'
import './todo-input.css'

import {addTodo} from '../../../../backend-api/todo.js'
import {TodoListContext} from '../../../../context-manager/todo-list-context.jsx'

function TodoInput(){

    const [content, setContent] = useState('')
    const [label, setLabel] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [priority, setPriority] = useState('')

    const {todoList, setTodoList} = useContext(TodoListContext)

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value
        switch(name){
            case "content":
                setContent(value)
                break;
            case "label":
                setLabel(value)
                break;
            case "dueDate":
                const formattedDate = new Date(value).toISOString().slice(0, 10);
                setDueDate(formattedDate);
                break;
            case "priority":
                setPriority(value)
                break;
        }
    }

    async function handleAddTodo(){
        const data = {todoContent : content.length != 0 ? content : null, 
                            todoLabel : label.length!=0 ? label : null,
                            todoDueDate : dueDate.length!=0 ? dueDate : null,
                            todoPriority : priority.length!=0 ? priority : "low"}
        const response = await addTodo(data)
        if (response.success){
            setContent('')
            setDueDate('')
            setLabel('')
            setPriority('')
            setTodoList((prev) => [...prev, response.data])
            console.log(todoList)
        }else{
            console.log("Unable to add todo")
        }
    }

    return(
        <div className='todo-input'>
            <div className='todo-content'>
            <input placeholder='Enter your todo...' name='content' value={content} onChange={handleChange}/>
            <button className='todo-input_add-btn' onClick={handleAddTodo} >+</button>
            </div>
            <div className='optional-options'>
            <input className='todo-label' name='label' placeholder='label' value={label} onChange={handleChange}/>
            <select name='priority' value={priority} onChange={handleChange} className='priority'>
                <option value='' disabled>priority</option>
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
            </select>
            <input className='todo-dueDate' name='dueDate' placeholder='Due Date' type='date' value={dueDate}  onChange={handleChange}/>
            </div>
        </div>
    )
}

export default TodoInput