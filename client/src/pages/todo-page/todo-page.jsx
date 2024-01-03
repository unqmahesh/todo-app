import react from 'react'
import './todo-page.css'

import Header from '../../containers/todo-page-cont/header-cont/header.jsx'
import Body from '../../containers/todo-page-cont/body-cont/body.jsx'


function TodoPage(){

    return (
        <div className='TodoPage'>
            <Header />
            <Body />
        </div>
    )
}

export default TodoPage