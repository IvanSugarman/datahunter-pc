<template>
  <div class="wrapper">
    <div id="share">
      <data-hunter-header title="作品分享"/>
      <div class="share-item_wrapper">
        <div class="share-item">
          <div class="share-item__img">
            <img src="@/assets/1.jpg" alt="">
          </div>
          <div class="share-item__info">
            <div>
              <div class="left">作&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;者</div>
              <div class="right share-item__author">
                {{work.author}}
              </div>
            </div>
            <div>
              <div class="left">作者名称</div>
              <div class="right share-item__title">
                {{work.title}}
              </div>
            </div>
            <div>
              <div class="left">作者简介</div>
              <div class="right share-item__description">
                {{work.description}}
              </div>
            </div>
          </div>
          <div class="button" @click="showDialog(1)">投票</div>
        </div>
      </div>
      <div class="description">
        <div class="title">投票说明</div>
        <p>1、本次投票只通过微信投票，每个微信号每天限投3票，每个比赛作品每天限投1票</p>
        <p>2、最终票数将计入比赛总成绩的30%。</p>
        <p>3、一旦发现刷票等作弊行为，投票成绩作废。</p>
      </div>
      <data-hunter-footer/>
      <data-hunter-dialog type="success" v-show="showSuccess" @showDialog="showDialog"/>
      <data-hunter-dialog type="error" v-show="showError" @showDialog="showDialog"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    mounted() {
      document.getElementById("share").style.minHeight = document.documentElement.clientHeight + 'px';
      this.work = this.getWorksById(1);
    },
    data() {
      return {
        work: {},
        showSuccess: false,
        showError: false,
      };
    },
    methods: {
      getWorksById(id) {
        return this.$store.getters.getWorksById(id);
      },
      showDialog(type) {
        if (type == 1) {
          this.showError = false;
          this.showSuccess = true;
        } else if (type == 2) {
          this.showError = true;
          this.showSuccess = false;
        } else if (!type) {
          this.showError = false;
          this.showSuccess = false;
        }
      },
      stopScrolling(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }
  };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  $browser-default-font-size: 192px !default;

  @function px2em($px) {
    @return $px / $browser-default-font-size * 1rem;
  }

  #share {
    position: relative;
    min-width: 1280px;
    margin: 0 auto;
    padding-bottom: 90px;
    background: rgb(16, 33, 49);
  }

  .share-item_wrapper {
    width: 100%;
    background: rgba(14,44,73, .7);
  }

  .share-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 62.5%;
    min-width: 1200px;
    padding: 40px 0 80px 0;
    margin: 0 auto;
  }

  .share-item__info {
    display: flex;
    width: 70%;
    justify-content: space-around;
    flex-direction: column;
    margin-top: 30px;
    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 7px;
      min-height: 20px;
      line-height: 20px;
      .left {
        flex: 0 0 15%;
        color: rgba(255, 255, 255, .6);
        font-size: px2em(14px);

      }
      .right {
        flex: 0 0 85%;
        font-size: 14px;
        color: #fff;
      }
    }
  }

  .share-item__img {
    position: relative;
    width: 70%;
    padding-bottom: 47.5%;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  .title {
    margin: 70px 0 30px;
    text-align: center;
    font-size: 36px;
    color: #fff;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto 0;
    width: 160px;
    height: 46px;
    color: #fff;
    font-size: 16px;
    background-image: linear-gradient(37deg, #4DFF58 0%, #1ED884 94%);
    border-radius: 100px;
    cursor: pointer;
  }

  .description {
    width: 62.5%;
    min-width: 1200px;
    margin: 0 auto;
    p {
      width: 70%;
      margin: 0 auto;
      color: rgba(255, 255, 255, .6);
      font-size: 20px;
      line-height: 36px;
      text-align: left;
    }
  }
</style>
