import React from 'react'
import { NavLink } from 'react-router-dom'
const Header: React.FC = () => {
    return (
        <button className='header-nav'>
            <NavLink to="/">
                HOMEPAGE
            </NavLink>
        </button>
    )
}

export default Header
