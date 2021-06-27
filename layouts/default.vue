<template>
  <div class="container"><TheNavBar /><Nuxt /></div>
</template>

<script>
import TheNavBar from "~/components/TheNavbar";

export default {
  components: {
    TheNavBar
  }
};
</script>

<style lang="scss">
html {
  font-family: "Avenir", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: $base-dark-2;
}

body {
  color: $pastel-gray;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
