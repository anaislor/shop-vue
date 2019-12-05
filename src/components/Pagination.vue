<template>
  <div id="pagination">
    <button v-if="this.$store.state.currentPage-1" @click="firstPage">{{first}}</button>
    <button v-if="this.$store.state.currentPage-1" @click="previousPage">{{previous}}</button>
    <span>{{this.$store.state.currentPage}}</span>
    <button v-if="this.$store.state.currentPage<this.$store.state.totalPages" @click="nextPage">></button>
    <button v-if="this.$store.state.currentPage<this.$store.state.totalPages" @click="lastPage">>></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first: "<<",
      previous: "<"
    };
  },
  methods: {
    firstPage() {
      this.$store.commit("firstPage");
    },
    nextPage() {
      this.$store.commit("nextPage");
    },
    previousPage() {
      this.$store.commit("previousPage");
    },
    lastPage() {
      this.$store.commit("lastPage");
    }
  }
};
</script>

<style>
#pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

#pagination button {
  border-radius: 10px;
  border: none;
  /* box-shadow: 0px 0px 8px 0px #dad8d6; */
  font-size: 15px;
  margin: 0 10px;
}

#pagination button:hover {
  color: #f408b4;
}

#pagination span {
  font-size: 20px;
}
</style>