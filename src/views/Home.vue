<template functinal>
  <div class="base-container">
    <div class="base-container__header">
      <h1>Test APP</h1>
    </div>
    <div class="base-container__main">
      <div class="base-container__main-item">
        <list-trading-pairs></list-trading-pairs>
      </div>
      <div class="base-container__main-item">
        <quotes></quotes>
      </div>
      <div class="base-container__main-item">
        <warrants></warrants>
      </div>
    </div>
    <div class="base-container__footer">
      <order-history></order-history>
    </div>
  </div>
</template>

<script>
import ListTradingPairs from "../components/TradingPairs.vue";
import Quotes from "../components/Quotes.vue";
import Warrants from "../components/Warrants.vue";
import OrderHistory from "../components/OrderHistory.vue";

export default {
  name: "Home",
  components: {
    ListTradingPairs,
    Quotes,
    Warrants,
    OrderHistory
  }
};
</script>
