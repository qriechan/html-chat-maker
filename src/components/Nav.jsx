import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Nav() {
  return (
    <header>
        <Link to="/"><h1>HTML Chat Maker</h1></Link>
        <nav>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/workskin">Workskin</NavLink>
        </nav>
    </header>
  )
}

export default Nav