<template>
  <div id="basket">
    <h1>Basket</h1>
    <ul>
      <Product
        v-for="(prod,i) in basket"
        :key="i"
        :id="prod.id"
        :title="prod.title"
        :img="prod.thumbnailUrl"
        removable="true"
      ></Product>
    </ul>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
export default {
  components: {
    Product
  },
  computed: {
    basket() {
      return this.$store.getters.basket;
    }
  }
};
</script>

<style>
#basket {
  margin-top: 50px;
}
</style>
