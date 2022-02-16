<template>
  <div class="the-list-products container">
    <div
      v-for="product in products"
      :key="product.id"
      class=""
    >
      <img :src="product.img" alt="">
      <router-link :to="'/' + product.slug">{{ product.title }}</router-link>
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
  created() {
    this.$store.dispatch('products/getListProducts', this.$route.query.filter)
  },

  watch: {
    $route() {
      this.$store.dispatch('products/throttledGetListProducts', this.$route.query.filter)
    }
  }
}
</script>

<style scoped>

</style>