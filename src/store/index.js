import Vue from "vue";
import Vuex from "vuex";
import Pairs from "./pairs.module";
import Quote from "./quote.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Pairs,
    Quote
  }
});
