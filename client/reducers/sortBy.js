import { handleActions } from 'redux-actions';

import { CHANGE_SORT_BY_OPTION, RESET_STATE } from '../actions/actionTypes';

import { RECOMMENDED } from '../constants/sortByOptions';
const initialState = RECOMMENDED;

export default handleActions( {
  [ CHANGE_SORT_BY_OPTION ]: ( state, action ) => {
    return action.payload;
  },
  [ RESET_STATE ]: ( state, action ) => {
    return initialState;
  }
}, initialState );