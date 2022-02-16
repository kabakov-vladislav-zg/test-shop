<template>
  <div class="the-list-products container row">
    <div
      v-for="product in products"
      :key="product.id"
      class="row__col the-list-products__product"
    >
      <img
        :src="product.img.url"
        :alt="product.img.alt || product.title"
        :width="product.img.width"
        :height="product.img.height"
      >
      <h2>
        <router-link
          class="stretched-link"
          :to="'/' + product.slug"
        >
          {{ product.title }}
        </router-link>
      </h2>
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
.the-list-products__product {
  position: relative;
}
</style>