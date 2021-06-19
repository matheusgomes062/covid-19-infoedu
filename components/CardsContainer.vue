<template>
  <div class="cardsContainer">
    <div class="card" v-for="(card, index) in cards" :key="index">
      <p>{{ card.number }} +</p>
      <p>{{ card.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardsContainer",
  data() {
    return {
      cards: [
        {
          number: 9999,
          title: "Total de mortes"
        },
        {
          number: 9999,
          title: "Total de mortes"
        },
        {
          number: 9999,
          title: "Total de mortes"
        },

        {
          number: 9999,
          title: "Total de mortes"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.cardsContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 0;
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
    font-size: 1.5em;
  }
}
</style>
