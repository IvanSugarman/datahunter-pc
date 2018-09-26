<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
  }

  .wrapper {
    position: relative;
    height: 100%
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  /*clearfix*/
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

</style>
