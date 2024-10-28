import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

// define component
const AboutPage = () => {
    return (
        <Layout pageTitle = "About Me">
            <p>I'm just a girlypop making herself a website</p>
        </Layout>
    )
}


// export Head component to apply metadata
export const Head = () => <title>About Me</title>
// export component
export default AboutPage;