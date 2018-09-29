<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div class="banner">
      <div class="content">
        <p>DataHunter</p>
        <p>首届数据可视化之星大赛</p>
        <p>助你C位出道！</p>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data() {
      return {};
    },
  };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .banner {
    width: 100%;
    height: 340px;
    .content {
      position: relative;
      margin: 0 auto;
      height: 100%;
      width: 62.5%;
      min-width: 1200px;
      padding: 4% 0 4% 4%;
      color: #fff;
      background: url("../../static/banner-part-02.png") 100% 0 no-repeat;
      background-size: 640px 360px;

      p:nth-child(1) {
        margin-bottom: 7px;
        font-size: 36px;
        line-height: 50px;
      }
      p:nth-child(2) {
        margin-bottom: 11px;
        font-size: 49px;
        line-height: 68px;
      }
      p:nth-child(3) {
        font-size: 32px;
        line-height: 45px;
      }
    }
  }

</style>
