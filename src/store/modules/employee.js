import * as types from '@/store/mutation-types';
import api from '@/utils/api';
import fetch from '@/utils/fetch';


const initialState = {
  updateError: null,
  isUpdating: false,
  employeeList: [],
  employee: {},
  selectedEmployeeId: null
};


const actions = {

  async getEmployeeList({ commit }) {
    try {
      const fetchApi = `${api.API_C4C_ODATA}/EmployeeCollection?$top=20&$format=json`;
      const json = await fetch(fetchApi);

      console.log(json);
      commit(types.FETCH_EMPLOYEE_DONE, json.d.results);
    } catch (error) {
      commit(types.FETCH_EMPLOYEE_ERROR, null);
    }
  },


};

const mutations = {
  [types.FETCH_EMPLOYEE_DONE](context,data = []) {
    context.employeeList = data;
  }
};


const getters = {
  employeeList(state, currentGetter) {
    if (!state.employeeList) {
      return;
    }
    return state.employeeList.map((employee) => {
      return {
        ...employee
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
