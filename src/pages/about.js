import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import AboutContent from '../components/about_content';

// define component
const AboutPage = () => {
    return (
        <AboutContent pageTitle = "About Page"/>
    )
}


// export Head component to apply metadata
export const Head = () => <title>About Me</title>
// export component
export default AboutPage;