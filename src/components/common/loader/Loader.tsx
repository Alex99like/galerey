import React, { Component } from 'react';
import './loader.scss';

class Loader extends Component {
  render() {
    return (
      <div className={'loader'}>
        <div className={'spinner'}>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Loader;
