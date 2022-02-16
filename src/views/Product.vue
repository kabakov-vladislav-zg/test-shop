<template>
  <div class="product container">
    <template v-if="product">
      <router-link :to="goBack">go back</router-link>
      <img :src="product.img" alt="">
      {{product.title}}
    </template>
    <div v-else>
      404
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  components: {},
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

  watch: {
    $route: {
      immediate: true,
      handler() {
        this.$store.dispatch('products/getCurrentProduct', this.$route.params.product)
      }
    }
  }
}
</script>
