<template>
  <div class="footer">
    <ul class="menu">
      <li class="menu__item">
        <img src="../img/docs.png" width="15" height="19">
        <p>Документи</p>
      </li>
      <li class="menu__item">
        <img src="../img/help.png" width="17" height="17">
        <p>Послуги</p>
      </li>
      <li class="menu__item">
        <img src="../img/message.png" width="17" height="21">
        <p>Повідомлення</p>
      </li>
      <li class="menu__item">
        <img src="../img/menu.png" width="17" height="16">
        <p>Меню</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

.footer {
  margin-top: 5%;
}

.menu {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

.menu__item {
  font-family: eRegular;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  width: 25%;
}
</style>
