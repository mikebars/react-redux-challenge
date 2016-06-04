import React, { Component } from 'react';

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';

import style from './style.scss';

class App extends Component {
  render () {
    const { children } = this.props;
    return (
      <div className={ style['app'] }>
        <Header />
        <NavBar />
        { children }
      </div>
    );
  }
}

export default App;