<template>
  <div class="container-form" v-if="getQuote">
    <div class="container-form__control">
      <input class="container-form__control-item form-control" @keypress="checkCellNum" v-model="order" type="text">
    </div>
    <div class="container-form__actions">
      <button @click="sendOrder('Buy')" type="button" :disabled="validation" class="base-btn">Buy</button>
      <button @click="sendOrder('Sell')" type="button" :disabled="validation" class="base-btn">Sell</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
      orderQty: 1
    }
  },
  computed: {
    ...mapGetters(['getQuote']),
    validation () {
      if (typeof this.orderQty === 'number' && this.orderQty > 0) return false
      else return true
    },
    order: {
      get: function() {
        return this.orderQty
      },
      set: function(val) {
        const num = Number(val)
        if (typeof num === 'number' && !isNaN(num) ) {
          this.orderQty = num
        } else {
          this.orderQty = 0
        }
      }
    }
  },
  methods: {
    sendOrder (marker) {
      const data = {
        ordType: 'Market',
        symbol: this.getQuote,
        orderQty: this.order,
        side: marker
      }
      this.$store.dispatch('orderSend', data)
    },
    checkCellNum(evt) {
      let regex = new RegExp("^[0-9.]+$");
      let key = String.fromCharCode(!evt.charCode ? evt.which : evt.charCode);
      if (!regex.test(key)) {
        event.preventDefault();
        return false;
      }
    }
  }
}
</script>