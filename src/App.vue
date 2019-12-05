<template>
  <div id="container">
    <nav id="main-nav">
      <router-link to="/">Shop</router-link>
      <router-link to="/basket">Basket({{basket.length}})</router-link>
    </nav>
    <!-- rendre la vue -->
    <router-view id="content"></router-view>
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
* {
  box-sizing: border-box;
  margin: 0;
  outline: none;
}
#container {
  font-family: sans-serif;
  padding-bottom: 50px;
}
#main-nav {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: #dadad6;
  box-shadow: 0px 0px 4px 0px #dad8d6;
  color: white;
  height: 6vh;
}
#main-nav a {
  text-decoration: none;
  color: inherit;
  font-size: 20px;
  margin: 0 10px;
}

#content {
  margin-top: 10vh;
}
</style>
