import { createAction } from 'redux-actions';

import { RESET_STATE } from './actionTypes';

export const resetState = createAction( RESET_STATE );