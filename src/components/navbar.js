import * as React from 'react';
import { useState } from 'react';
import { Link } from 'gatsby';
import * as navbarStyles from './navbar.module.css';
import logo from '../images/logo.png';
import hamburger from "../icons/hamburger.png";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    }

    return (
            <nav className={navbarStyles.navbar}>
                <div className={navbarStyles.container}>
                    <div className={navbarStyles.logo}>
                        <img src={logo} />
                    </div>
                    <div className={navbarStyles.menuIcon} onClick={handleShowNavbar}>
                        <img src={hamburger} />
                    </div>
                    <div className={navbarStyles.navElements}>
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