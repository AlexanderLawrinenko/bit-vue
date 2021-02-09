<template>
  <div v-if="instruments.length" class="list-holder">
      <div v-for="(item, index) in instruments" :key="index" class="list-holder__item action" @click="quoteHistory(item)">
          <div class="list-holder__item-col">{{item.symbol}}</div>
          <div class="list-holder__item-col">{{item.lastPrice}}</div>
      </div>
  </div>
  <div v-else class="list-holder">
    <div class="list-holder__item">No Data</div>
  </div>
</template>

<script>
export default {
  computed: {
    instruments () {
      return this.$store.getters.getInstrument
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      await this.$store.dispatch('getList').then((result) => {
        result && this.$store.dispatch('watchPairs')
      })
    },
    quoteHistory ({symbol}) {
      this.$store.dispatch('setQuote', symbol)
    }
  }
}
</script>
