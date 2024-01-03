import logoimg from '../../../../../public/images/logo.svg'
import './logo.css'

function Logo(){

    return (
        <div className='logo'>
            <img src={logoimg} />
        </div>
    )
}

export default Logo