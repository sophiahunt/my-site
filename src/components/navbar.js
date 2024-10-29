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
                <ul>
                    <li>
                        <Link to ='../about'>About</Link>
                    </li>
                    <li>
                        <Link to='../portfolio'>Portfolio</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;