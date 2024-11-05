import * as React from 'react';
import { Link } from 'gatsby';
import * as contentStyles from './index_content.module.css';
import sophia from "../images/sophia.png"

const IndexContent = () => {
    return (
        <div className={contentStyles.container}>
            <div className={contentStyles.leftContainer}>
                <img src={sophia} alt="Sophia Hunt" />
            </div>
   
            <div className={contentStyles.rightContainer}>
                <p className={contentStyles.header}>PORTFOLIO</p>
                <p>Sophia Hunt</p>
                <p className={contentStyles.header}>SOFTWARE DEVELOPER AND DESIGNER</p>
            </div>
        </div>
    )
}

export default IndexContent;