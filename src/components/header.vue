<template>
  <div class='header'>
    <router-link to='/'>
      <img src="static/img/homepage_fill.png">
    </router-link>
    <router-link to='/setup'>
      <img src="static/img/setup_fill.png" class='set'>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    width:100%;
    height:2em;
    background-color:#20A0FF;
    border-radius:3px
  }
  .set{
    float:right;
    margin-right:5px
  }
</style>
