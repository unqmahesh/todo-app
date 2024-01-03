import { useContext, useRef, useState } from 'react'
import './todo-card.css'

import editicon from '../../../../../public/images/edit.svg'
import trashicon from '../../../../../public/images/trash.svg'

import {deleteTodo} from '../../../../backend-api/todo.js'
import {TodoListContext} from '../../../../context-manager/todo-list-context.jsx'
 
function TodoCard(props){

    const {setTodoList} = useContext(TodoListContext)
    const [todoDone, setTodoDone] = useState(false)
    const contentRef = useRef(null)

    function handleDoneClick(){
        if(!todoDone){
            contentRef.current.classList.add('todo-card_content_done')
            setTodoDone(true)
        }else{
            contentRef.current.classList.remove('todo-card_content_done')
            setTodoDone(false)
        }
    }


    async function handleDeleteClick(){
        const response = await deleteTodo(props.id)
        if (response.success){
            setTodoList((prev) => prev.filter((todo) => todo.todoId !== props.id))
        }else{
            console.log('Failed to delete todo')
        }
    }


    return (
        <div className='todo-card'>

            <div className='todo-card_top-options'>
                <img src={editicon} />
                <img src={trashicon} onClick={handleDeleteClick}/>
            </div>

            <div className='todo-card_content' ref={contentRef} ><p>{props.content}</p></div>

            <div className='todo-card_bottom-options'>
                {props.label!==null && <div>{props.label}</div>}
                {props.dueDate!==null && <div>{props.dueDate.substring(0, 10)}</div>}
                <div className='todo-card_bottom-options_done' onClick={handleDoneClick}>{todoDone ? "Pending" : "Done"}</div>
            </div>

        </div>
    )
}

export default TodoCard