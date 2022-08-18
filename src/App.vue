<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
      <router-view/>   
    </main>
    <Footer id="footer"></Footer>
     
  </div>
</template>


<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less">
@import url(./assets/reset.less);
#app{
  background: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  #main{
    width: 100%;
  }
}
</style>