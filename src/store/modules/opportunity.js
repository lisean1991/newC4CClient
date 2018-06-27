import * as types from '@/store/mutation-types';
import api from '@/utils/api';
import fetch from '@/utils/fetch';


const initialState = {
  updateError: null,
  isUpdating: false,
  Opportunitys:[],
  Opportunity:{},
  selectedOpportunityObjectId: null
};

const actions = {

  getSelectOpportunity({ commit },ObjectID){
    commit(types.SELECT_OPPORTUNITY, ObjectID);
  },

  async fetchOpportunityList({ commit }) {
    try {
      const fetchApi = api.API_C4C_ODATA + '/OpportunityCollection?$top=20&$format=json';
      const json = await fetch(fetchApi);

      console.log(json);
      commit(types.FETCH_OPPORTUNITY_LIST_DONE, json.d.results);
    } catch (error) {
      commit(types.FETCH_OPPORTUNITY_LIST_DONE, null);
    }
  },

  async fetchOpportunity({ commit }, key) {
    if (!key) {
      return;
    }
    try {
      const fetchApi = api.API_C4C_ODATA + "/OpportunityCollection(\'" + key + "\')" ;
      const json = await fetch(fetchApi);
      commit(types.FETCH_OPPORTUNITY_DONE, json.d.results);
    } catch (error) {
      commit(types.FETCH_OPPORTUNITY_DONE, null);
    }
  },

  async updateOpportunity({ commit }, oData) {
    if (!oData.ObjectID) {
      return;
    }
    try {
      const json = await fetch(api.API_C4C_ODATA + "/OpportunityCollection(\'" + oData.ObjectID + "\')", {
        method: 'PATCH',
        body: JSON.stringify(oData)
      });
      commit(types.FETCH_OPPORTUNITY_DONE, json.d.results);
    } catch (error) {
      commit(types.FETCH_OPPORTUNITY, error);
    }
  },

};

const mutations = {
  [types.UPDATE_OPPORTUNITY](context) {
    context.isUpdating = true;
    context.updateError = null;
  },
  [types.UPDATE_OPPORTUNITY_FAIL](context, error) {
    context.updateError = error.message;
  },
  [types.UPDATE_OPPORTUNITY_DONE](context,Opportunity) {
    context.isUpdating = false;
    if (!Opportunity) {
      return;
    }
    const index = _.findIndex(context.Opportunitys, app => app.ObjectID === Opportunity.ObjectID);
    if (index !== -1) {
      context.Opportunitys.splice(index, 1, Opportunity);
    } else {
      context.Opportunitys.push(Opportunity);
    }
  },
  [types.FETCH_OPPORTUNITY_LIST_DONE](context,data = []) {
    context.Opportunitys = data;
  },
  [types.SELECT_OPPORTUNITY](context, objectID) {
    context.selectedOpportunityObjectId = objectID;
  },
};

const getters = {
  oppList(state) {
    if(!state.Opportunitys){
      return;
    }
    return state.Opportunitys.map((Opportunity) => {
      return {
        ...Opportunity
      };
    });
  },

  selectOpportunity(state, getter) {
    return getter.oppList.find(Opportunity => Opportunity.ObjectID === state.selectedOpportunityObjectId) || {};
  }
};

export default {
  state: initialState,
  actions,
  mutations,
  getters
};
