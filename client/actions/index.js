import { loadMoreTitles } from './load';
import { resetState } from './reset';
import { getSearchResults } from './search';
import { changeSortByOption } from './sort';

const actionCreators = {
  loadMoreTitles,
  resetState,
  getSearchResults,
  changeSortByOption
};

export default actionCreators;

export * as actionTypes from './actionTypes';