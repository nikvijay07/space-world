import { NavLink } from "react-router-dom"
import './Navbar.css'
import { useRocket } from "../hooks/useRocket"
import STARTING_Z from "../../public/constants";

const Navbar = () => {

    const { rocketPosition, setRocketPosition } = useRocket();


    return (
        <nav id="header">
            <NavLink onClick={() => setRocketPosition([0, 0, STARTING_Z + 7])} to="/" className="Start" id="link">
                Home
            </NavLink>
            <NavLink onClick={() => setRocketPosition([0, 0, STARTING_Z - 26])} to="/about-me" className="About" id="link">
                About Me
            </NavLink>
            <NavLink onClick={() => setRocketPosition([0, 0, STARTING_Z - 55])} to="/projects" className="Projects" id="link">
                Projects 
            </NavLink>
            <NavLink onClick={() => setRocketPosition([0, 0, STARTING_Z - 100])} to="/links" className="ContactLinks" id="link">
                Links 
            </NavLink>
        </nav>       
    )



}

export default Navbar;