<template>
  <div class="list-holder">
      <div class="list-holder__item">
          list
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    getList () {
      this.$store.dispatch('getList')
    }
  }
}
</script>
