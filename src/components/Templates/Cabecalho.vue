<template>
  <header class="header">
    <a class="toggle" @click="toggleMenu" v-if="!hidetoggle">
      <i class="fa fa-align-justify" :class="icon"></i>
    </a>
    <h1 class="title">
      <router-link to="/">{{ title }}</router-link>
    </h1>
    <UserDropdown v-if="!hideUserDropdown" />
  </header>
</template>

<script>
import UserDropdown from './UserDropdown.vue'

export default {
 name:"Header",
 components: { UserDropdown },
 props: {
   title: String,
   hidetoggle: Boolean,
   hideUserDropdown: Boolean
 },
 computed:{
   icon() {
     return "fa fa-align-justify"
   }
 },
 methods: {
   toggleMenu() {
       this.$store.commit('toggleMenu')
   }
 }
}
</script>

<style>
.header {
        grid-area: header;
        background: rgb(0, 0, 255);

        display: flex;
        justify-content: center;
        align-items: center;
} .title {
        padding-left: 100px;
        position: relative;
        font-size: 1.2rem;
        color: #fff;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }

    .title a {
        color: #FFF;
        text-decoration: none;
    }

    .title a:hover {
        color: #FFF;
        text-decoration: none;
    }

    header.header > a.toggle {
        width: 60px;
        height: 100%;
        color: #fff;
        justify-self: flex-start;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    header.header > a.toggle:hover {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>