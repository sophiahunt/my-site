import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

// Step 2: Define your component
const IndexPage = () => {
  return (
      <Layout pageTitle = "Home Page">
        <p>I'm making this by following the gatsby tutorial!</p>
      </Layout>
  )
}

// head component for metadata
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage;