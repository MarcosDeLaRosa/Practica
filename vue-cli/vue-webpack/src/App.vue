<template>

  <div class="data">


<router-view></router-view>
</div>
</template>

<script>

export  default {

  data (){
  }
}

</script>

<style lang="scss">

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333333;
  }

  li {
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
