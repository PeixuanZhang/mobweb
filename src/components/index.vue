<template>
  <div class='index'>
    <router-link tag='div' :to="{name:'internet',params:{num:2}}" class='big-btn'>
      <a><el-button type="warning" @click='internetClick'>上网方式</el-button></a>
    </router-link>
    <router-link tag='div' to='/iso' class='big-btn'>
      <a><el-button type="warning" @click='isoClick'>镜像</el-button></a>
    </router-link>
    <router-link tag='div' to='/test' class='big-btn'>
      <a><el-button type="warning" @click='testClick'>测试</el-button></a>
    </router-link>
    <router-link tag='div' to='upload' class='big-btn'>
      <a><el-button type="warning" @click='uploadClick' class='sss'>上传</el-button></a>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    internetClick() {
      this.$emit('msg','上网方式')
    },
    isoClick() {
      this.$emit('msg','镜像')
    },
    testClick() {
      this.$emit('msg','测试')
    },
    uploadClick() {
      this.$emit('msg','上传')
    }
  }
}
</script>
<style scoped>
  .big-btn{
    list-style:none;
    margin:20px auto;
    text-align:center;

  }
  button{
    width:20rem;
    font-size:3rem;
  }

</style>

