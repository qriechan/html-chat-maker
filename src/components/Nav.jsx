import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <header>
        <nav>
            <Link to="/"><h1>HTML Chat Maker</h1></Link>
            <div className='menu' onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <div className='menu-icon'>
                    <div className='icon-line'></div>
                    <div className='icon-line'></div>
                    <div className='icon-line'></div>
                </div>
            </div>
            <ul className={menuOpen ? 'open' : ''}>
                <li><NavLink to="/">About</NavLink></li>
                <li><NavLink to="/hsr">HSR</NavLink></li>
                <li><NavLink to="/ios">iOS</NavLink></li>
                <li><NavLink to="/workskin">Workskins</NavLink></li>
            </ul>
        </nav>
    </header>
    )
}

export default Nav