<template>
  <div class='header'>
    <router-link to='/' class='left-btn line'>
      <img src="static/img/homepage_fill.png" class='icon'>
    </router-link>
    <div class='header-title line'>{{title}}</div>
    <router-link to='/setup' class='right-btn line'>
      <img src="static/img/setup_fill.png" class='icon'>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'none'
    }
  },
  methods:{
    get_title () {
      this.title = this.$route.meta.title || this.$route.name || this.$route.path
    }
  },
  created () {
    this.get_title()
  },
  watch: {
    '$route': 'get_title'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    width:100%;
    height:4rem;
    background-color:#20A0FF;
    border-radius:3px;
    position: relative;
    top: 0;
  }
  .line{
      line-height:4rem;
  }
  .header-title{
    display: inline-block;
    text-align: center;
    width: 100%;
    line-height: 4rem;
    font-size: 2rem
  }
  .left-btn {
    position: absolute;
    left: 0;
  }
  .right-btn {
    position: absolute;
    right: 0;
  }
  .icon {
    display: block;
    width: 2rem;
    height: 2rem;
    margin: 1rem 0.5rem;
  }
</style>
