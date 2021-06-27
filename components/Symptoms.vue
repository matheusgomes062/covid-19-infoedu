<template>
  <div class="sectionContainer">
    <h1 class="symptomsTitle">Sintomas</h1>
    <div class="symptomsCircleContainer">
      <div class="symptonsContainer">
        <div class="symptonsColumn">
          <div class="symptom">
            Febre
          </div>
          <div class="symptom">
            Dor de cabeça
          </div>
          <div class="symptom">
            Tosse seca
          </div>
        </div>
        <div class="symptonsColumn">
          <div class="symptom">
            Garganta seca
          </div>
          <div class="symptom">
            Fadiga
          </div>
          <div class="symptom">
            Perda de paladar
          </div>
        </div>
      </div>
      <img src="~/assets/pictures/fever.jpeg" alt="fever" class="circle" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Symptoms",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.sectionContainer {
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @include d(s) {
    height: 450px;
  }
}

.symptomsTitle {
  font-size: 4em;
  font-weight: 900;
  display: flex;
  justify-content: flex-end;
  @include d(s) {
    justify-content: center;
  }
}

.symptomsCircleContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .symptonsContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 500px;
    @include d(s) {
      justify-content: space-around;
      width: 100%;
    }

    .symptonsColumn {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      @include d(s) {
        height: 300px;
      }

      div {
        width: 200px;
        padding: 20px;
        background-color: $light-dark;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        font-weight: 500;
        box-shadow: 0px 5px 15px $base-dark;
      }
    }
  }
}

.circle {
  width: 500px;
  height: 500px;
  background-color: $default-gray;
  border-radius: 999999px;
  box-shadow: 0px 0px 25px $base-dark;

  @include d(s) {
    display: none;
  }
}
</style>
