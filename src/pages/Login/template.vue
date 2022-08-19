<template>
    <div id="login">
        <ul class="form">
            <li class="username">
                <h3>用户名</h3>
                <el-input v-model="username" placeholder="请输入用户名"></el-input>
            </li>
            <li class="password">
                <h3>密码</h3>
                <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
            </li>
        </ul>
        <el-button class="login-btn" @click="onLogin">立即登录</el-button>
        <p class="signup">没有账号？<router-link class="signup-link" to="/create">注册新用户</router-link></p>
    </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" scoped lang="less"></style>