import '../css/header.css'
import {NavLink} from 'react-router-dom'
function Header()
{
    return (
        <div className="header"> 
            <div className='home_element'>
                <NavLink className={({ isActive }) => `ubuntu-regular navlink ${isActive ? 'active' : 'inactive'}`} to={'/'} >Task Manager</NavLink>
            </div>
        </div>
    )
}
export default Header;