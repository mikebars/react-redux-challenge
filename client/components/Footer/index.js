import React, { Component } from 'react';
import style from './style.scss';

class Footer extends Component {
  handleLoadMoreButtonClick () {
    const { loadMoreTitles } = this.props;
    return loadMoreTitles();
  }

  handleToTopButtonClick () {
    return window.scrollTo( 0, 0 );
  }

  render () {
    const { moreToLoad } = this.props;

    const loadMoreButton = moreToLoad ? (
      <a
        onClick={ e => this.handleLoadMoreButtonClick() }
        className={ style['footer__load-more'] }
      >
        { `Load More` }
      </a>
    ) : null;

    const toTopButton = (
      <a
        onClick={ e => this.handleToTopButtonClick() }
        className={ style['footer__to-top'] }
      >
        <span className={ style['footer__up-arrow'] }>
          { `↑` }
        </span>
      </a>
    );

    return (
      <footer className={ style['footer'] }>
        <div className={ style['footer__container'] }>
          { toTopButton }
          { loadMoreButton }
        </div>
      </footer>
    );
  }
}

export default Footer;