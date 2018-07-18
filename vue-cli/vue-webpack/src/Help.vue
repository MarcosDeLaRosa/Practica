<template>
 <div>

   <ul>
     <li><router-link to="/login">Login</router-link></li>
     <li><router-link to="/home">Home</router-link></li>
     <li><router-link to="/help">Help</router-link></li>

   </ul>

   <h4>Yes, i am help</h4>
 </div>


</template>

<script>

</script>

<style scoped>
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
