<template>
  <div id="app">
    <router-view/>
    <span style="display: none">
        <script src=https://s22.cnzz.com/z_stat.php?id=1275131137&web_id=1275131137" language="JavaScript"></script>
    </span>
    <iframe src="https://analytics.datahunter.cn" frameborder="0" id="child" width="0" height="0"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'App',
    beforeMount () {
      this.$store.commit('setUid', {
        uid: localStorage.getItem('dataHunterUid'),
        name: localStorage.getItem('dataHunterName'),
      });
      window.addEventListener('message', (event) => {
          if (event.data.auth) {
            localStorage.setItem('dataHunterUid', event.data.user._id);
            localStorage.setItem('dataHunterName', event.data.user.name);
            this.$store.commit('setUid', {
              uid: localStorage.getItem('dataHunterUid'),
              name: localStorage.getItem('dataHunterName'),
            });
          }
      });
    },
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
