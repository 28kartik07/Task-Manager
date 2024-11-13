import '../css/header.css'
import {NavLink} from 'react-router-dom'
function Header()
{
    return (
        <div className="header"> 
            <div>
                Task Manager
            </div>
            <div className='home_element'>
                <NavLink className={({ isActive }) => `ubuntu-regular navlink ${isActive ? 'active' : 'inactive'}`} to={'/'} >Home</NavLink>
            </div>
        </div>
    )
}
export default Header;