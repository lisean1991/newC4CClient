import Vue from 'vue';
import _ from 'lodash';
import router from '@/router';
import * as types from './mutation-types';


export default {
  [types.LOAD_PAGE](state) {
    state.isLoadingPage = true;
  },
  [types.LOAD_PAGE_DONE](state) {
    state.isLoadingPage = false;
  },
  [types.LOAD_APPLICATION](state) {
    state.isLoading = true;
  },
  [types.LOAD_APPLICATION_DONE](state) {
    state.isLoading = false;
  },
  [types.FETCH_NETWORK_SUCCESS](state) {
    state.isConnected = true;
  },
  [types.FETCH_NETWORK_FAIL](state) {
    state.isConnected = false;
  },
  [types.CHANGE_HOME_PAGE](state) {
    state.isNewHome = !state.isNewHome;
  },
};
