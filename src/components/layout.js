import * as React from 'react';
import { Link } from 'gatsby';
import Navbar from './navbar';

// importing individual css modules seperately
/* import {
    container,
    heading
  } from './layout.module.css' */

// import entire css module and then referencing the individual classNames
import * as layoutStyles from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <div className ={layoutStyles.container}>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default Layout;