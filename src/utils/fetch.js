import _ from 'lodash';
import originFetch from 'isomorphic-fetch';
import router from '@/router';
import store from '@/store';
import utils from './utils';

const isTest = process.env.NODE_ENV === 'testing';

const FORBIDDEN_CODE = [401, 403];

async function fetch(url, options = {}, header = {}) {
  const csrf = store.getters.csrfToken;
  const params = options.qs;
  if (params) {
    _.keys(params).forEach((key, index) => {
      url += `${index ? '' : '?'}`;
      if (!params[key]) {
        return;
      }
      url += `${index ? '&' : ''}${key}=${encodeURIComponent(params[key])}`;
    });
  }
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...header
  };
  if (csrf) {
    headers['X-CSRF-Token'] = csrf;
  }
  const res = await originFetch(url, {
    credentials: 'same-origin',
    headers,
    ...options
  });
  const json = await res.json();

  if (res.status >= 400) {
    if (FORBIDDEN_CODE.includes(res.status) &&
        !utils.anonymousRoutes().includes(router.currentRoute.name)) {
      await store.dispatch('signOut');
      store.dispatch('toast/toastDanger', 'You are not authorized. Please login again.');
    }
    throw json;
  } else {

  }


  return json;
}

export default fetch;
