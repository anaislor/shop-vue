<template>
  <li class="product">
    <img :src="img" :alt="title" />
    <h2>{{title}}</h2>
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
.product {
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  margin: 20px 0;
}

.product h2 {
  font-size: 20px;
  text-align: left;
  text-transform: capitalize;
  margin-right: auto;
  margin-left: 20px;
  padding: 0 10px;
}

.product button {
  height: 50px;
  width: 50px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 0px 8px 0px #dad8d6;
  font-size: 20px;
  margin-right: 10px;
}

.product button:hover {
  background-color: #dad8d6;
}
</style>
