<template>
  <div class='index'>
      <ul>
        <li>
          <router-link to='/internet'>
            <el-button type="warning">上网方式</el-button>
          </router-link>
        </li>
        <li>
          <router-link to='/iso'>
            <el-button type="warning">镜像</el-button>
          </router-link>
        </li>
        <li>
          <router-link to='/test'>
            <el-button type="warning">测试</el-button>
          </router-link>
        </li>
        <li>
          <router-link to='upload'>
            <el-button type="warning">上传</el-button>
          </router-link>
        </li>
      </ul>
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
<style scoped>
  li{
    list-style:none;
    margin:20px auto;
    text-align:center
  }
  button{
    width:8em;
    height:4em
  }
</style>

