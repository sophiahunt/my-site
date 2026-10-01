import * as React from 'react';
import { Link } from 'gatsby';
import * as contentStyles from './index_content.module.css';
import sophia from "../images/sophia_main.png";
import landingLogo from '../images/landing_logo.png';

const IndexContent = () => {
    return (
        <div className={contentStyles.container}>
            <div className={contentStyles.leftContainer}>
                <img src={sophia} alt="Sophia Hunt" />
            </div>
    
            <div className={contentStyles.rightContainer}>
                <img src={landingLogo} />
                <p>technology professional in software development & ui/ux design</p>
            </div>
        </div>
    )
}

export default IndexContent;
