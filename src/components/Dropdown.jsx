import React from 'react'
import { NavLink } from 'react-router-dom'

function Dropdown({ submenus, dropdown }) {
    return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
        <li key={index}>
            <NavLink to={submenu.url} style={{backgroundColor: 'transparent'}}>{submenu.title}</NavLink>
        </li>
        ))}
    </ul>
    )
}

export default Dropdown