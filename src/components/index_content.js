import * as React from 'react';
import { Link } from 'gatsby';
import * as contentStyles from './index_content.module.css';
import sophia from "../images/sophia_main.png";
import landingLogo from '../images/landing_logo.png';
import landingTextImage from '../images/landing_text_image.png';

const IndexContent = () => {
    return (
        <div className={contentStyles.homeContainer}>
            <div className={contentStyles.container}>
                <div className={contentStyles.leftContainer}>
                    <img src={sophia} alt="Sophia Hunt" />
                </div>
        
                <div className={contentStyles.rightContainer}>
                    <img src={landingLogo} />
                    <p>technology professional in software development & ui/ux design</p>
                </div>
            </div>

            <img
                className={contentStyles.landingTextImage}
                src={landingTextImage}
                alt="I'm passionate about bringing people and ideas together to create thoughtful digital solutions and business growth."
            />
        </div>
    )
}

export default IndexContent;
