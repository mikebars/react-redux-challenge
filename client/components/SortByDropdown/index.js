import R from 'ramda';
import React, { Component } from 'react';
import style from './style.scss';

import * as sortByOptions from '../../constants/sortByOptions';

class SortByDropdown extends Component {
  handleOptionChange ( option ) {
    const { changeSortByOption } = this.props;
    return changeSortByOption( option );
  }

  render () {
    const { sortBy } = this.props;
    const options = R.map( option => (
      <option
        key={ option }
        className={ style['sort-by__option'] }
        value={ option }
      >
        { option }
      </option>
    ), R.values( sortByOptions ) );
    return (
      <section className={ style['sort-by'] }>
        <div className={ style['sort-by__container'] }>
          <p className={ style['sort-by__text'] }>
            { `Sort By` }
          </p>
          <select
            onChange={ e => this.handleOptionChange(e.target.value) }
            defaultValue={ sortBy }
            className={ style['sort-by__select'] }
          >
            { options }
          </select>
        </div>
      </section>
    );
  }
}

export default SortByDropdown;