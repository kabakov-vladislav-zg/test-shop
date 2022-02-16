<template>
  <div class="the-filter container">
    <label>Фильтр<input type="text" v-model="filter"></label>
  </div>
</template>

<script>
export default {
  name: "TheFilter",

  computed: {
    filter: {
      get() {
        return this.$route.query.filter
      },
      set(value) {
        let query = value ? { filter: value } : null
        this.$router.replace({ query })
      }
    }
  }
}
</script>

<style scoped>

</style>