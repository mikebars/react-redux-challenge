import { createAction } from 'redux-actions';

import { LOAD_MORE_TITLES } from './actionTypes';

export const loadMoreTitles = createAction( LOAD_MORE_TITLES );