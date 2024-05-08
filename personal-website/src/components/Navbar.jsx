import { NavLink } from "react-router-dom"

const Navbar = () => {


    return (
        <header>
             <nav>
            <NavLink to="/" className="Start">
                Home
            </NavLink>
            <NavLink to="/about-me" className="About">
                About 
            </NavLink>
            <NavLink to="/about-me" className="Projects">
                Projects 
            </NavLink>
            <NavLink to="/about-me" className="Experience">
                Experience 
            </NavLink>
            </nav>
        </header>
       
    )



}