<template>
  <div class="list-holder">
    <div
      v-for="item in getHistoreQuote"
      :key="item.timestamp"
      class="list-holder__item history-mode"
    >
      <div class="list-holder__item-col">{{ item.timestamp }}</div>
      <div class="list-holder__item-col">{{ item.open }}</div>
      <div class="list-holder__item-col">{{ item.high }}</div>
      <div class="list-holder__item-col">{{ item.low }}</div>
      <div class="list-holder__item-col">{{ item.close }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    quote: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      ws: null,
      wsStatus: false
    }
  },
  computed: {
    ...mapGetters(['getHistoreQuote'])
  },
  created () {
    this.initConnection()
    this.initData(this.quote)
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
  },
  watch: {
    quote (val) {
      if (val) this.initData(val)
    }
  }
};
</script>