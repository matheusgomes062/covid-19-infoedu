<template>
  <div>
    <Tips :title="title" :info="info" :tips="tips"></Tips>
  </div>
</template>

<script>
import Tips from "../components/Tips.vue";

export default {
  name: "personalFinances",
  data() {
    return {
      title: "Soluções e dicas para finanças pessoais durante a pandemia",
      info:
        "A crise causada pela pandemia de Covid-19 pegou muitas empresas, empresários e trabalhadores de surpresa, tanto emocionalmente quanto financeiramente. Uma pesquisa realizada pela global Willis Towers Watson mostra que a preocupação com a situação financeira afeta negativamente a saúde e o bem-estar dos colaboradores, bem como seu engajamento no trabalho.",
      tips: [
        {
          title: "teste 1"
        },
        {
          title: "teste 2"
        },
        {
          title: "teste 3"
        }
      ]
    };
  },
  props: {},
  components: {
    Tips
  }
};
</script>

<style lang="scss" scoped></style>
