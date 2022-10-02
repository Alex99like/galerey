import React from 'react';
import '../styles/footer.scss';
import ImageGithub from '../assets/github-svgrepo-com.svg';

class Footer extends React.Component {
  render() {
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
  }
}

export default Footer;
