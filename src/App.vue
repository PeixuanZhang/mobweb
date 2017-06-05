<template>
  <div id="app">
    <my-header @msgs='headMsg'></my-header>
    <keep-alive>
      <router-view @msg='headMsg'></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from './components/header'

export default {
  data() {
    return {
   }
  },
  name: 'app',
  components:{
    'myHeader':header
  },
  methods:{
    headMsg: function(data){
      this.headWord=data;
    }
  }
}
</script>

<style>
 body,html{
   margin:0;
   padding:0;
 }
</style>
