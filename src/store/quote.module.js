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
      try {
        const data = await Servisec.getHistoryQuote(payload);
        commit("SET_QUOTE_HISTORY", data);
        return true;
      } catch (error) {
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
