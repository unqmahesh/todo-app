import { useContext, useEffect, useState } from 'react'
import {Navigate} from 'react-router-dom'
import './body.css'

import TodoInput from '../../../components/todo-page-comp/body-comp/todo-input-comp/todo-input.jsx'
import TodoCard from '../../../components/todo-page-comp/body-comp/todo-card-comp/todo-card.jsx'

import { getAllTodo } from '../../../backend-api/todo.js'
import {AuthenticatedContext} from '../../../context-manager/authenticated-context.jsx'
import { TodoListContext } from '../../../context-manager/todo-list-context.jsx'

function Body(){

    const {todoList, setTodoList} = useContext(TodoListContext)
    const {authenticated} = useContext(AuthenticatedContext)

    useEffect(() => {
        async function getalltodo(){
            const response = await getAllTodo()
            if(response.success){
                setTodoList((prev) => {
                    const uniqueTodoList = response.data.filter((newTodo) => 
                     !prev.some((prevTodo) => newTodo.todoId !== prevTodo.todoId))
                    return [...prev, ...uniqueTodoList]})
                console.log(todoList)
            }else{
                console.log(response.data)
            }
        }
        getalltodo()
    }, [])

    return (
        !authenticated ?
        <Navigate to='/authenticate' /> :
        <div className='body'>
            <TodoInput />
            {todoList.length !== 0 && todoList.map((todoItem) =>
             <TodoCard key={todoItem.todoId} id={todoItem.todoId} content={todoItem.todoContent} dueDate={todoItem.todoDueDate}
             label={todoItem.todoLabel}/>)
            }
        </div>
    )
}

export default Body