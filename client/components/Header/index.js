import React, { Component } from 'react';
import style from './style.scss';

class Header extends Component {
  render () {
    return (
      <header className={ style['header'] }>
        <a className={ style['header__home-link'] }>
          { `Gaia` }
        </a>
        <div className={ style['header__user'] }>
          <span className={ style['header__user-name'] }>
            { `Mike` }
          </span>
          <div className={ style['header__user-image'] }/>
        </div>
      </header>
    );
  }
}

export default Header;