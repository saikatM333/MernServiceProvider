import {NavLink} from "react-router-dom"
import "./Navbar.css"
import {useAuth} from "../store/auth"
export const Navbar  = () =>{
    const {isloggedin} = useAuth()
    return <>
    <header>
    <div className="Cointainer-nav">
        <div className="logo-brand">
            <NavLink to="/" >Saikat Mern Project </NavLink>
        </div>

        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/service">Service</NavLink></li>
                {
                    isloggedin ?(
                <li><NavLink to="/logout">Logout</NavLink></li>):(<>
                <li><NavLink to="/register">register</NavLink></li>
                <li className="no-margin"><NavLink to="/login">Login</NavLink></li>
                </>)
}
            </ul>
        </nav>
    </div>
    </header>

    
    
    </>
}