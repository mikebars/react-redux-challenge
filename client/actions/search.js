import { createAction } from 'redux-actions';

import { getVideosByTermId } from '../api';

import {
  NEW_SEARCH_REQUEST,
  RECEIVE_SEARCH_RESPONSE,
  RECEIVE_SEARCH_ERROR
} from './actionTypes';

const newSearchRequest = createAction( NEW_SEARCH_REQUEST );

const receiveSearchResponse = createAction( RECEIVE_SEARCH_RESPONSE );

const receiveSearchError = createAction( RECEIVE_SEARCH_ERROR );

export const getSearchResults = function getSearchResults ( tid ) {
  return dispatch => {
    dispatch( newSearchRequest( tid ) );
    return getVideosByTermId( tid )
      .then(
        response => dispatch( receiveSearchResponse( response ) ),
        reason => dispatch( receiveSearchError( reason ) )
      );
  };
};