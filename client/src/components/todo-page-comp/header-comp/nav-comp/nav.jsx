import react, { useState } from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

function Nav(){

    const [navBtnClickedToOpen, setNavBtnClickedToOpen] = useState(false)

    function navBtnClicked(){
        setNavBtnClickedToOpen((prev) => !prev)
    }

    return (
        
        <div className='nav'>

            <div className='nav-btn' onClick={navBtnClicked}>
                <div className={`nav-btn_top-line ${navBtnClickedToOpen && 'nav-btn_top-line_animation'}`}></div>
                <div className={`nav-btn_bottom-line ${navBtnClickedToOpen && 'nav-btn_bottom-line_animation'}`}></div>
            </div>

            <div className={`nav-options ${navBtnClickedToOpen && 'nav-options_visible'}`}>
                <ul>
                    <li><button>Today</button></li>
                    <li><button>Tommorow</button></li>
                </ul>
            </div>

        </div>
    )
}

export default Nav