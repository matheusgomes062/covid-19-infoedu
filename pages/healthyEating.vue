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
        [
          {
            title: "Evite Fast-foods",
            link: "https://www.asbran.org.br/storage/arquivos/guiaCOVID19.pdf"
          },
          {
            title: "Evite exceder no álcool",
            link:
              "http://www.saude.pa.gov.br/wp-content/uploads/2020/06/Alimenta%C3%A7%C3%A3o-e-Nutri%C3%A7%C3%A3o-em-Tempos-de-Pandemia.pdf"
          },
          {
            title: "Prefira alimentos in natura",
            link:
              "https://saudebrasil.saude.gov.br/eu-quero-me-alimentar-melhor/qual-o-papel-de-uma-alimentacao-adequada-e-saudavel-durante-a-pandemia-de-covid"
          }
        ],
        [
          {
            title: "Evite Alimentos Ultraprocessados",
            link:
              "https://actbr.org.br/post/alimentacao-em-tempos-de-pandemia/18795/"
          },
          {
            title: "Prepare as principais refeições de forma equilibrada",
            link:
              "https://www.asbran.org.br/storage/downloads/files/2020/03/guia-alimentar-covid-19.pdf"
          }
        ],
        [
          {
            title: "Utilize menos óleos, gorduras, sal e açúcar",
            link:
              "https://actbr.org.br/post/alimentacao-em-tempos-de-pandemia/18795/"
          },
          {
            title:
              "Seja crítico as mensagens e dados sobre alimentação em propagandas",
            link:
              "https://www.asbran.org.br/storage/downloads/files/2020/03/guia-alimentar-covid-19.pdf"
          }
        ]
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
