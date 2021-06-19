<template>
  <header class="headerContainer">
    <h1>COVID-19</h1>

    <div
      v-if="!isNavOpen"
      v-html="srcSvg('menu')"
      @click="openNav"
      id="menu-icon"
      class="openBtn"
    ></div>
    <div v-else class="sideNavbar">
      <h2>Soluções e dicas para...</h2>
      <div
        v-html="srcSvg('chevron-right')"
        @click="openNav"
        id="close-icon"
        class="closeBtn"
      ></div>
      <div class="linksContainer">
        <a class="link">Alimentação durante a pandemia</a>
        <a class="link">Saúde durante a pandemia nos esportes</a>
        <a class="link">Finanças pessoais durante a pandemia</a>
        <a class="link">Finanças para empresas durante a pandemia</a>
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
  z-index: 1;
  top: 0;
  right: 0;
  background-color: $default-gray;
  overflow-x: hidden;
  padding-top: 100px;
  transition: 0.5s;
  white-space: nowrap;

  h2 {
    padding: 8px 8px 8px 32px;
  }
  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 1.3em;
    color: #818181;
    display: block;
    transition: 0.3s;
    &:hover {
      color: #f1f1f1;
      cursor: pointer;
    }
  }
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
  /* color: black;
  padding: 10px 15px;
  border: none; */
}

.openBtn:hover {
  /* background-color: #444; */
}
</style>
