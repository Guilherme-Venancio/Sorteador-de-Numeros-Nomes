<template>
  <aside class="menu" v-show="isMenuVisible">                                   
  <a href="/">HOME</a>
  <a href="/ajuda">Ajuda</a>
  </aside>
</template>

<script>
import { mapState } from "vuex";


export default {
  name: "Menu",
  computed: mapState(["isMenuVisible"]),
  
}
</script>

<style>
.menu {
  color: white;
  grid-area: menu;
  background: linear-gradient(to right, #232526, #414345);

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.menu a {
   color: #fff;
        text-decoration: none;
        padding-top: 30px;
        padding-bottom: 20px;
        padding-left: 10px;
}
.menu a:hover{
        color: rgb(112, 112, 112);
}

    .menu .tree-node.selected > .tree-content,
    .menu .tree-node .tree-content:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .tree-arrow.has-child {
        filter: brightness(2);
    }
</style>