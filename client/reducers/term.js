import { handleActions } from 'redux-actions';

import { RECEIVE_SEARCH_RESPONSE, RESET_STATE } from '../actions/actionTypes';

const initialState = {};

export default handleActions( {
  [ RECEIVE_SEARCH_RESPONSE ]: ( state, action ) => {
    const { payload: { data: { term } } } = action;
    return term;
  },
  [ RESET_STATE ]: ( state, action ) => {
    return initialState;
  }
}, initialState );