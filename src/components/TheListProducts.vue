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
    this.$store.dispatch('products/getProducts', this.$route.query.filter)
  },

  watch: {
    $route() {
      this.$store.dispatch('products/throttledGetProducts', this.$route.query.filter)
    }
  }
}
</script>

<style scoped>

</style>