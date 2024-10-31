import * as React from 'react';
import { Link } from 'gatsby';
import Navbar from './navbar';
import * as layoutStyles from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <div className ={layoutStyles.container}>
        <div className = {layoutStyles.navContainer}>
          <Navbar />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Layout;