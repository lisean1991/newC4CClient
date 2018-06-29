import * as types from '@/store/mutation-types';
import api from '@/utils/api';
import fetch from '@/utils/fetch';


const initialState = {
  updateError: null,
  isUpdating: false,
  accountList: [],
  account: {},
  selectedAccountId: null
};


const actions = {

  async getAccountList({ commit }) {
    try {
      const fetchApi = `${api.API_C4C_ODATA}/AccountCollection?$top=20&$format=json`;
      const json = await fetch(fetchApi);
      console.log(json);
      commit(types.FETCH_ACCOUNT_DONE, json.d.results);
    } catch (error) {
      commit(types.FETCH_ACCOUNT_ERROR, null);
    }
  },


};

const mutations = {
  [types.FETCH_ACCOUNT_DONE](context,data = []) {
    context.accountList = data;
  }
};


const getters = {
  accountList(state, currentGetter) {
    if (!state.accountList) {
      return;
    }
    return state.accountList.map((account) => {
      return {
        ...account
      };
    });
  }
};

export default {
  state: initialState,
  actions,
  getters,
  mutations
};
