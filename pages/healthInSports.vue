<template>
  <div>
    <Tips :title="title" :info="info" :tips="tips"></Tips>
  </div>
</template>

<script>
import Tips from "../components/Tips.vue";

export default {
  name: "healthySports",
  data() {
    return {
      title: "Soluções e dicas para saúde nos esportes durante a pandemia",
      info:
        "Durante a pandemia do novo coronavírus, diante das medidas de distanciamento social, a maioria dos praticantes de atividade física passou a realizar seus treinamentos dentro de casa, adaptando também essa parte da vida aos novos tempos. ",
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
