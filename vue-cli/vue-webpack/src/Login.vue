<template xmlns:v-on="http://www.w3.org/1999/html">
  <body>
  <ul>
    <li><router-link to="/login">Login</router-link></li>
    <li><router-link to="/home">Home</router-link></li>
    <li><router-link to="/help">Help</router-link></li>

  </ul>
  <div class="login">
  <center>
    <div class="img" id="img">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
  <h4>{{name1}}  <input id="usuario" type="text" :placeholder="name1" /> </h4>
  <h4>{{name2}}  <input id="password" type="password" :placeholder="name2" /> </h4>
    <label id="info"></label>
    <br>
    <button class="btn btn-primary" @click="confirmar">Continuar</button>
  </center>
</div>
  </body>
</template>

<script>
export default {
  data (){
    return{
      name1: 'User',
      name2: 'Password'
    }
  },
  methods:{
    confirmar(){
      var usuario = document.getElementById("usuario").value;
      var password = document.getElementById("password").value;
      if (usuario != "Marcos"){
        document.getElementById("info").innerHTML = "Datos incorrectos";
      }else{
        if(password != "Marcos"){
          document.getElementById("info").innerHTML = "Datos incorrectos";
        }else{
          this.$router.push('/users');
        }
      }
    }
  }
}


</script>

<style scoped>

.login{
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 20%;
  background-color: #999999 ;
  border-bottom-right-radius: 40px;
  border-bottom-style: double;
}
  h1, h4{
    position: center;
  }

  #info{
    color: red;
  }

  #img{
    background-image: url("https://orig00.deviantart.net/80be/f/2015/199/7/7/welcome___banner__2__by_miikup-d91tin0.png");
    background-position: center center;
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

  input{
    border-radius: 3px;
  }

#usuario{
  margin-left: 40px;
  border-bottom-style: ridge;
}

  #password{
    border-buttom-style: ridge;
  }


</style>
