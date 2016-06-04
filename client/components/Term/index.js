import R from 'ramda';
import React, { Component } from 'react';
import style from './style.scss';

class Term extends Component {
  render () {
    const { term, term: { name, body, termImages } } = this.props;

    const url = extractImageUrlFromTermImages( termImages );

    const termStyle = {
      backgroundImage: `url(${ url })`
    };

    return (
      <section style={ termStyle } className={ style['term'] }>
        <div className={ style['term__container'] }>
          <span className={ style['term__name'] }>
            { name }
          </span>
          <p className={ style['term__body'] }>
            { body }
          </p>
        </div>
      </section>
    );
  }
}

export default Term;

function extractImageUrlFromTermImages ( termImages ) {
  // very rough idea: check in order.
  // split object into array in alphabetical
  // (by key) order.
  //
  // for example, 320 comes before 1440 when split
  //
  // assume back is higher quality than front

  if ( R.isNil( termImages ) || R.isEmpty( termImages ) ) return;

  if ( R.prop( 'hero', termImages ) ) {
    return pullHighestQuality( 'hero', termImages );
  }

  if ( R.prop( 'tile', termImages ) ) {
    return pullHighestQuality( 'tile', termImages );
  }

  function pullHighestQuality ( prop, termImages ) {
    const values = R.values( R.prop( prop, termImages ) );
    return R.last( values );
  }
}