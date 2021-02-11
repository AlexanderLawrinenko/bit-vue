<template>
  <div class="alert">
    {{ getAlertMessage }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAlertMessage"])
  },
  mounted() {
      setTimeout(() => {
        this.$store.dispatch("closeAlert")
      }, 2000)
  }
};
</script>