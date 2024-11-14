import * as React from 'react';
import { useState } from 'react';
import { Link } from 'gatsby';
import './navbar.css';
import logo from '../images/logo.png';
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
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="../about">About</Link>
                            </li>
                            <li>
                                <Link to="../work">Work</Link>
                            </li>
                            <li>
                            <Link to="../contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;