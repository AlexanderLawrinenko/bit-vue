import Vue from "vue";
import Vuex from "vuex";
import Pairs from "./pairs.module";
import Quote from "./quote.module";
import Warrantis from "./warrants.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    dataAlert: {
      status: false,
      message: ''
    }
  },
  getters: {
    getIsLoading (state) {
      return state.isLoading
    },
    getAlertStatus (state) {
      return state.dataAlert.status
    },
    getAlertMessage (state) {
      return state.dataAlert.message
    }
  },
  mutations: {
    SET_IS_LOADING (state, payload) {
      state.isLoading = payload
    },
    SET_ERROR (state, payload) {
      state.dataAlert = {
        status: true,
        message: payload.message
      }
    },
    CLOSE_ALERT(state) {
      state.dataAlert = {
        status: false,
        message: ''
      }
    }
  },
  actions: {
    closeAlert({commit}) {
      commit('CLOSE_ALERT')
    }
  },
  modules: {
    Pairs,
    Quote,
    Warrantis
  }
});
