import * as React from 'react';
import Navbar from './navbar';
import * as contentStyles from './about_content.module.css';
import * as layoutStyles from './layout.module.css';
import aboutMeTrio from '../images/about_me_trio.png';
import aboutText from '../images/about_text.png';
import * as pageArtStyles from './page_art.module.css';

const AboutContent = () => {
    return (
        <div className={contentStyles.main}>
            <Navbar />
            <div className={pageArtStyles.row}>
                <img
                    className={pageArtStyles.photo}
                    src={aboutMeTrio}
                    alt="Three photos of Sophia's work and creative projects"
                />
                <h1 className={pageArtStyles.title}>
                    <img src={aboutText} alt="About me" />
                </h1>
            </div>
            <footer className={layoutStyles.footer}>© Sophia Hunt 2026</footer>
        </div>
    )
}

export default AboutContent;
