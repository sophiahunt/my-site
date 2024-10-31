import * as React from 'react';
import { Link } from 'gatsby';
import * as contentStyles from './index_content.module.css';
import logo from '../images/picklelogo.png';

const IndexContent = () => {
    return (
        <div>
            <img src={logo} alt="my cat!" className={contentStyles.catLogo}/>
                <p className={contentStyles.heading}>Hey there</p>
            <div className={contentStyles.bodyText}>
                <p> Welcome to my corner of the Internet. Make yourself at home!</p>
                <p>My name is Sophia Hunt! I'm a software developer and freelance artist. Get to know me
                    and my work by checking out the links at the top of the page.
                </p>
            </div>
            <div className={contentStyles.footer}>
                Copyright Sophia Hunt 2024. Website created by me using React and Gatsby.
            </div>
        </div>
    )
}

export default IndexContent;