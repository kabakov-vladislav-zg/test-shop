<template>
  <div class="product container">
    <router-link :to="goBack">go back</router-link>

    <template v-if="product">
      <div class="row">
        <div class="row__col">
          <img
            :src="product.img.url"
            :alt="product.img.alt || product.title"
            :width="product.img.width"
            :height="product.img.height"
          >
        </div>
        <h1 class="row__col">{{product.title}}</h1>
      </div>
    </template>

    <div v-else>
      <h1>404 товар не найден</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  computed: {
    product() {
      return this.$store.state.products.current
    },
    goBack() {
      let filter = this.$store.state.products.filter
      let query = filter ? { filter } : null
      return {
        path: '/',
        query
      }
    }
  },

  watch: { // in case of route from product to product
    $route: {
      immediate: true,
      handler() {
        this.$store.dispatch('products/getCurrentProduct', this.$route.params.product)
      }
    }
  }
}
</script>
