<template>
  <div id="sign">
    <data-hunter-header title="可视化之星大赛"/>
    <data-hunter-banner/>
    <data-hunter-bar active="2"/>
    <div class="container">
      <p>点击下方按钮立即注册</p>
      <div class="button">立即注册</div>
      <p class="tips">注册成功之后，视为自动报名成功！</p>
    </div>
    <div class="wechat">
      <div class="qrcode">
        <img src="@/assets/wechat.png">
      </div>
      <p class="info">加小助手可进交流群，请备注“可视化大赛”</p>
    </div>
    <data-hunter-footer/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    mounted() {
      document.getElementById("sign").style.minHeight = document.documentElement.clientHeight + 'px';
    },
    data() {
      return {
      };
    },
  };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  #sign {
    position: relative;
    min-width: 1280px;
    margin: 0 auto;
    padding-bottom: 90px;
    background: rgb(16, 33, 49);
  }

  .container {
    display: flex;
    flex-direction: column;
    height: 334px;
    background: rgba(14, 44, 73, .6);
    p:first-child {
      margin-top: 85px;
      font-size: 20px;
      color: #fff;
      text-align: center;
    }
    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 35px auto;
      width: 200px;
      height: 46px;
      color: #fff;
      font-size: 16px;
      background-image: linear-gradient(37deg, #4DFF58 0%, #1ED884 94%);
      border-radius: 100px;
      cursor: pointer;
    }
    .tips {
      text-align: center;
      font-size: 16px;
      color: rgba(255, 255, 255, .6);
    }
  }

  .wechat {
    margin: 0 auto;
    .qrcode {
      position: relative;
      margin: 60px auto 0 auto;
      width: 140px;
      padding-bottom: 140px;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
    .info {
      margin-top: 30px;
      color: rgba(255, 255, 255, .6);
      font-size: 16px;
      line-height: 36px;
      text-align: center;
    }
  }
</style>
