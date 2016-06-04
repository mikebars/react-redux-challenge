import React, { Component } from 'react';
import R from 'ramda';
import style from './style.scss';

import {
  MY_GAIA,
  YOGA,
  SEEKING_TRUTH,
  TRANSFORMATION,
  FILMS_AND_DOCS,
  CENTERS,
} from '../../constants/navBarLinks';

class NavBar extends Component {
  render () {
    const linkOrder = [
      MY_GAIA,
      YOGA,
      SEEKING_TRUTH,
      TRANSFORMATION,
      FILMS_AND_DOCS,
      CENTERS
    ];

    const links = (
      <ul className={ style['nav-bar__links'] }>
        { R.map( link => (
          <li key={ link } className={ style['nav-bar__link-container'] }>
            <a className={ style['nav-bar__link'] }>
              { link }
            </a>
          </li>
        ), linkOrder ) }
      </ul>
    );

    const select = (
      <select className={ style['nav-bar__select'] }>
        { R.map( link => (
          <option key={ link } className={ style['nav-bar__option'] }>
            { link }
          </option>
        ), linkOrder ) }
      </select>
    );

    const search = (
      <div className={ style['nav-bar__search-container'] }>
        <input className={ style['nav-bar__search'] }/>
        <input type='submit' className={ style['nav-bar__submit'] }/>
      </div>
    );

    return (
      <nav className={ style['nav-bar'] }>
        <div className={ style['nav-bar__container'] }>
          { links }
          { select }
          { search }
        </div>
      </nav>
    );
  }
}

export default NavBar;