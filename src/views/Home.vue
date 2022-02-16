<template>
  <div class="home">
    <h1 class="container">Каталог</h1>
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