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
        [
          {
            title: "Faça atividade física de maneira regular",
            link:
              "https://g1.globo.com/bemestar/coronavirus/noticia/2020/03/20/coronavirus-como-manter-a-rotina-de-atividades-fisicas-mesmo-em-quarentena.ghtml"
          },
          {
            title: "Evite esportes de contato",
            link:
              "https://www.em.com.br/app/noticia/bem-viver/2020/09/02/interna_bem_viver,1181701/que-esportes-oferecem-maior-ou-menor-risco-de-contagio-na-pandemia.shtml"
          }
        ],
        [
          {
            title: "Defina objetivos",
            link:
              "https://www.uol.com.br/vivabem/colunas/paola-machado/2021/06/11/5-dicas-para-o-retorno-as-atividades-esportivas.htm"
          },
          {
            title: "Defina um cronograma adequado",
            link:
              "https://www.uol.com.br/vivabem/colunas/paola-machado/2021/06/11/5-dicas-para-o-retorno-as-atividades-esportivas.htm"
          }
        ],
        [
          {
            title: "Esportes ao ar livre são a melhor escolha",
            link:
              "https://www.folhadelondrina.com.br/saude/cinco-atividades-fisicas-para-manter-o-ritmo-na-pandemia-3040117e.html"
          },
          {
            title: "Crie um caderno de rotinas esportivas",
            link: "https://impulsiona.org.br/cadernos-rotina-quarentena/"
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
