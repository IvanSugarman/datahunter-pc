<template>
  <div id="app">
    <router-view/>
    <iframe src="https://analytics.datahunter.cn" frameborder="0" id="child" width="0" height="0"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      window.addEventListener('message', (event) => {
        try {
          if (event.data.auth) {
            this.$store.commit('setUid', {
              uid: event.data.user._id,
              name: event.data.user.name,
            });
          }
        } catch (e) {}
      });
      console.log(this.$store.state.uid);
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
