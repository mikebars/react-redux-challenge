import R from 'ramda';
import React, { Component } from 'react';
import style from './style.scss';

import Title from '../Title';

class Titles extends Component {
  render () {
    const { displayCount, titles } = this.props;
    const elements = R.map(
      title => <Title key={ R.prop('nid', title) } title={ title }/>,
      R.take( displayCount, titles )
    );
    return (
      <section className={ style['titles'] }>
        <div className={ style['titles__container'] }>
          <span className={ style['titles__suggestion'] }>
            { `We Suggest You Start Here` }
            <span className={ style['titles__arrow'] }>
              { `⤵` }
            </span>
          </span>
          { elements }
        </div>
      </section>
    );
  }
}

export default Titles;