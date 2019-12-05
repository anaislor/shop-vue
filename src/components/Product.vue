<template>
  <li>
    <h1>{{title}}</h1>
    <img :src="img" :alt="title" />
    <button @click="add(id)">+</button>
    <button v-if="removable" @click="remove(id)">-</button>
  </li>
</template>

<script>
export default {
  props: ["title", "img", "id", "removable"],
  methods: {
    add(id) {
      this.$store.commit("addProduct", id);
    },
    remove(id) {
      this.$store.commit("removeProduct", id);
    }
  }
};
</script>

<style>
</style>
