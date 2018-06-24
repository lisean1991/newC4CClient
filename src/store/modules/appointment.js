import * as types from '@/store/mutation-types';
import api from '@/utils/api';
import fetch from '@/utils/fetch';


const initialState = {
  updateError: null,
  isUpdating: false,
  appointments:[],
  appointment:{},
  selectedAppointmentId: null
};

const actions = {

  async fetchApponitmentList({ commit }) {
    try {
      const fetchApi = api.APPOINTMENT;
      const json = await fetch(fetchApi,{
        qs:{
          openId:"o7GwL0XQh2_zlkOszcWfg75gqDSE"
        }
      });
      console.log(json);
      commit(types.FETCH_APPOINTMENT_LIST_DONE, json.appointments);
    } catch (error) {
      commit(types.FETCH_APPOINTMENT_LIST_DONE, null);
    }
  },

  async fetchApponitment({ commit }, key) {
    if (!id) {
      return;
    }
    try {
      const fetchApi = api.APPOINTMENT_LIST();
      const json = await fetch(fetchApi,{
        qx:{
          appointMendtKey:key
        }
      });
      commit(types.FETCH_APPOINTMENT_DONE, json.data);
    } catch (error) {
      commit(types.FETCH_APPOINTMENT_DONE, null);
    }
  },

  async updateAppointment({ commit }, oData) {
    if (!id) {
      return;
    }
    try {
      const json = await fetch(api.COMMUNITIY({ id }), {
        method: 'PATCH',
        body: JSON.stringify(oData)
      });
      commit(types.FETCH_APPOINTMENT_DONE, json.data);
    } catch (error) {
      commit(types.FETCH_APPOINTMENT_DONE, error);
    }
  },

};

const mutations = {
  [types.UPDATE_APPOINTMENT](context) {
    context.isUpdating = true;
    context.updateError = null;
  },
  [types.UPDATE_APPOINTMENT_FAIL](context, error) {
    context.updateError = error.message;
  },
  [types.UPDATE_APPOINTMENT_DONE](context,appointment) {
    context.isUpdating = false;
    if (!appointment) {
      return;
    }
    const index = _.findIndex(context.appointments, app => app.ID === appointment.ID);
    if (index !== -1) {
      context.appointments.splice(index, 1, appointment);
    } else {
      context.appointments.push(appointment);
    }
  },
  [types.FETCH_APPOINTMENT_LIST_DONE](context,data = []) {
    context.appointments = data;
  },
  [types.SELECT_APPOINTMENT](context, id) {
  context.selectedAppointmentId = id;
},
};

const getters = {
  apmList(state, currentGetter) {
    return state.appointments.map((appointment) => {
      return {
        ...appointment
      };
    });
  },

  selectAppointment(state, getter) {
    return getter.apmList.find(appointment => appointment.id === state.selectedAppointmentId) || {};
  }
};

export default {
  state: initialState,
  actions,
  mutations,
  getters
};
