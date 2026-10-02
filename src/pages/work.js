import * as React from 'react';
import Layout from '../components/layout';
import workText from '../images/work_text.png';
import * as pageArtStyles from '../components/page_art.module.css';

const WorkPage = () => (
  <Layout pageTitle="Work">
    <div className={pageArtStyles.titleOnlyRow}>
      <h1 className={pageArtStyles.title}>
        <img src={workText} alt="Work" />
      </h1>
    </div>
  </Layout>
);

export const Head = () => <title>Work</title>;

export default WorkPage;
