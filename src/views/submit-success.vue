<template>
  <div id="sign">
    <data-hunter-header title="可视化之星大赛"/>
    <data-hunter-banner/>
    <data-hunter-bar active="3"/>
    <div class="container">
      <div class="success-image" id="success-image">
        <img src="@/assets/success.png" alt="">
      </div>
      <p class="success-info">您已成功提交作品！</p>
    </div>
    <div class="wechat">
      <p class="info">现在扫描下方二维码，将您的作品分享</p>
      <p class="info">给朋友，请他们投上宝贵一票！</p>
      <div class="qrcode">
        <img :src="qrcode">
      </div>
      <p class="info">最终票数，将计入总成绩的30%！</p>
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
//        qrcode: "http://bshare.optimix.asia/barCode?site=weixin&url=http://www.geek-scorpion.com/wechat/oauth/base?redirect=http://case.geek-scorpion.com/dataHunterMobile/share-mobile/" + this.$route.params.id,
        qrcode: "http://bshare.optimix.asia/barCode?site=weixin&url=http://www.geek-scorpion.com/wechat/oauth/base?redirect=http://vote.datahunter.cn/dataHunterMobile/share-mobile/" + this.$route.params.id,
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
    height: 278px;
    .success-info {
      margin-top: 20px;
      font-size: 36px;
      color: #fff;
      text-align: center;
    }
    .success-image {
      position: relative;
      margin: 70px auto 0;
      width: 60px;
      height: 60px;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
  }

  .wechat {
    margin: 0 auto;
    padding: 90px 0 60px 0;
    background: rgba(14, 44, 73, .6);
    .qrcode {
      position: relative;
      margin: 25px auto;
      width: 140px;
      padding-bottom: 140px;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
    .info {
      color: rgba(255, 255, 255, .6);
      font-size: 16px;
      line-height: 28px;
      text-align: center;
    }
  }
</style>
