<template>
  <div class="footer-list">
    <div v-for="(item, index) in getOrderList" :key="index" class="footer-list__line">
      <div class="footer-list__line-item">{{item.orderID}}</div>
      <div class="footer-list__line-item">{{item.symbol}}</div>
      <div class="footer-list__line-item">{{item.orderQty}}</div>
      <div class="footer-list__line-item">{{item.timestamp}}</div>
      <div class="footer-list__line-item">{{item.side}}</div>
      <div class="footer-list__line-item">{{item.price}}</div>
      <div class="footer-list__line-item">{{item.ordStatus}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getOrderList'])
  },
  created() {
    this.$store.dispatch('getOrders')
  }
}
</script>