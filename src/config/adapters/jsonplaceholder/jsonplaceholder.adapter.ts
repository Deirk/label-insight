import {AxiosAdapter} from '../http/axios.adapter';

import { JSONPLACEHOLDER_BASE_URL } from '../../constants';

export const jsonplaceholderfetcher = new AxiosAdapter({
  baseURL: JSONPLACEHOLDER_BASE_URL,
});
