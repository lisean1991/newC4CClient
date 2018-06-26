import fetch from '@/utils/fetch';
import api from '@/utils/api';
import _ from 'lodash';
import * as types from './mutation-types';

const loadPage = ({ commit }) => commit(types.LOAD_PAGE);

const loadPageDone = ({ commit }) => commit(types.LOAD_PAGE_DONE);

const loadApplication = ({ commit }) => commit(types.LOAD_APPLICATION);

const loadApplicationDone = ({ commit }) => commit(types.LOAD_APPLICATION_DONE);

const fetchNetwork = async ({ commit }) => {
  try {
    const json = await fetch(api.CONNECTION);
    commit(types.FETCH_NETWORK_SUCCESS,true);
  } catch (err) {
    commit(types.FETCH_NETWORK_FAIL, false);
  }
};

const updateScrollStatus = _.throttle(({ commit }) => {
  const app = document.querySelector('#app');
  if (!app) {
    return;
  }
  const windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  const scrollHeight = app.scrollHeight;
  const scrollTop = app.scrollTop;
  commit(types.UPDATE_SCROLL_STATUS, {
    windowHeight,
    scrollHeight,
    scrollTop
  });
}, 300);

const preventLeave = ({ commit }) => {
  commit(types.CHANGE_PREVENT_LEAVE, true);
};

const cancelPreventLeave = ({ commit }) => {
  commit(types.CHANGE_PREVENT_LEAVE, false);
};

export default {
  loadPage,
  loadPageDone,
  loadApplication,
  loadApplicationDone,
  updateScrollStatus,
  preventLeave,
  cancelPreventLeave
};
