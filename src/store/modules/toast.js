import * as types from '../mutation-types';

const state = {
  toasts: []
};

const actions = {
  toast({ commit }, toast) {
    const contentToast = {
      id: Math.floor(Math.random() * 10000),
      content: toast.content,
      type: toast.type
    };
    commit(types.TOAST, contentToast);
    setTimeout(() => {
      commit(types.REMOVE_TOAST);
    }, 4950);
  },
  toastSuccess({ dispatch }, message) {
    dispatch('toast', {
      content: message,
      type: 'success'
    });
  },
  toastDanger({ dispatch }, message) {
    dispatch('toast', {
      content: message,
      type: 'danger'
    });
  }
};

const mutations = {
  [types.TOAST](context, toast) {
    context.toasts.unshift(toast);
  },
  [types.REMOVE_TOAST](context) {
    context.toasts.pop();
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
