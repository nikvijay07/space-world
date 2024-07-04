import { NavLink } from "react-router-dom"
import './Navbar.css'
import { useRocket } from "../hooks/useRocket"

const Navbar = () => {

    const { rocketPosition, setRocketPosition } = useRocket();


    return (
        <nav id="header">
            <NavLink onClick={() => setRocketPosition([0, 0, 45])} to="/" className="Start" id="link">
                Home
            </NavLink>
            <NavLink onClick={() => setRocketPosition([0, 0, 8])} to="/about-me" className="About" id="link">
                About 
            </NavLink>
            <NavLink onClick={() => setRocketPosition([0, 0, -17])} to="/projects" className="Projects" id="link">
                Projects 
            </NavLink>
            {/* <NavLink to="/experience" className="Experience" id="link">
                Experience 
            </NavLink> */}
        </nav>       
    )



}

export default Navbar;