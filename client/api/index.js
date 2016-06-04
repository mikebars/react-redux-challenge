import R from 'ramda';
import axios from 'axios';

import {
  BASE_URL,
  VIDEOS_BY_TERM_ID_ROUTE
} from '../constants/apiRoutes';

export function getVideosByTermId ( tid ) {
  const url     = `${ BASE_URL }${ R.replace( '__tid__', tid, VIDEOS_BY_TERM_ID_ROUTE ) }`;
  const options = {
    Accept: 'application/json'
  };
  return axios.get( url, options );
}