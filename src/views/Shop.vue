<template>
  <div id="shop">
    <h1>Shop</h1>
    <ul>
      v-for=""
    </ul>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.dispatch("getAllProducts");
  }
};
</script>

<style>
#shop {
  margin-top: 50px;
}
</style>
