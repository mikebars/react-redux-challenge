import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import displayCount from './displayCount';
import sortBy from './sortBy';
import term from './term';
import titles from './titles';

export default combineReducers( {
  routing,
  displayCount,
  sortBy,
  term,
  titles
} );