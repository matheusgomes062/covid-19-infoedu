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
