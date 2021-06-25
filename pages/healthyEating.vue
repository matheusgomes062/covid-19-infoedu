<template>
  <div>
    <Tips :title="title" :info="info" :tips="tips"></Tips>
  </div>
</template>

<script>
import Tips from "../components/Tips.vue";

export default {
  name: "healthyEating",
  data() {
    return {
      title: "Soluções e dicas para alimentação durante a pandemia",
      info:
        "A pandemia de coronavírus impôs uma nova rotina para os brasileiros: ficar dentro de casa. Com exceção de serviços essenciais, como farmácias e supermercados, os comércios estão fechando em diversos estados do país, e as pessoas estão adotando a quarentena.",
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
