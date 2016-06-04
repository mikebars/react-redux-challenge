import React, { Component } from 'react';
import style from './style.scss';

import About from '../../components/About';

class AboutPage extends Component {
  render () {
    return (
      <section className={ style['about-page'] }>
        <About />
      </section>
    );
  }
}

export default AboutPage;