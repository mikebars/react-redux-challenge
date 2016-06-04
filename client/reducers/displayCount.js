import R from 'ramda';
import { handleActions } from 'redux-actions';

import { LOAD_MORE_TITLES, RECEIVE_SEARCH_RESPONSE, RESET_STATE } from '../actions/actionTypes';

const initialState = 16;

export default handleActions( {
  [ LOAD_MORE_TITLES ]: ( state, action ) => {
    return R.add( state, initialState );
  },
  [ RECEIVE_SEARCH_RESPONSE ]: ( state, action ) => {
    return initialState;
  },
  [ RESET_STATE ]: ( state, action ) => {
    return initialState;
  }
}, initialState );