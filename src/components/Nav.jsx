import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Nav() {
  return (
    <header>
        <Link to="/"><h1>HTML Chat Maker</h1></Link>
        <nav>
            <NavLink to="/">About</NavLink>
            <NavLink to="/hsr">Honkai Star Rail</NavLink>
            <NavLink to="/ios">iOS</NavLink>
            <NavLink to="/workskin">Workskins</NavLink>
        </nav>
    </header>
  )
}

export default Nav