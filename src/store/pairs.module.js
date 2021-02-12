import Servisec from "../services/service.js";

export default {
  state: {
    instrument: []
  },
  getters: {
    getInstrument(state) {
      return state.instrument;
    }
  },
  mutations: {
    SET_INSTRUMENT(state, payload) {
      state.instrument = payload;
    },
    SET_VALUE(state, payload) {
      let result = JSON.parse(payload)
      if (result.action === "update") {
        const index = state.instrument.findIndex(
          item => item.symbol === result.data[0].symbol
        );
        if (index != -1 && result.data[0].lastPrice)
          state.instrument[index].lastPrice = result.data[0]?.lastPrice
      }
    }
  },
  actions: {
    async getList({ commit }) {
      commit('SET_IS_LOADING', true)
      try {
        const resp = await Servisec.getList()
        commit('SET_IS_LOADING', false)
        if (resp?.data?.error) {
          commit('SET_ERROR', resp.data.error)
          return false
        } else if (resp) {
          commit("SET_INSTRUMENT", resp)
          return true
        } else {
          return false
        }
      } catch (error) {
        commit('SET_IS_LOADING', false)
        return false
      }
    },
    watchPairs({ commit }, payload) {
      commit("SET_VALUE", payload)
    }
  }
};
