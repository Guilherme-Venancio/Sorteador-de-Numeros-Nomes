<template>
  <div id="app" :class="{'hide-menu':!isMenuVisible}">
    <Header title="Sorteador TI" 
    :hidetoggle="false"
    :hideUserDropdown="false" />
    <Menu />
    <NUM1 />
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NUM1 from './components/Templates/NUM1.vue'
import Header from './components/Templates/Cabecalho.vue'
import Menu from './components/Templates/MENU.vue'
import Footer from './components/Templates/FOOTER.vue'

export default {
  components: { NUM1, Header, Menu, Footer },
  computed: mapState(['isMenuVisible'])
}
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
}

body{
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
      "header header"
      "menu content"
      "menu footer" ;
}
p.titulo{
  
  font-family: Arial, Helvetica, sans-serif;
  font-size: 70px;
}

#app.hide-menu{
  grid-template-areas:
  "header header"
  "content content"
  "footer footer";
}
</style>
