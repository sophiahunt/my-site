import * as React from 'react';
import { Link } from 'gatsby';
import Navbar from './navbar';
import * as contentStyles from './about_content.module.css';

const AboutContent = ({ pageTitle }) => {
    return (
        <div className={contentStyles.container}>
            <Navbar />
            <p>hey guys</p>
        </div>
    )
}

export default AboutContent;