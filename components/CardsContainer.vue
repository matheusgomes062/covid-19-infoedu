<template>
  <div class="cardsContainer grid-12">
    <div
      @click="goToApi"
      class="card"
      v-for="(card, index) in cards"
      :key="index"
    >
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
      cards: [],
      covidInfo: null
    };
  },
  mounted() {
    this.fetchCardsInfo();
  },
  methods: {
    async fetchCardsInfo() {
      this.covidInfo = await this.$api.$get("/summary").catch(function(error) {
        console.log(error);
      });
      this.covidInfo = this.covidInfo.Global;
      console.log(this.covidInfo);
      this.cards.push(
        {
          number: this.covidInfo.NewDeaths,
          title: "Total de novas mortes"
        },
        {
          number: this.covidInfo.NewRecovered,
          title: "Total de novos recuperados"
        },
        {
          number: this.covidInfo.TotalConfirmed,
          title: "Total de casos confirmados"
        },
        {
          number: this.covidInfo.TotalRecovered,
          title: "Total de recuperados"
        }
      );
    },
    goToApi() {
      window.location = "https://covid19api.com/";
    }
  }
};
</script>

<style lang="scss">
.cardsContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 0;
  @include d(s) {
    flex-direction: column;
  }
}

.card {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 130px;
  padding: 10px;
  cursor: pointer;
  justify-content: center;
  background-color: $light-dark;
  border: 2px solid $pastel-gray;
  box-shadow: 0px 0px 15px $light-dark;
  border-radius: 10px;
  @include d(s) {
    width: 100%;
    margin: 10px 0;
  }
  p {
    text-align: center;
    font-weight: 700;
    margin: 5px;
    font-size: 1.5em;
    @include d(s) {
      font-size: 1.2em;
    }
  }
}
</style>
