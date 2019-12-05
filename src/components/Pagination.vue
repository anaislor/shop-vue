<template>
  <div>
    <button v-if="this.$store.state.currentPage-1" @click="firstPage">First Page</button>
    <button v-if="this.$store.state.currentPage-1" @click="previousPage">Previous Page</button>
    <span>{{this.$store.state.currentPage}}</span>
    <button
      v-if="this.$store.state.currentPage<this.$store.state.totalPages"
      @click="nextPage"
    >Next page</button>
    <button
      v-if="this.$store.state.currentPage<this.$store.state.totalPages"
      @click="lastPage"
    >Last Page</button>
  </div>
</template>

<script>
export default {
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
</style>