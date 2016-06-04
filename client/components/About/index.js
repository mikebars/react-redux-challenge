import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './style.scss';

class About extends Component {
  render () {
    return (
      <section className={ style['about'] }>
        <div className={ style['about__container'] }>
          <p className={ style['about__mike-b'] }>
            { `Mike B` }
          </p>
          <p>
            { `Code Challenge.` }
          </p>
          <p>
            { `Front end web development project.` }
          </p>
          <p>
            { `Written with React, React Router, Redux, and Ramda.` }
          </p>
          <Link
            to='/term/119931'
            className={ style['about__demo-link'] }
          >
            { `Check it out!` }
          </Link>
        </div>
      </section>
    );
  }
}

export default About;