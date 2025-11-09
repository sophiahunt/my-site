import * as React from 'react';
import { Link } from 'gatsby';
import Navbar from './navbar';
import * as layoutStyles from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <div className ={layoutStyles.container}>ß
          <Navbar />
        </div>
        {children}
    </div>
  )
}

export default Layout;