<template>
  <header :class="{login: isLogin, 'no-login': !isLogin}">
    <template v-if="!isLogin">
      <h1>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-stackoverflow"></use>
      </svg>
        stack <strong>overweight</strong></h1>
      <div class="btns">
        <router-link to="/login"><el-button >立即登录</el-button></router-link>
        <router-link to="/register"><el-button>注册账号</el-button></router-link>
      </div> 
    </template>
    <template v-if="isLogin">
      <h1><router-link to="/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-stackoverflow"></use>
        </svg>
        stack <strong>overweight</strong></router-link></h1>
      <router-link to="/create"><i class="edit el-icon-plus"></i></router-link>
      <div class="user">
        <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
        <ul>
          <li><router-link to="/my">我的</router-link></li>
          <li><a href="#" @click="onLogout">注销</a></li>
        </ul>
      </div>         
    </template>
  </header>
</template>

<script>
  
  import auth from '@/api/auth'
  window.auth = auth

  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {}
    },

    computed: {
      ...mapGetters([
        'isLogin',
        'user'
        ])
    },

    created() {
      this.checkLogin()
    },

    methods: {
      ...mapActions([
        'checkLogin',
        'logout'
        ]),

      onLogout() {
        this.logout()
      }
    }

  }
</script>


<style lang="less">

@import "../assets/base.less";  

header.no-login {
  padding: 0 12% 30px 12%;
  background: #f8f9f9;
  display: grid;
  justify-items: center;
  border-top: 3px solid #f48225;
  box-shadow: 0 1px 2px hsla(0,0%,0%,0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05);
  h1 {
    color: #222426;
    font-size: 40px;
    font-weight: normal;
    margin: 60px 0 0 0;
  }
  
  .btns {
    margin-top: 20px;
  }

  button {
    margin: 20px 5px 0;
  }
} 


header.login {
  display: flex;
  align-items: center;
  background: #f8f9f9;
  border-top: 3px solid #f48225;
  box-shadow: 0 1px 2px hsla(0,0%,0%,0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05);
  h1 {
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-weight: normal;
    flex: 1;

    a {
      color: #222426;
    }
  }

  .edit {
    color: #f48225;
    font-size: 30px;
    font-weight: 700;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;
  }

  .user {
    position: relative;

    ul {
      display: none;
      position: absolute;
      right: 0;
      list-style: none;
      border: 1px solid #eaeaea;
      margin:0;
      padding: 0;
      background-color: #fff;

      a {
        text-decoration: none;
        color: #333;
        font-size: 12px;
        display: block;
        padding: 5px 10px;

        &:hover {
          background-color: #eaeaea;
        }
      }

    }

    &:hover ul {
      display: block;
    }
  }
}



</style>