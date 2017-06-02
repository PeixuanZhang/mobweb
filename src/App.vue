<template>
  <div id="app">
    <my-header></my-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from './components/header'

export default {
  name: 'app',
  components:{
    'myHeader':header
  }
}
</script>

<style>
  body,html{
    margin:0;
    padding:0;
  }
</style>
