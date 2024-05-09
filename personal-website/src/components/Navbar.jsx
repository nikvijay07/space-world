import { NavLink } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {


    return (
        <nav id="header">
            <NavLink to="/" className="Start" id="link">
                Home
            </NavLink>
            <NavLink to="/about-me" className="About" id="link">
                About 
            </NavLink>
            <NavLink to="/projects" className="Projects" id="link">
                Projects 
            </NavLink>
            <NavLink to="/experience" className="Experience" id="link">
                Experience 
            </NavLink>
        </nav>       
    )



}

export default Navbar;