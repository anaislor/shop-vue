<template>
  <div id="shop">
    <!-- eslint-disable -->
    <h1>Shop</h1>
    <ul>
      <Product
        v-for="prod in products"
        :key="prod.id"
        :id="prod.id"
        :title="prod.title"
        :img="prod.thumbnailUrl"
        removable
      ></Product>
    </ul>
    <Pagination></Pagination>
  </div>
</template>

 
<script>
import Product from "@/components/Product.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  /* eslint-disable */
  components: {
    Product,
    Pagination
  },
  beforeCreate() {
    //$store = accéder au store, dispatch = lancer une action
    this.$store.dispatch("getAllProducts");
  },
  computed: {
    //pour accéder au getter du store
    products() {
      return this.$store.getters.products;
    }
  }
};
</script>

<style>
</style>
