import * as React from 'react';
import { Link } from 'gatsby';
import * as navbarStyles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={navbarStyles.navbar}>
            <div>
                <Link to='/' className={navbarStyles.logo}>Sophia Hunt</Link>
            </div>
            <div>
                <ul className={navbarStyles.list}>
                    <li>
                        <Link to ='../about' className={navbarStyles.links}>about</Link>
                    </li>
                    <li>
                        <Link to='../portfolio'  className={navbarStyles.links}>portfolio</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;