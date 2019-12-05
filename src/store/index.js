import Vue from "vue";
import Vuex from "vuex";
import shopApi from "@/api/products.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    basket: [],
    totalPages: 0,
    currentPage: 1
  },
  getters: {
    products: state =>
      state.products.filter(p => {
        return (
          p.id <= state.currentPage * 15 && p.id >= state.currentPage * 15 - 15
        );
      }),
    basket: state => state.basket
  },
  //pour accéder à une valeur du store n'importe ou (on peut la filter la filter ...)
  mutations: {
    setPages: (state, value) => (state.totalPages = value),
    setProducts: (state, value) => (state.products = value),
    firstPage: state => (state.currentPage = 1),
    nextPage: state => {
      state.currentPage += 1;
    },
    previousPage: state => {
      state.currentPage -= 1;
    },
    lastPage: state => (state.currentPage = state.totalPages),
    addProduct: (state, id) => {
      state.basket.push(state.products.filter(p => p.id === id)[0]);
    },
    removeProduct: (state, id) =>
      state.basket.map((p, i) => {
        if (p.id === id) {
          state.basket.splice(i, 1);
        } else p;
      })
  },
  //mutation permet de modifier le state dans le store
  actions: {
    getAllProducts: ({ commit }) => {
      shopApi.getAllProducts().then(res => {
        commit("setProducts", res);
        commit("setPages", Math.round(res.length / 15));
      });
    }
  },
  //commit = le type de mutation, les actions ne modifient pas l'état mais actent des mutations
  modules: {}
});
