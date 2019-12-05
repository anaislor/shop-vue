import Vue from "vue";
import Vuex from "vuex";
import shopApi from "@/api/products.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  getters: {
    products: state => state.products
  },
  //pour accéder à une valeur du store n'importe ou (on peut la filter la filter ...)
  mutations: {
    setProducts: (state, value) => (state.products = value)
  },
  //mutation permet de modifier le state dans le store
  actions: {
    getAllProducts: ({ commit }) => {
      shopApi.getAllProducts().then(res => commit("setProducts", res));
    }
  },
  //commit = le type de mutation
  modules: {}
});
