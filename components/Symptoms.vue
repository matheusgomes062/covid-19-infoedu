<template>
  <div class="sectionContainer">
    <h1 class="symptomsTitle">Sintomas</h1>
    <div class="symptomsCircleContainer">
      <div class="symptonsContainer">
        <div class="symptonsColumn">
          <div class="symptom">
            Dor de cabeça
          </div>
          <div class="symptom">
            Dor de cabeça
          </div>
          <div class="symptom">
            Dor de cabeça
          </div>
        </div>
        <div class="symptonsColumn">
          <div class="symptom">
            Dor de cabeça
          </div>
          <div class="symptom">
            Dor de cabeça
          </div>
          <div class="symptom">
            Dor de cabeça
          </div>
        </div>
      </div>
      <div class="circle"></div>
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

<style lang="scss">
.sectionContainer {
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.symptomsTitle {
  font-size: 4em;
  font-weight: 900;
  display: flex;
  justify-content: flex-end;
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

    .symptonsColumn {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      div {
        width: 200px;
        padding: 20px;
        background-color: $default-gray;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
      }
    }
  }
}

.circle {
  width: 500px;
  height: 500px;
  background-color: $default-gray;
  border-radius: 999999px;
}
</style>
