import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import IndexContent from '../components/index_content';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle = "Home Page">
        <IndexContent />
      </Layout>
    </div>
  )
}

// head component for metadata
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage;