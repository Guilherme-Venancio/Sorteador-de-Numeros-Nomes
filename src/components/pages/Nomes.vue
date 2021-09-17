<template>
  <div class="nomes">
 <div>
    <textarea type="text" class="texto" v-model="texto" placeholder="Os textos devem ser separados por virgulas e iniciarem também com virgula.
Exemplo: 
,teste1,teste2,teste3,teste4,teste5
Pode ser usado quebra de linha.
Exemplo:
,teste1
,teste2
,teste3
,teste4
,teste5 " ></textarea>
  </div>

  <div>
  <button
  v-if="recar === 'true'"
  v-on:click="Embaralhar"
  class="btn btn-outline-primary m-1">
  Sortear
  </button>
  <button v-else class="btn btn-outline-primary m-1" onClick="window.location.reload()">
    Tentar Novamente
  </button>
  </div>

<div class="alert alert-primary p-5 m-1" :value="name" >
    <p class="font-weight-bold">Resultado</p>
        <h1 class="" >{{ name }}</h1>
    </div>
    <div class="data" :v-on="data">
      <h6>{{ data }}</h6>
    </div>
    <div v-show="load" class="load">
       <h1>Sorteando</h1>
    <img src="../../assets/Loader.gif" />
    </div>
<BackButton />
</div>
</template>

<script>
import BackButton from "../Templates/BackButton.vue"
export default {
   data: function(){
   return {
     recar: 'true',
     save:[],
     load: false,
     adicionar: "",
     name: "",
     texto: [],
     date: new Date,
     data:"",
     dia: new Array ("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"),
     mes: new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro"),
   }
  },
  name: 'Nome',
  components: { BackButton },
  mounted() {
    if (localStorage.getItem('save')) {
      try {
        this.texto = JSON.parse(localStorage.getItem('save'));
      } catch(e) {
        localStorage.removeItem('save');
      }
    }
  },
  methods:{
  Embaralhar(){
    this.name = ""
    this.load = true
    this.adicionar = this.texto.split(',')
    setTimeout( () => {
    this.name = this.adicionar[Math.ceil(Math.random() * (this.adicionar.length - 1))]
    console.log(this.name)
    this.load = false
    this.data =(" Sorteado na " + this.dia[this.date.getDay() ] + " (" + this.date.getDate () + ")" + " de " + this.mes [this.date.getMonth() ]   +  " de "  +     this.date.getFullYear () + " às " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds())
    this.recar = 'false'
   },2000)
  },
 
  }
}
</script>

<style>
 .nomes {
        background-color: #efefef;
    }
.texto{
        height: 150px;
        width: 550px;
    }
input {
    height: 50px;
    width: 60px;
    
    align-items: center;
    font-size: 40px;

}
div.display {
    height: 100px;
    width: 500px;
    align-items: center;
    text-align: center;
    font-size: 100px;

    
}
button{
  font-size: 1.3em;
  background-color: rgb(240, 244, 247);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   height: 120px;
   width: 140px;
    
}
.load{
  display: flex;
  background-color: white;
  position: absolute;
  text-align: center;
  right: 40%;
  top: 150px;
}
.load h1{
color: black;
position: absolute;
}
.data h6{
 font-family: italic;
 font-size: 1.0em;
}
</style>
