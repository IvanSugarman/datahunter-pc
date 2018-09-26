<template>
    <div>
      <header>
        <div class="left">
          <img src="@/assets/logo.png"/>
        </div>
        <div class="title">
          {{title}}
        </div>
        <div class="right button">
          进入系统
        </div>
      </header>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: ['title'],
        data() {
            return {};
        },
    };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    header {
      height: 60px;
      width: 62.5%;
      min-width: 1200px;
      margin: 0 auto;
      padding: 0 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .left {
      position: relative;
      width: 150px;
      height: 26px;

      img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }

    .title {
      font-size: 20px;
      color: #fff;
    }

    .button {
      width: 92px;
      height: 26px;
      color: #fff;
      font-size: 14px;
      line-height: 26px;
      text-align: center;
      background: #23c132;
      border-radius: 100px;
      cursor: pointer;
    }
</style>
