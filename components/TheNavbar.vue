<template>
  <header class="headerContainer">
    <h1 @click="$router.push('/')" style="cursor: pointer">COVID-19</h1>

    <div
      v-if="!isNavOpen"
      v-html="srcSvg('menu')"
      @click="openNav"
      id="menu-icon"
      class="openBtn"
    ></div>
    <div :class="[isNavOpen ? 'sideNavbar' : 'noSideNavbar']">
      <h2>Soluções e dicas para...</h2>
      <div
        v-html="srcSvg('chevron-right')"
        @click="openNav"
        id="close-icon"
        class="closeBtn"
      ></div>
      <div class="linksContainer">
        <NuxtLink to="/healthyEating" class="link"
          >Alimentação durante a pandemia</NuxtLink
        >
        <NuxtLink to="/healthInSports" class="link"
          >Saúde nos esportes durante a pandemia</NuxtLink
        >
        <NuxtLink to="/personalFinances" class="link"
          >Finanças pessoais durante a pandemia</NuxtLink
        >
        <NuxtLink to="/companyFinances" class="link"
          >Finanças para empresas durante a pandemia</NuxtLink
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheNavbar",
  data() {
    return {
      isNavOpen: false
    };
  },
  methods: {
    openNav() {
      this.isNavOpen = !this.isNavOpen;
    }
  }
};
</script>

<style lang="scss">
.headerContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}

/* The sidebar menu */
.sideNavbar {
  width: 600px;
  height: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  background-color: $pastel-gray;
  overflow-x: hidden;
  padding-top: 100px;
  transition: width 0.5s;
  white-space: nowrap;
  @include d(s) {
    width: 100%;
    white-space: initial;
  }

  h2 {
    padding: 8px 8px 8px 32px;
    color: $base-dark;
  }
  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 1.3em;
    color: $base-dark;
    display: block;
    transition: 0.3s;
    &:hover {
      color: $light-dark;
      cursor: pointer;
    }
  }
}

.noSideNavbar {
  width: 0px;
  width: 0px;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: $base-dark;
  overflow-x: hidden;
  padding-top: 100px;
  transition: width 0.5s;
  white-space: nowrap;
  display: show;
}

.linksContainer {
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.sideNavbar .closeBtn {
  position: absolute;
  top: 30px;
  left: 25px;
  font-size: 36px;
  margin-right: 50px;
}

/* The button used to open the sidebar */
.openBtn,
.closeBtn {
  width: 40px;
  height: 40px;
  /* font-size: 20px; */
  cursor: pointer;
  /* background-color: #111; */
  // background-color: $base-dark;
  color: $base-dark;
  /* padding: 10px 15px;
  border: none; */
}

.openBtn {
  color: $pastel-gray;
}

.openBtn:hover {
  /* background-color: #444; */
}
</style>
