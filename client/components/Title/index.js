import R from 'ramda';
import React, { Component } from 'react';
import style from './style.scss';

import { BASE_URL } from '../../constants/apiRoutes';

class Title extends Component {
  renderImage () {
    const { title } = this.props;
    const bestUrl = extractImageUrlFromTitle( title );

    const imageStyle = {
      backgroundImage: `url(${ bestUrl })`
    };

    const image = (
      <div style={ imageStyle } className={ style['title__image'] }>
      </div>
    );

    return image;
  }

  renderInfo () {
    const { title } = this.props;

    const info = (
      <div className={ style['title__info'] }>
        <div className={ style['title__title'] }>
          { R.prop( 'title', title ) }
        </div>
      </div>
    );

    return info;
  }

  renderLikes () {
    const { title } = this.props;

    const { fivestar } = title;

    if ( R.isEmpty( fivestar ) || R.isNil( fivestar ) ) return null;

    const upCount = R.prop( 'up_count', fivestar );

    if ( R.isEmpty( upCount ) || R.isNil( upCount ) ) return null;

    const likes = R.prop( 'value', upCount );

    return (
      <div className={ style['title__likes'] }>
        { `👍 ${ likes }` }
      </div>
    );
  };

  renderLink () {
    const { title } = this.props;

    const path  = R.prop( 'path', title );
    const route = `${ BASE_URL }/${ path }`;

    const link = (
      <a href={ route } className={ style['title__link'] }>
        { `More` }
      </a>
    );

    return link;
  }

  renderBadge () {
    const { title } = this.props;

    const isNew = R.equals( R.prop( 'is_new', title ), true );

    if ( isNew ) {
      return (
        <div className={ style['title__badge'] }>
          { `New` }
        </div>
      );
    }

    const { series } = title;

    if ( R.isEmpty( series ) || R.isNil( series ) ) return null;

    return (
      <div className={ style['title__badge'] }>
        { `Series` }
      </div>
    );
  }

  render () {
    const image = this.renderImage();
    const info  = this.renderInfo();
    const likes = this.renderLikes();
    const link  = this.renderLink();
    const badge = this.renderBadge();

    return (
      <section className={ style['title'] }>
        <div className={ style['title__container'] }>
          { image }
          { info }
          { likes }
          { link }
          { badge }
        </div>
      </section>
    );
  }
}

export default Title;

function extractImageUrlFromTitle ( title ) {
  // very rough idea: check in order.
  // split object into array in alphabetical
  // (by key) order.
  //
  // for example, 320 comes before 1440 when split
  //
  // assume back is higher quality than front

  if ( R.isNil( title ) || R.isEmpty( title ) ) return;

  if ( R.prop( 'keyart_16x9_withtext', title ) ) {
    return pullHighestQuality( 'keyart_16x9_withtext', title );
  }

  if ( R.prop( 'keyart_16x9_notext', title ) ) {
    return pullHighestQuality( 'keyart_16x9_notext', title );
  }

  if ( R.prop( 'coverart_image', title ) ) {
    return pullHighestQuality( 'coverart_image', title );
  }

  if ( R.prop( 'hero_image', title ) ) {
    return pullHighestQuality( 'hero_image', title );
  }

  if ( R.prop( 'carousel_image', title ) ) {
    return pullHighestQuality( 'carousel_image', title );
  }

  if ( R.prop( 'preview_image', title ) ) {
    return pullHighestQuality( 'preview_image', title );
  }

  function pullHighestQuality ( prop, title ) {
    const values = R.values( R.prop( prop, title ) );
    return R.last( values );
  }
}