import R from 'ramda';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Term from '../../components/Term';
import SortByDropdown from '../../components/SortByDropdown';
import Titles from '../../components/Titles';
import Footer from '../../components/Footer';

import actionCreators from '../../actions';

import style from './style.scss';

class TermPage extends Component {
  componentDidMount () {
    const { actions: { getSearchResults }, params: { term } } = this.props;
    return getSearchResults( term );
  }

  componentWillUnmount () {
    const { actions: { resetState } } = this.props;
    return resetState();
  }

  render () {
    const {
            displayCount,
            sortBy,
            term,
            titles,
            actions: {
              loadMoreTitles,
              changeSortByOption
            }
          } = this.props;

    const moreToLoad = R.lt( displayCount, R.length( titles ) );
    return (
      <section className={ style['term-page'] }>
        <Term term={ term }/>
        <SortByDropdown sortBy={ sortBy } changeSortByOption={ changeSortByOption }/>
        <Titles displayCount={ displayCount } titles={ titles }/>
        <Footer moreToLoad={ moreToLoad } loadMoreTitles={ loadMoreTitles }/>
      </section>
    );
  }
}

function mapStateToProps ( state ) {
  return {
    displayCount: R.prop( 'displayCount', state ),
    sortBy: R.prop( 'sortBy', state ),
    term: R.prop( 'term', state ),
    titles: R.prop( 'titles', state )
  };
}

function mapDispatchToProps ( dispatch ) {
  return {
    actions: bindActionCreators( actionCreators, dispatch )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( TermPage );