import react from 'react'
import './header.css'

import Nav from '../../../components/todo-page-comp/header-comp/nav-comp/nav.jsx'
import Logo from '../../../components/todo-page-comp/header-comp/logo-comp/logo.jsx'
import Search from '../../../components/todo-page-comp/header-comp/search-comp/search.jsx'
import Profile from '../../../components/todo-page-comp/header-comp/profile-comp/profile.jsx'

function Header(){

    return(
        <div className='header'>
            <Nav />
            <Logo />
            <Search />
            <Profile />
        </div>
    )
}

export default Header