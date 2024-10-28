import * as React from 'react';
import { Link } from 'gatsby';
// define component
const AboutPage = () => {
    return (
        <main>
            <h1>About Me!!</h1>
            <Link to="/">Back to Home</Link>
            <p>Heyyy I'm just a girlypop and I'm making a website</p>

        </main>
    )
}


// export Head component to apply metadata
export const Head = () => <title>About Me</title>
// export component
export default AboutPage;