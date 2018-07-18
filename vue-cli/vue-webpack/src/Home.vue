<template>

  <div class="home" id="home">

    <ul>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/help">Help</router-link></li>

    </ul>

    <br>
    <br>
    <br>
    <br>
    <center>
    <h1>{{wel}}</h1>
    </center>
    <br>
    <br>
    <div id="cuerpo">
      <br>
      <div id="imagen1">
        <div id="imagen2">
          <div id="imagen3">
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    data(){
      return{
        wel: 'WELCOME'
      }
    }
  }

</script>

<style scoped>

  .home{
    position: center;
    background-color: black;
  }

  h1{
    color: white;
    font-style: italic;
    font-size: 80px;
  }

  #cuerpo{
    background-color: #999999;
  }

  #imagen1{
    background-image: url("https://images.vexels.com/media/users/3/129818/isolated/preview/de08e27e937857713fbd0dceb27c79dc-icono-del-c-rculo-del-reloj-by-vexels.png");
    background-size: 300px;
    background-repeat: no-repeat;
    height: 360px;
    margin-left: 120px;
  }

  #imagen2{
    background-image: url("https://images.vexels.com/media/users/3/132073/isolated/preview/5ded0426191618e9b7d33842d55e783c-c-rculo-de-seguridad-icono-by-vexels.png");
    background-size: 300px;
    background-repeat: no-repeat;
    height: 360px;
    margin-left: 350px;
  }

  #imagen3{
    background-image: url("https://images.vexels.com/media/users/3/136211/isolated/preview/5d5e1c663438b63ead0338450b1057df-casa-c-rculo-icono-de-wi-fi-by-vexels.png");
    background-size: 300px;
    background-repeat: no-repeat;
    height: 360px;
    margin-left: 350px;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #111111;
  }


</style>
