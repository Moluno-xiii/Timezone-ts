import React from 'react'
import { NavLink } from 'react-router-dom'
const Header: React.FC = () => {
    return (
        <nav>
            <NavLink to="/">
                HOMEPAGE
            </NavLink>
        </nav>
    )
}

export default Header
