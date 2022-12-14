import React from 'react';
import './footer.scss';
import ImageGithub from '../../assets/github-svgrepo-com.svg';

const Footer = () => {
  return (
    <footer>
      <a
        href={'https://github.com/Alex99like'}
        target={'_blank'}
        className={'github'}
        rel="noreferrer"
      >
        <h2>Aleksander Alkeksievich</h2>
        <img src={ImageGithub} />
      </a>
      <a href={'https://rs.school/'} className={'rssSchool'} target={'_blank'} rel="noreferrer">
        RSS SCHOOL
      </a>
    </footer>
  );
};

export default Footer;
