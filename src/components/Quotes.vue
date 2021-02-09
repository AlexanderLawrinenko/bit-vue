<template>
  <div v-if="history.length" class="list-holder">
    <div
      v-for="item in history"
      :key="item.timestamp"
      class="list-holder__item history-mode"
      @click="quoteHistory(item)"
    >
      <div class="list-holder__item-col">{{ item.timestamp }}</div>
      <div class="list-holder__item-col">{{ item.open }}</div>
      <div class="list-holder__item-col">{{ item.high }}</div>
      <div class="list-holder__item-col">{{ item.low }}</div>
      <div class="list-holder__item-col">{{ item.close }}</div>
    </div>
  </div>
  <div v-else class="list-holder">
    <div class="list-holder__item">No Data</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ws: null,
      wsStatus: false
    }
  },
  computed: {
    history() {
      return this.$store.getters.getHistoreQuote;
    },
  },
  created () {
    this.initConnection()
    this.$store.watch(
      (state, getters) => getters.getQuote,
      (newVal) => {
        if (newVal) this.initData(newVal)
      }
    )
  },
  methods: {
    async initData (quote) {
      await this.$store.dispatch('actionHistory', quote).then(result => {
        result && this.sendWs(quote)
      })
    },
    initConnection () {
      this.ws = new WebSocket("wss://testnet.bitmex.com/realtime")
      this.ws.onopen = () => {
        this.wsStatus = true
      }
      this.ws.onmessage = ({data}) => {
        this.$store.dispatch('watchQuote', data)
      }
    },
    sendWs (quote) {
      this.ws.send(`{"op": "subscribe", "args": "tradeBin1m:${quote}"}`)
    }
  }
};
</script>