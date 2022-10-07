import React from 'react';
import './about.scss';
import ImageProfile from '../../assets/profile.jpg';
import Html from '../../assets/html-svgrepo-com.svg';
import Css from '../../assets/css-svgrepo-com.svg';
import Scss from '../../assets/scss2-svgrepo-com.svg';
import JS from '../../assets/js-svgrepo-com.svg';
import TS from '../../assets/typescript-svgrepo-com.svg';
import Node from '../../assets/node-svgrepo-com.svg';
import Gmail from '../../assets/gmail-svgrepo-com.svg';
import ReactImage from '../../assets/react-svgrepo-com.svg';
import ReduxImage from '../../assets/redux-svgrepo-com.svg';
import Telegram from '../../assets/telegram-svgrepo-com.svg';

class About extends React.Component {
  render() {
    return (
      <div className={'about-container'}>
        <div className={'container'}>
          <img className={'image-profile'} src={ImageProfile}></img>
          <div className={'description'}>
            <h1>
              Hi &#128075;, My name is <span>Aleksander</span>
            </h1>
            <h2>
              I am a <span>Frontend-End Developer &#128187;</span>
            </h2>
            <fieldset className={'skills'}>
              <legend>Skills</legend>
              <img src={Html} />
              <img src={Css} />
              <img src={Scss} />
              <img src={JS} />
              <img src={TS} />
              <img src={Node} />
              <img src={ReactImage} />
              <img src={ReduxImage} />
            </fieldset>
            <fieldset className={'social'}>
              <legend>Contacts</legend>
              <a href={'https://t.me/Aleksander_like'} target={'_blank'} rel="noreferrer">
                <img src={Telegram} />
              </a>
              <a href={'mailto:aleksievisa@gmail.com'} target={'_blank'} rel="noreferrer">
                <img src={Gmail} />
              </a>
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
