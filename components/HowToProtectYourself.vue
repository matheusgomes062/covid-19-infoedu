<template>
  <div class="sectionContainer">
    <h1>Como se proteger</h1>
    <div class="circlesContainer">
      <div class="circleTitleContainer">
        <h3>Lave as mãos</h3>
        <img
          src="~/assets/pictures/wash-your-hands.png"
          alt="mask"
          class="circle"
        />
      </div>
      <div class="circleTitleContainer">
        <h3>Matenha Distância</h3>
        <img
          src="~/assets/pictures/social-distancing.png"
          alt="mask"
          class="circle"
        />
      </div>
      <div class="circleTitleContainer">
        <h3>Use Máscara</h3>
        <img src="~/assets/pictures/mask.png" alt="mask" class="circle" />
      </div>
      <div class="circleTitleContainer">
        <h3>Use álcool em gel</h3>
        <img
          src="~/assets/pictures/disinfectant.png"
          alt="mask"
          class="circle"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "howToProtectYourself"
};
</script>

<style lang="scss" scoped>
.sectionContainer {
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @include d(sm) {
    height: fit-content;
  }
}

h1 {
  font-size: 4em;
  font-weight: 900;
  @include d(sm) {
    text-align: center;
  }
}

.circlesContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 500px;
  @include d(m) {
    flex-direction: row;
    flex-wrap: wrap;
    height: fit-content;
  }
  @include d(s) {
    flex-direction: column;
    align-items: center;
    height: fit-content;
  }

  :nth-child(even) {
    justify-content: flex-end;
  }
}

.circleTitleContainer {
  text-align: center;
  display: flex;
  flex-direction: column;
  @include d(sm) {
    margin: 40px 0;
    align-items: center;
  }
  h3 {
    margin: 10px 0;
    @include d(m) {
      font-size: 1.5em;
      font-weight: 600;
    }
    @include d(s) {
      font-size: 2em;
      font-weight: 600;
    }
  }
  .circle {
    width: 200px;
    height: 200px;
    padding: 30px;
    border-radius: 99999px;
    background-color: $light-dark;
    @include d(m) {
      width: 300px;
      height: 300px;
    }
    @include d(s) {
      width: 350px;
      height: 350px;
    }
  }
}
</style>
