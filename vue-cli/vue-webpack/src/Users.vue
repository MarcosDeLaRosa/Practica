<template>

  <div>

    <ul>
    <li><router-link to="/crearOrden">Crear Orden</router-link></li>
    <li><router-link to="/home">Ordenes Despachadas</router-link></li>
    <li><router-link to="/help">Ordenes Entregadas</router-link></li>
    <li id="exit"><router-link to="/login">Exit</router-link></li>

  </ul>

    <h1>Bienvenido a los usuarios</h1>
    <button @click="goHome">Home</button>
  </div>
</template>

<script>
export  default {
  methods:{
    goHome(){
      this.$router.push('/home');

    }
  }

}


</script>

<style scoped>


  li {
    float: left;
  }

  #exit{
    float: right;
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
