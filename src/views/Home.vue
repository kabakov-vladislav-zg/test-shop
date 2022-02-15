<template>
  <div class="home">
    <TheFilter />
    <TheListProducts />
  </div>
</template>

<script>
import TheFilter from "../components/TheFilter";
import TheListProducts from "../components/TheListProducts";
export default {
  name: 'Home',
  components: {
    TheListProducts,
    TheFilter

  }
}
</script>