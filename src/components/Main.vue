<template>
  <div class="flex">
    <div @click="isCardFlipped = true" class="block">
      <div :class="isCardFlipped ? '-front' : ''" class="front">
        <div class="main__title">
          <h1>Паспорт громадянина <br> України</h1>
        </div>
        <div class="main__info">
          <div class="main__info--left side">
            <img src="../img/photo.png">
          </div>
          <div class="main__info--right side">
            <div class="main__right--date">
              <p>Дата <br> народження: <br> 14.07.2002</p>
            </div>
            <div class="main__right--number">
              Номер: <br> 001738565
            </div>
            <div class="main__right--signature">
              <img src="../img/signature.png">
            </div>
          </div>
        </div>
        <div class="main__fio">
          <div class="main__name--title">
            <p>Перекупко <br> Артем <br> Юрійович</p>
          </div>
          <div class="main__name--circle">
            <span></span>
          </div>
        </div>
      </div>
      <div :class="isCardFlipped ? '-back' : ''" class="back">
        <div class="main__back">
          <div class="back__title">
            <p>Коди діятимуть 3 хв</p>
          </div>
          <div class="back__qr">
            <img src="../img/qrcode.png">
          </div>
          <div class="back__qrline">
            <img src="../img/qrlne.png">
          </div>
          <div @ class="back__text">
            <p>{{ randomNumber }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="main__updated">
      <div class="main__updated--date">
        <p>Дані оновлені {{ new Date().toLocaleDateString() }} о {{ new Date().getHours() }}:{{
            new Date().getMinutes()
          }}</p>
      </div>
      <div class="main__updated--circle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      isCardFlipped: false,
    }
  },
  computed: {
    randomNumber() {
      return Math.floor(Math.random() * (999999999999 - 4545454545454) + 4545454545454)
    }
  }
}
</script>

<style scoped>

.main__back {
  transform: translateY(-30px);
}

.front,
.back {
  transition: .35s;
  backface-visibility: hidden;
}

.back {
  transform: perspective(2000px) rotateY(-180deg) rotateX(0deg) rotate(0deg);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -379px;
  justify-content: center;
}

.back__title {
  text-transform: uppercase;
  color: #6b767f;
  font-family: eLight;
  font-size: 12px;
  padding-bottom: 24px;
  align-self: flex-start;
}

.back__qr {
  padding-bottom: 20px;
}

.back__qr img,
.back__qrline img {
  max-width: 250px;
  width: 100%;
}

.back__text {
  text-align: center;
  font-family: eRegular;
  letter-spacing: 6.2px;
  font-size: 14px;
}

.back__qrline {
  padding-bottom: 5px;
}

.-front {
  transform: perspective(2000px) rotateY(180deg) rotateX(0deg) rotateZ(0deg);
}

.-back {
  transform: perspective(2000px) rotateY(0) rotateX(0deg) rotateZ(0deg);
}

.block {
  width: 100%;
  border-radius: 6px;
  box-shadow: 0px 22px 6px -13px rgba(34, 60, 80, 0.2);
  background-color: #d8e3f3;
  padding: 35px 20px;
  display: flex;
  flex-direction: column;
}

.main__title {
  font-family: eLight;
  font-size: 14px;
  padding-bottom: 30px;
}

.main__title h1::after {
  content: ' ';
  position: absolute;
  width: 16px;
  height: 21px;
  background-image: url('../img/Logoblock_02.png');
  background-size: cover;
  background-position: center center;
  margin-left: 13px;
  margin-top: 10px;
}

.main__info {
  display: flex;
  font-family: eRegular;
  font-size: 18px;
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 3px solid #b0c6e6;
}

.side {
  width: 50%;
}

.main__info--left img {
  max-width: 100%;
  width: 100%;
  border: 3px solid #b0c6e6;
}

.main__info--right {
  padding-left: 20px;
}

.main__right--number {
  margin-top: 30px;
}

.main__right--signature {
  margin-top: 30px;
}

.main__right--signature img {
  max-width: 98px;
  width: 100%;
}

.main__fio {
  font-family: eRegular;
  font-size: 28px;
  display: flex;
  justify-content: space-between;
}

.main__name--circle {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
}

.main__name--circle span {
  width: 4px;
  height: 4px;
  background-color: #000;
  border-radius: 50%;
}

.main__name--circle span::after {
  content: ' ';
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: #000;
  border-radius: 50%;
  transform: translateX(-7px);
}

.main__name--circle span::before {
  content: ' ';
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: #000;
  border-radius: 50%;
  transform: translateX(7px);
}

.main__updated {
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  text-align: center;
  padding-top: 15px;
}

.main__updated p {
  font-size: 10px;
  font-family: eMedium;
}

.main__updated--circle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
}

.main__updated--circle span:first-child {
  width: 7px;
  height: 7px;
  background-color: #000;
  border-radius: 50%;
}

.main__updated--circle span {
  width: 5px;
  height: 5px;
  background-color: #7b8aa1;
  border-radius: 50%;
  margin-left: 5px;
}

@media only screen and (max-width: 480px) {
  .block {
    padding: 25px 20px;
  }

  .main__title {
    font-size: 3.1vw;
    padding-bottom: 25px;
  }

  .main__info {
    font-size: 4vw;
    margin-bottom: 15px;
  }

  .main__right--number {
    margin-top: 20px;
  }

  .main__right--signature {
    margin-top: 30px;
  }

  .main__right--signature img {
    max-width: 75px;
  }

  .main__fio {
    font-size: 6vw;
  }
}

</style>
