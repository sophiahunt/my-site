import * as React from 'react';
import { Link } from 'gatsby';
import * as navbarStyles from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={navbarStyles.pixelCorners}>
            <nav className={navbarStyles.navbar}>
                <div>
                    <Link to='/' className={navbarStyles.logo}>home</Link>
                </div>
                <div>
                    <ul className={navbarStyles.list}>
                        <li>
                            <Link to ='../about' className={navbarStyles.links}>about</Link>
                        </li>
                        <li>
                            <Link to='../portfolio'  className={navbarStyles.links}>portfolio</Link>
                        </li>
                        <li>
                            <Link to='../contact'  className={navbarStyles.links}>contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;