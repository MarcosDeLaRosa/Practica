<template>
<div class="crearOrden">
  <ul>
    <li><router-link to="/crearOrden">Crear Orden</router-link></li>
    <li><router-link to="/home">Ordenes Despachadas</router-link></li>
    <li><router-link to="/help">Ordenes Entregadas</router-link></li>
    <li id="exit"><router-link to="/login">Exit</router-link></li>

  </ul>
   <div id="caja">
     <h1>Crear Orden</h1>
     <hr>
     <div id="filtrar">
     <input type="text" class="col-md-5" :placeholder="filtar" />
       <button id="fil" class="btn btn-primary">Buscar</button>
     </div>
     <br>
     <div id="datos">
       <div id="nombre">
         <h4>
           Numero de orden: <input type="text" v-model="numero" />
           Estado: <input type="text" v-model="estado" />
           Tipo: <input type="text" />
         </h4>
         <br>
         <h4>
           Fecha: <input  type="text" :placeholder="fecha" />
           Cliente: <input type="text" />
           <button type="button" class="btn btn-primary" @click="aumentar" >Crear Orden</button>
           <button id="ver" class="btn btn-default" @click="ocultar">Ver ordenes</button>
         </h4>
       </div>
     </div>

     <div id="table">
       <table class="table">
         <thead>
         <tr>
           <th>Numero de Orden</th>
           <th>Cliente</th>
           <th>Estado</th>
           <th>Fecha de Despacho</th>
         </tr>
         </thead>
         <tbody>
         <tr>
           <td>2455245</td>
           <td>Popular</td>
           <td>Despachada</td>
           <td>08/28/2017</td>
         </tr>
         <tr>
           <td>5642318</td>
           <td>Popular</td>
           <td>Entregada</td>
           <td>08/28/2017</td>
         </tr>
         <tr>
           <td>24528245</td>
           <td>Popular</td>
           <td>Despachada</td>
           <td>08/28/2017</td>
         </tr>
         </tbody>
       </table>


     </div>

     <div id="create">
     <button id="oculTab" class="btn btn-default" @click="ocul">Ocultar Ordenes</button>
     </div>
     <br>
     <br>



   </div>

</div>
</template>

<script>
    export default {
        data(){
          return{
            filtar: "Ingrese la orden que desea filtar",
            estado:"Inicial",
            numero: 0,
            fecha: "xx-xx-xxxx",
          }
        },
      methods:{
          aumentar(){
           this.numero++;
          },
        ocultar(){
            document.getElementById("table").style.display='block';
            document.getElementById("ver").style.display='none';
            document.getElementById("create").style.display='block';
        },
        ocul(){
         document.getElementById("table").style.display='none';
          document.getElementById("create").style.display='none';
          document.getElementById("ver").style.display='block';

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

  #caja{
    margin-left: 160px;
    margin-top: 100px;
    background-color: #999999;
    margin-right: 100px;
    border-color: black;
    border-radius: 5px;
    border-bottom-style: outset;
  }

  h1 {
    color: white;
    margin-left: 20px;
  }

  #fil{
    height: 30px;
  }
  #filtrar{
    margin-left: 20px;
  }

  #create{
    margin-left: 20px;
    display: none;
  }

  #datos{
    margin-left: 20px;
  }

  input {
    border: 2px solid black;
    border-radius: 4px;
  }

  h4{}

  #table{
    margin-left: 20px;
    margin-right: 30px;
  }

  #table{
    display: none;
  }

  thead{
    color: #0f0f0f;
  }


</style>
