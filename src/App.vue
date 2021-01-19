<template>
  <div id="app">
    <div class="main">
      <div class="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {Footer, Main, Header}
}
</script>

<style>
@import "style/fonts.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  width: 100%;
  height: 100vh;
  background-color: #b0c6e6;
  position: absolute;
}

.container {
  max-width: 480px;
  height: 100%;
  margin: 0 auto;
  padding: 15px;
}
</style>
