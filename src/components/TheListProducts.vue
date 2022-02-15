<template>
  <div class="the-list-products container">
    <div
      v-for="product in products"
      :key="product.id"
      class=""
    >
      <img :src="product.img" alt="">
      {{ product.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TheListProducts",
  computed: {
    products() {
      return this.$store.state.products.list
    }
  },
  mounted() {
    this.$store.dispatch('products/getProducts', { filter: this.$route.query.filter, throttle: false })
  },

  watch: {
    $route(route) {
      this.$store.dispatch('products/getProducts', { filter: route.query.filter, throttle: true })
    }
  }
}
</script>

<style scoped>

</style>