<template>
  <div class="">
       <PageTitle icon="fa fa-list-ul" main="Ajuda" />
          <div class="Manual">
             <a href="" target="_blank" download="Manual.pdf">Modo de Uso</a>
             <a href="" download="Termo.pdf">Termos e privacidade</a>
          </div>
       <Back-Button />
   </div>
</template>

<script>
import PageTitle from '../Templates/PageTitle.vue'
import BackButton from '../Templates/BackButton.vue'

export default {
 name: 'Ajuda',
 components: { PageTitle, BackButton }
}
</script>

<style>
.Manual a{
   display: flex;
   align-items: center; 
   padding-top: 20px;
   
}
</style>