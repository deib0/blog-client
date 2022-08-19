<template>
    <div id="register">
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
        <el-button class="register-btn" @click="onLogin">立即注册</el-button>
        <p class="login">已有账号？<router-link class="signup-link" to="/login">登录</router-link></p>
    </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" scoped lang="less"></style>