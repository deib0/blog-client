<template>
  <div id="app">
    <el-button @click="login">登录</el-button>
    <div>用户名: {{username}}</div>
  </div>
</template>

<script>
import request from './helpers/request'
import auth from '@/api/auth'
import blog from '@/api/blog'
window.auth = auth
window.blog = blog

export default {
  name: 'App',
  data() {
    return {
      username: ''
    }
  },
  methods: {
    login() {
      auth.login({ username: 'hunger', password: '123456' })
        .then(res => {
          console.log(res)
          this.username = res.data.username
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>