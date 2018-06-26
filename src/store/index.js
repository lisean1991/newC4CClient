import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import actions from './actions';
import getters from './getters';
import appointment from './modules/appointment';
import mutations from './mutations';


Vue.use(Vuex);

const debug = !['production', 'testing'].includes(process.env.NODE_ENV);

// const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    network: {},
    reports: [],
    isLoading: true,
    isConnected:false,
    currentMember: {},
    isLoadingPage: false,
    route: null,
    windowHeight: window.innerHeight,
    scrollHeight: 0,
    scrollTop: 0,
    isPreventLeave: false,
    siteFeatures: {}
  },

  actions,
  getters,
  mutations,
  modules: {
    appointment
  },
  strict: debug,
  plugins: [createLogger({
    filter() {
      return debug;
    }
  })],
});
