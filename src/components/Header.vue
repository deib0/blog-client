<template>
    <header class="header-wrapper">
        <div class="header">
            <router-link to="/" class="logo">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-stackoverflow"></use>
                </svg>
                stack&nbsp;<strong>overweight</strong></router-link>
                <div class="no-login">
                    <div class="login"><el-button class="login-btn">Log in</el-button></div>
                    <div class="signup"><el-button class="signup-btn">Sign up</el-button></div>
                </div>
            <div class="login">
                <div class="blog">
                    <el-button class="blog-btn">Write blog</el-button>
                </div>
                <div class="user">照片</div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style lang="less" scoped>
.header-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 47px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #f8f9f9;
    border-top: 3px solid #f48225;
    box-shadow: 0 1px 2px hsla(0,0%,0%,0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05);
    .header{
        min-width: 1264px;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .logo{
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 20px;
            height: 100%;
            padding: 0 8px;
            .icon{
                width: 35px;
                height: 35px;
            }
            &:hover{
                background: #e3e6e8;
            }
        }
        .no-login{
            display: flex;
            flex-direction: row;
            justify-content: start;
            .login-btn{
                background: #e1ecf4;
                color:#39739D;
                height: 33px;
                line-height: 0;
                border: 1px solid #39739D;
                &:hover{
                    opacity: .8;
                }
            }
            .signup-btn{
                margin-left: 4px;
                background: #0a94fe;
                color: #fff;
                height: 33px;
                line-height: 0;
                &:hover{
                    opacity: .8;
                }

            }
        }
        .login{
            display: flex;
            flex-direction: row;
            justify-content: start;
            .blog-btn{
                height: 33px;
                background: #f48225;
                color: #fff;
                line-height: 0;
                &:hover{
                    opacity: .8;
                }
            }
        }
    }
}
</style>