import * as React from 'react';
import { Link } from 'gatsby';
import Navbar from './navbar';
import * as contentStyles from './about_content.module.css';
import mainImage from "../images/about_main.png";
import paper from '../images/paper.png';

const AboutContent = ({ pageTitle }) => {
    return (
        <div className={contentStyles.main}>
            <Navbar />
            <div className={contentStyles.container}>
                <div className={contentStyles.leftContainer}>
                    <img src={paper} />
                </div>
                <div className={contentStyles.rightContainer}>
                    <img src={mainImage}/>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;