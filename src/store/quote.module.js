import Servisec from "../services/service.js";

export default {
  state: {
    historeQuote: [],
    quote: ""
  },
  getters: {
    getQuote(state) {
      return state.quote;
    },
    getHistoreQuote(state) {
      return state.historeQuote;
    }
  },
  mutations: {
    SET_QUOTE_HISTORY(state, payload) {
      state.historeQuote = payload;
    },
    SET_QUOTE(state, payload) {
      state.quote = payload;
    },
    SET_WS_QUOTE(state, payload) {
      const result = JSON.parse(payload)
      if (result.action === 'insert') {
        state.historeQuote.pop()
        state.historeQuote.unshift(result.data[0])
      }
    }
  },
  actions: {
    async actionHistory({ commit }, payload) {
      commit('SET_IS_LOADING', true)
      try {
        const resp = await Servisec.getHistoryQuote(payload);
        if (resp?.data?.error) commit('SET_ERROR', resp.data.error)
        else commit("SET_QUOTE_HISTORY", resp)
        commit('SET_IS_LOADING', false)
        return true;
      } catch (error) {
        commit('SET_IS_LOADING', false)
        return false;
      }
    },
    setQuote({ commit }, payload) {
      commit("SET_QUOTE", payload);
    },
    watchQuote({ commit }, payload) {
        commit("SET_WS_QUOTE", payload);
    }
  }
};
