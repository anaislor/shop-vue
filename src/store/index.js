import Vue from "vue";
import Vuex from "vuex";
import shopApi from "@/api/products.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    basket: []
  },
  getters: {
    products: state => state.products,
    basket: state => state.basket
  },
  //pour accéder à une valeur du store n'importe ou (on peut la filter la filter ...)
  mutations: {
    setProducts: (state, value) => (state.products = value.splice(0, 20)),
    addProduct: (state, id) =>
      state.basket.push(state.products.filter(p => p.id === id)[0]),
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
      shopApi.getAllProducts().then(res => commit("setProducts", res));
    }
  },
  //commit = le type de mutation, les actions ne modifient pas l'état mais actent des mutations
  modules: {}
});
