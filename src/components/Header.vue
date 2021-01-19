<template>
  <nav class="nav">
    <div class="nav__logo">
      <img src="../img/Logo_01.png" width="30" height="30">
    </div>
    <div class="nav_burger">
      <span></span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 34px;
}

.nav_burger span {
  display: block;
  width: 15px;
  height: 2px;
  background-color: #000;
  border-radius: 2px;
}

.nav_burger span::after {
  content: " ";
  width: 15px;
  height: 2px;
  position: absolute;
  transform: translateY(-5px);
  border-radius: 2px;
  background-color: #000;
}

.nav_burger span::before {
  content: " ";
  width: 15px;
  height: 2px;
  position: absolute;
  transform: translateY(5px);
  border-radius: 2px;
  background-color: #000;
}
</style>
