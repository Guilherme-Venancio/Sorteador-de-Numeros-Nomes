<template>
  <div class="back"><router-link to="/"><button class="btn btn-outline-primary m-1">
       Voltar
  </button></router-link></div>
</template>

<script>
export default {
name: "BackButton"
}
</script>

<style>
.back {
  position: absolute;
  justify-content: center;
  display:flex;
  bottom: 50px;
  left: 46%;
  
}

.back button{
  height: 50px;
  width: 100px;
}
</style>