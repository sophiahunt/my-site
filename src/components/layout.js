import * as React from 'react';
import Navbar from './navbar';
import * as layoutStyles from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <div className ={layoutStyles.container}>
          <Navbar />
          {children}
          <footer className={layoutStyles.footer}>© Sophia Hunt 2026</footer>
      </div>
    </div>
  )
}

export default Layout;
