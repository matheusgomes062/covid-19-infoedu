<template>
  <div class="titleAndCarrouselContainer">
    <div class="titleAndInfoContainer">
      <div class="titleContainer">
        <h1>{{ title }}</h1>
      </div>
      <section>
        {{ info }}
      </section>
    </div>
    <div class="tipsCarrouselContainer">
      <Carrousel :tips="tips"></Carrousel>
    </div>
  </div>
</template>

<script>
import Carrousel from "~/components/Carrousel.vue";

export default {
  name: "healthyEating",
  data() {
    return {};
  },
  props: {
    title: String,
    info: String,
    tips: Array
  },
  components: {
    Carrousel
  }
};
</script>

<style lang="scss" scoped>
.titleAndCarrouselContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 0;
}

.titleAndInfoContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  padding-top: 40px;

  h1 {
    font-size: 4em;
    font-weight: 900;
  }

  h2,
  h1 {
    margin: 10px 0;
  }
}

section {
  width: 450px;
  line-height: 1.6em;
}

.tipsCarrouselContainer {
  padding: 40px 0;
}
</style>
