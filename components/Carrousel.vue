<template>
  <div>
    <h3 style="text-align: center">Arraste para os lados para ver as dicas!</h3>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div
          v-for="(tip, index) in tips[0]"
          :key="index"
          @click="redirectToNews(tip.link)"
        >
          {{ tip.title }}
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          v-for="(tip, index) in tips[1]"
          :key="index"
          @click="redirectToNews(tip.link)"
        >
          {{ tip.title }}
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          v-for="(tip, index) in tips[2]"
          :key="index"
          @click="redirectToNews(tip.link)"
        >
          {{ tip.title }}
        </div></swiper-slide
      >
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "swiper-mousewheel-control",
  title: "Mousewheel control",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // }
      }
    };
  },
  props: {
    tips: Array
  },
  methods: {
    redirectToNews(link) {
      window.location = link;
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper {
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 1em * 2;
    // background-color: $default-gray;
    flex-direction: column;
    div {
      cursor: pointer;
      padding: 20px;
      margin: 10px 0;
      border-radius: 10px;
      align-items: center;
      background-color: $light-dark;
      // color: black;
      width: 100%;
      @include d(s) {
        width: 100%;
        padding: 20px;
        margin: 10px 0;
      }
    }
  }
}
.swiper-container {
  height: 300px;
  width: 500px;
  @include d(s) {
    width: 100%;
  }
}
</style>
