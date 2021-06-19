<template>
  <div class="sectionContainer">
    <h1>Como se proteger</h1>
    <div class="circlesContainer">
      <div class="circleTitleContainer">
        <h3>Lave as mãos</h3>
        <div class="circle"></div>
      </div>
      <div class="circleTitleContainer">
        <h3>Matenha Distância</h3>
        <div class="circle"></div>
      </div>
      <div class="circleTitleContainer">
        <h3>Use Máscara</h3>
        <div class="circle"></div>
      </div>
      <div class="circleTitleContainer">
        <h3>Use álcool em gel</h3>
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "howToProtectYourself"
};
</script>

<style lang="scss">
.sectionContainer {
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h1 {
  font-size: 4em;
  font-weight: 900;
}

.circlesContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 500px;
  :nth-child(even) {
    justify-content: flex-end;
  }
}

.circleTitleContainer {
  text-align: center;
  display: flex;
  flex-direction: column;
  h3 {
    margin: 10px 0;
  }
  .circle {
    width: 200px;
    height: 200px;
    background-color: $default-gray;
    border-radius: 99999px;
  }
}
</style>
