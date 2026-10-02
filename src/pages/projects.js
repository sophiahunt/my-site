import * as React from 'react';
import Layout from '../components/layout';
import projectsText from '../images/projects_text.png';
import * as pageArtStyles from '../components/page_art.module.css';

const ProjectsPage = () => (
  <Layout pageTitle="Projects">
    <div className={pageArtStyles.titleOnlyRow}>
      <h1 className={pageArtStyles.title}>
        <img src={projectsText} alt="Projects" />
      </h1>
    </div>
  </Layout>
);

export const Head = () => <title>Projects</title>;

export default ProjectsPage;
