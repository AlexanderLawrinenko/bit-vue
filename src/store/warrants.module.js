import Servisec from "../services/service.js";

export default {
  state: {
    order: null,
    orderList: []
  },
  getters: {},
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
      try {
        const data = await Servisec.orderSend(payload);
        commit("SET_OREDER", data);
      } catch (error) {
        console.error(error);
      }
    },
    async getOrders({ commit }) {
      try {
        const data = await Servisec.getOrders();
        commit("SET_ORDER_LIST", data);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
