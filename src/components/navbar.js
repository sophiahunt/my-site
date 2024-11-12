import * as React from 'react';
import { Link } from 'gatsby';
import * as navbarStyles from './navbar.module.css';

const Navbar = () => {
    return (
            <nav className={navbarStyles.navbar}>
                <div>
                    <Link to='/' className={navbarStyles.home}>home</Link>
                </div>
                <div>
                    <ul className={navbarStyles.list}>
                        <li>
                            <Link to ='../about' className={navbarStyles.links}>about</Link>
                        </li>
                        <li>
                            <Link to='../work'  className={navbarStyles.links}>work</Link>
                        </li>
                        <li>
                            <Link to='../contact'  className={navbarStyles.links}>contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;