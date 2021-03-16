<template>
  <div id="app">
    <Header />
    <router-view :key="$route.fullPath" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import "material-icons/iconfont/material-icons.css";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style>
@import url("../public/grid.min.css");
@import url("../public/main.css");
@media screen and (max-width: 900px) {
  .vs-navbar {
    padding: 20px 10px !important;
  }
  
}
</style>
