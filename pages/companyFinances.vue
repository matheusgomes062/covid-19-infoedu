<template>
  <div>
    <Tips :title="title" :info="info" :tips="tips"></Tips>
  </div>
</template>

<script>
import Tips from "../components/Tips.vue";

export default {
  name: "companyFinances",
  data() {
    return {
      title: "Soluções e dicas para finanças de empresas durante a pandemia",
      info:
        "Com a nova alta de casos e internações por Covid-19, a recuperação econômica esperada para 2021 precisará ser adiada. Empreendedores nem bem se recuperaram do baque de 2020 e já precisam lidar com novas regras de restrição de funcionamento em datas importantes para o varejo, como Páscoa e, possivelmente, Dia das Mães.",
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
