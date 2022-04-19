import { NavLink } from "react-router-dom"

export function Header () {
    return <><h1 className="header__h1">React Routing SPA</h1>
    <div className="header"> 
    <ul className="nav">
    <NavLink to="/"><li>Main</li></NavLink>
    <NavLink to="/contact"><li>Contacts</li></NavLink>
    <NavLink to="/about"><li>About</li></NavLink>
    </ul>
    </div>
    
    </>
} 