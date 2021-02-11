import Servisec from "../services/service.js";

export default {
  state: {
    order: null,
    orderList: []
  },
  getters: {
    getOrderList (state) {
      return state.orderList
    }
  },
  mutations: {
    SET_OREDER(state, payload) {
      state.order = payload;
    },
    SET_ORDER_LIST(state, payload) {
      state.orderList = payload;
    }
  },
  actions: {
    async orderSend({ commit }, payload) {
      commit('SET_IS_LOADING', true)
      try {
        const resp = await Servisec.orderSend(payload)
        if (resp?.data?.error) commit('SET_ERROR', resp.data.error)
        else commit("SET_OREDER", resp)
        commit('SET_IS_LOADING', false)
      } catch (error) {
        commit('SET_IS_LOADING', false)
      }
    },
    async getOrders({ commit }) {
      commit('SET_IS_LOADING', true)
      try {
        const resp = await Servisec.getOrders();
        if (resp?.data?.error) commit('SET_ERROR', resp.data.error)
        else commit("SET_ORDER_LIST", resp);
        commit('SET_IS_LOADING', false)
      } catch (error) {
        commit('SET_IS_LOADING', false)
      }
    }
  }
};
