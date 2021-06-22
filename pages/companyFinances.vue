<template>
  <div>
    <div class="titleAndPictureContainer">
      <div class="titleAndInfoContainer">
        <div class="titleContainer">
          <h2>188+ Países afetados pelo</h2>
          <h1>CORONAVÍRUS</h1>
        </div>
        <section>
          O vírus foi inicialmente reportado em Wuhan, Hubel China em 17 de
          Novembro de 2019, e em 11 de Março de 2020 a Organização Mundial da
          Saúde (OMS) declarou o coronavírus como uma pandemia.
        </section>
      </div>
      <div class="imageContainer"></div>
    </div>
  </div>
</template>

<script>
import CardsContainer from "~/components/CardsContainer";

export default {
  name: "companyFinances",
  data() {
    return {};
  },
  components: {
    CardsContainer
  }
};
</script>

<style lang="scss" scoped>
.titleAndPictureContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 0;
}

.titleAndInfoContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  margin-top: 40px;

  h1 {
    font-size: 4em;
    font-weight: 900;
  }

  h2,
  h1 {
    margin: 10px 0;
  }
}

section {
  width: 450px;
  line-height: 1.6em;
}

.imageContainer {
  min-width: 500px;
  min-height: 500px;
  background-color: $default-gray;
  border-radius: 999999999px;
}
</style>
