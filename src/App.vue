<template>
  <div>
    <nav>
      <router-link to="/">Shop</router-link>
      <router-link to="/basket">Basket({{basket.length}})</router-link>
    </nav>
    <!-- rendre la vue -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basket: this.$store.state.basket
    };
  }
};
</script>

<style>
</style>
