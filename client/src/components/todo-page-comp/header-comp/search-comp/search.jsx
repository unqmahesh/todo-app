import react from 'react'
import './search.css'

import searchicn from '../../../../../public/images/search-icon.svg'

function Search(){

    return (
        <div className='search'>
            <input placeholder='Search...' />
            <button><img src={searchicn} /></button>
        </div>
    )
}

export default Search