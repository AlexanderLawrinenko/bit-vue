import Servisec from '../services/service.js'

export default {
  state: {
    instrument: [],
  },
  getters: {
    getInstrument(state) {
      return state.instrument;
    },
  },
  mutations: {
    SET_INSTRUMENT(state, payload) {
      state.instrument = payload;
    },
  },
  actions: {
    async getList({ commit }) {
      try {
        const data = await Servisec.getList();
        commit("SET_INSTRUMENT", data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
