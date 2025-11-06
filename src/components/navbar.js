import * as React from 'react';
import { useState } from 'react';
import { Link } from 'gatsby';
import './navbar.css';
import logo from '../icons/star.png';
import hamburger from "../icons/hamburger.png";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    }

    return (
            <nav className="navbar">
                <div className="container">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <img src={hamburger} />
                    </div>
                    <div className={`nav-elements ${showNavbar && 'active'}`}>
                        <ul>
                            <li>
                                <Link to="/">home</Link>
                            </li>
                            <li>
                                <Link to="../about">about</Link>
                            </li>
                            <li>
                                <Link to="../work">work</Link>
                            </li>
                            <li>
                            <Link to="../contact">contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;