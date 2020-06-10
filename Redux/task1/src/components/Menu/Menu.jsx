import React from "react";
import {Link} from "react-router-dom";
import '../../style.css';

function Menu(props) {
const {token, logOut, downloadCredits} = props;
return (
    <header >
        <nav className="menu">
            <Link className="menu-points" to="/register" > Registration </Link>
            <Link className="menu-points" to="/login"> Login </Link>
            <Link className="menu-points" to="/logout" onClick={()=>{logOut(token)}}> Logout </Link>
            <Link className="menu-points" to="/credits" onClick={()=>{downloadCredits()}} > Credits </Link>
        </nav>
    </header>
)
}
export default Menu;