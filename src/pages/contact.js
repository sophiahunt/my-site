import * as React from 'react';
import Layout from '../components/layout';
import contactPhoto from '../images/contact_photo.png';
import contactText from '../images/contact_text.png';
import * as pageArtStyles from '../components/page_art.module.css';

const ContactPage = () => (
  <Layout pageTitle="Contact">
    <div className={pageArtStyles.row}>
      <img
        className={pageArtStyles.photo}
        src={contactPhoto}
        alt="Black-and-white photo of Sophia Hunt on a video call"
      />
      <h1 className={pageArtStyles.title}>
        <img src={contactText} alt="Contact" />
      </h1>
    </div>
  </Layout>
);

export const Head = () => <title>Contact</title>;

export default ContactPage;
