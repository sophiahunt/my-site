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
      <div className = {layoutStyles.footer}>
        <p>&copy; Sophia Hunt 2024. Site created with React and Gatsby.</p>
      </div>
    </div>
  )
}

export default Layout;