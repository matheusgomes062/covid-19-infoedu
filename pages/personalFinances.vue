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
        [
          {
            title: "Faça o orçamento na ponta do lápis",
            link:
              "https://www.serasa.com.br/ensina/suas-economias/coronavirus-10-dicas/"
          },
          {
            title: "Na crise, corte despesas!",
            link:
              "https://www.em.com.br/app/noticia/bem-viver/2020/09/02/interna_bem_viver,1181701/que-esportes-oferecem-maior-ou-menor-risco-de-contagio-na-pandemia.shtml"
          },
          {
            title: "Renegocie gastos essenciais",
            link:
              "https://www.serasa.com.br/ensina/suas-economias/coronavirus-10-dicas/"
          }
        ],
        [
          {
            title: "Estipule limites de gastos mensais",
            link:
              "https://agenciafiep.com.br/2020/05/15/seis-dicas-para-organizar-melhor-as-suas-financas-durante-pandemia/"
          },
          {
            title: "Deixe o cheque especial para último caso",
            link:
              "https://agenciafiep.com.br/2020/05/15/seis-dicas-para-organizar-melhor-as-suas-financas-durante-pandemia/"
          }
        ],
        [
          {
            title: "Corte gastos supérfluos",
            link: "https://exal.com.br/financas-pessoais/"
          },
          {
            title: "Tenha autocontrole!",
            link:
              "https://idec.org.br/idec-na-imprensa/guia-para-o-bolso-dicas-para-financas-pessoais-durante-pandemia"
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
