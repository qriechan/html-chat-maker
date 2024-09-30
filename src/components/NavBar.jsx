import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown';

function NavBar({ items }) {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (e) => {
            if (dropdown && ref.current && !ref.current.contains(e.target)) {
            setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        setDropdown(true);
    };
    const onMouseLeave = () => {
        setDropdown(false);
    };
    const closeDropdown = () => {
        dropdown && setDropdown(false);
    };

    return (
    <li ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={closeDropdown}>
        {items.submenu ? (
        <>
            <a role="button" aria-haspopup="navmenu" className='dropdown-container'
                aria-expanded={dropdown ? "true" : "false"}
                onClick={() => setDropdown((prev) => !prev)}>
                {items.title}{' '}
            </a>
            <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
        ) : (
            <NavLink to={items.url}>{items.title}</NavLink>
        )}
    </li>
    )
}

export default NavBar