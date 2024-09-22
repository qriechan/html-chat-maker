import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import navItems from './NavItems';
import NavBar from './NavBar';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <header>
        <nav>
            <Link to="/" key='home'><h1>HTML Chat Maker</h1></Link>
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
                {navItems.map((navmenu, index) => {
                    return <NavBar items={navmenu} key={index} />;
                })}
            </ul>
        </nav>
    </header>
    )
}

export default Nav