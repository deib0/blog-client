<template>
    <footer class="footer-wrapper">
        <div class="footer">
            <ul>
                <li class="title">STACK OVERFLOW</li>
                <li>Questions</li>
                <li>Help</li>
            </ul>
            <ul>
                <li class="title">PRODUCTS</li>
                <li>Teams</li>
                <li>Advertising</li>
                <li>Collectives</li>
                <li>Talent</li>
            </ul>
            <ul>
                <li class="title">COMPANY</li>
                <li>About</li>
                <li>Press</li>
                <li>Work Here</li>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Terms of Servic</li>e
                <li>Contact Us</li>
                <li>Cookie Settings</li>
                <li>Cookie Policy</li>
            </ul>
            <ul>
                <li class="title">STACK EXCHANGE NETWORK</li>
                <li>Technology</li>
                <li>Culture & recreation</li>
                <li>Life & arts</li>
                <li>Science</li>
                <li>Professional</li>
                <li>Business</li>
                <li>API</li>
                <li>Data</li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.footer-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 322px;
    width: 100%;
    background: #232629;
    .footer{
        display: flex;
        flex-direction: row;
        min-width: 1264px;
        padding-top: 30px;
        ul{
            padding-right: 75px;
            font-size: 13px;
            li{
                color: #9199a1;
                margin-bottom: 10px;
                &.title{
                color: #babfc4;
                font-weight: 700;
                margin-bottom: 30px;
            }
            }
        }
    }
}
</style>