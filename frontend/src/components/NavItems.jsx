import { NavLink } from "react-router-dom"

/* eslint-disable react/prop-types */
function NavItems({isMenuOpen}) {
    
    return (
        <ul className={`${isMenuOpen ? "flex" : "hidden" } md:flex md:w-2/3 justify-between w-full pr-10`}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/courses">Courses</NavLink></li>
            <li><NavLink to="/articles">Articles</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
        </ul>
    )
}

export default NavItems
