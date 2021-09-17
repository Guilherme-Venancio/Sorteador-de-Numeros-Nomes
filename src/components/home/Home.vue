<template>
  <div class="home">
    <Page-Title icon="fa fa-home" main="HOME" sub="Sorteador" />
    <div class="stats">
      <router-link to="/numero">
        <i class="fa fa-gamepad"><h1>Sorteador de Números</h1></i></router-link>
      <router-link to="/nome">
        <i class="fa fa-gamepad"><h1>Sorteador de Nomes</h1></i></router-link>
    </div>
  </div>
</template>

<script>
import PageTitle from "../Templates/PageTitle.vue";

export default {
  name: "Home",
  components: { PageTitle },
};
</script>

<style>
.stats {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1;
  border-radius: 8px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 100px;
}
.stats i {
  width: 500px;
  height: 200px;
  text-decoration: none;
  color: black;
  font-size: 3rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 100);
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-align: center;
}
.stats i:hover {
  background: rgb(0, 174, 255);
}
</style>