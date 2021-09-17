<template>
<div class=" content ">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
 .content {
        grid-area: content;
        background-color: #efefef;
        padding: 20px;
    }
input {
    height: 50px;
    width: 60px;
    
    align-items: center;
    font-size: 40px;

    grid-column: span 1;
    grid-row-start: row1-start;
}
div.display {
    height: 100px;
    width: 500px;
    align-items: center;
    text-align: center;
    font-size: 100px;

    grid-column: span 2;
    grid-row: third-line / 4;
    
}
button{
   height: 200px;
   width: 200px;
}

</style>
