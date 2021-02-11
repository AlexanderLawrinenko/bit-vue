<template>
  <div class="base-container">
    <div class="base-container__header">
      <h1>Test APP</h1>
    </div>
    <div class="base-container__main">
      <div class="base-container__main-item">
        <list-trading-pairs></list-trading-pairs>
      </div>
      <div class="base-container__main-item">
        <component :is="isQuote" :quote="getQuote"></component>
        <!-- <quotes v-if="getQuote" :quote="getQuote"></quotes> -->
      </div>
      <div class="base-container__main-item">
        <warrants></warrants>
      </div>
    </div>
    <div class="base-container__footer">
      <order-history></order-history>
    </div>
    <Loader v-if="getIsLoading" />
    <transition name="slide-fade">
      <alert v-if="getAlertStatus"></alert>
    </transition>
  </div>
</template>

<script>
import ListTradingPairs from "../components/TradingPairs.vue";
import Warrants from "../components/Warrants.vue";
import OrderHistory from "../components/OrderHistory.vue";
import Loader from "../shared/components/loader.vue";
import Alert from "../shared/components/alert.vue";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    ListTradingPairs,
    Quotes: () => import("../components/Quotes.vue"),
    Warrants,
    OrderHistory,
    Loader,
    Alert
  },
  computed: {
    ...mapGetters(["getQuote", "getIsLoading", "getAlertStatus"]),
    isQuote () {
      if (this.getQuote) return "Quotes"
      else return null
    }
  }
};
</script>
