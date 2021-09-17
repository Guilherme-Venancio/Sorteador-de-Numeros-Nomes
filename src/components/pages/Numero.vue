<template>
  <div class="numero">
 <div class="botoes">
     
    <input class="m-1" type="number" v-model.number="number1" min="1" >
  
    <input class="m-1" type="number"  v-model.number="number2" min="1" >
    
  </div>

  <div class="botao">
  <button
  v-if="recar === 'true'"
  v-on:click="Calculo"
  class="btn btn-outline-primary m-1">
   Sortear
  </button>
  <button v-else class="btn btn-outline-primary m-1" onClick="window.location.reload()">
    Tentar Novamente
  </button>
  </div>

<div class="alert alert-primary p-5 m-1" :value="soma" id="display" >
    <p class="font-weight-bold">Resultado</p>
        <h1 class="">{{ value }}</h1>
    </div>
  <div class="data" :v-on="data">
    <h6>{{ data }}</h6>
  </div>
    <div v-show="load" class="load">
       <h1>Sorteando</h1>
    <img src="../../assets/Loader.gif" />
    </div>
<Back-Button />
</div>
</template>

<script>
import BackButton from "../Templates/BackButton.vue"
export default {
   data: function(){
   return {
     recar: 'true',
     date: new Date,
     data:" ",
     dia: new Array ("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"),
     mes: new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro"),
     soma: "",
     number1:"0",
     number2:"99",
     load: false
   }
  },
  name: 'Numero',
  components: { BackButton },
  methods:{
  Calculo(){
    this.data =""
    this.value = ""
    this.load = true
     if(this.number1 === "0"){
       window.alert("Escolha um valor inicial")
       this.load = false
       this.recar= 'true'
       }else{
     setTimeout( () => {
     this.value = (Math.random() * (this.number2 - this.number1) + this.number1
     ).toFixed(0);
     this.soma = this.value
     this.load = false
     this.data =(" Sorteado na " + this.dia[this.date.getDay() ] + " (" + this.date.getDate () + ")" + " de " + this.mes [this.date.getMonth() ]   +  " de "  +     this.date.getFullYear () + " às " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds())
    },2000)
    console.log(this.soma)
    this.recar="false"}
  },
  }
}
</script>

<style scoped>
 .numero {
   display: flex;
        background-color: #efefef;
        padding: 20px;
        align-items: center;
        flex-direction: column;
    }

input {
    height: 50px;
    width: 100px;
    font-size: 40px;

}
div#display {
    height: 200px;
    width: 570px;
    align-items: center;
    text-align: center;
    font-size: 30px;
    
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
  justify-content: center;
  text-align: center;
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
