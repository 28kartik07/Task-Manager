import App from "../App";
import Header from "./Header";
import {Outlet} from 'react-router-dom'

function Applayout()
{
    return (
        <div className="mainroot" style={{display: 'flex',flexDirection:'column',alignItems:'center',height:'100vh',width:'100wh'}}>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default Applayout