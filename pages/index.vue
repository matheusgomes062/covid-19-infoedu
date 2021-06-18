<template>
  <div class="container">
    <div>
      <div class="titleAndPictureContainer">
        <div class="titleAndInfoContainer">
          <h2>188+ Países afetados pelo</h2>
          <h1>CORONAVÍRUS</h1>
          <section>
            O vírus foi inicialmente reportado em Wuhan, Hubel China em 17 de
            Novembro de 2019, e em 11 de Março de 2020 a Organização Mundial da
            Saúde (OMS) declarou o coronavírus como uma pandemia.
          </section>
        </div>
        <div class="imageContainer"></div>
      </div>
      <div class="cardsContainer">
        <div class="card">
          <p>9999+</p>
          <p>Total de mortes</p>
        </div>
        <div class="card">
          <p>9999+</p>
          <p>Total de mortes</p>
        </div>
        <div class="card">
          <p>9999+</p>
          <p>Total de mortes</p>
        </div>
        <div class="card">
          <p>9999+</p>
          <p>Total de mortes</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.titleAndPictureContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.titleAndInfoContainer {
  display: flex;
  flex-direction: column;
  h2,
  h1 {
    margin: 10px 0;
  }
  p {
    margin-top: 40px;
  }
}

.imageContainer {
  min-width: 500px;
  min-height: 500px;
  background-color: $default-gray;
  border-radius: 999999999px;
}

.cardsContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.card {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 130px;
  padding: 10px;
  cursor: pointer;
  justify-content: center;
  background-color: $default-gray;
  border-radius: 10px;
  p {
    text-align: center;
    font-weight: 700;
    margin: 5px;
  }
}
</style>
