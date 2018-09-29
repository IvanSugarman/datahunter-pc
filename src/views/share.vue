<template>
  <div class="wrapper">
    <div id="share">
      <data-hunter-header title="作品分享"/>
      <div class="share-item_wrapper">
        <div class="share-item">
          <div class="share-item__img">
            <img :src="work.content && work.content.cover"/>
          </div>
          <div class="share-item__info">
            <div>
              <div class="left">作&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;者</div>
              <div class="right share-item__author">
                {{work.content && work.content.email}}
              </div>
            </div>
            <div>
              <div class="left">作品名称</div>
              <div class="right share-item__title">
                {{work.content && work.content.name}}
              </div>
            </div>
            <div>
              <div class="left">作品简介</div>
              <div class="right share-item__description">
                {{work.content && work.content.description}}
              </div>
            </div>
          </div>
          <div class="button" @click="vote">投票</div>
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
      <data-hunter-dialog type="login" v-show="showLogin" @showDialog="showDialog"/>
      <data-hunter-dialog type="alert" v-show="showAlert" @showDialog="showDialog"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import qs from 'qs';

  export default{
    mounted() {
      document.getElementById("share").style.minHeight = document.documentElement.clientHeight + 'px';
      this.getWorksById();
    },
    data() {
      return {
        work: {},
        showSuccess: false,
        showError: false,
        showLogin: false,
        showAlert: false,
      };
    },
    methods: {
      getWorksById() {
        this.axios.get(this.$store.getters.getUrl('work/one?wid=' + this.$route.params.id)).then(response => {
          response.data.data.content = JSON.parse(response.data.data.content);
          this.work = response.data.data;
        });
      },
      vote() {
        let uid = this.$store.getters.getUid;
        let wid = this.$route.params.id;
        let params = {
          uid,
          wid,
        };

        this.axios.post(this.$store.getters.getUrl('vote'), qs.stringify(params),
          {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(res => {
              if (res.data.code == -2) {
                  this.showDialog(4);
              } else if (res.data.code == -1) {
                  this.showDialog(2);
              } else {
                  this.showDialog(1);
              }
        });
      },
      showDialog(type) {
        if (type == 1) {
          this.showSuccess = true;
        } else if (type == 2) {
          this.showError = true;
        } else if (type == 3) {
          this.showLogin = true;
        } else if (type == 4) {
          this.showAlert = true;
        } else if (!type) {
          this.showError = false;
          this.showSuccess = false;
          this.showLogin = false;
          this.showAlert = false;
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
    background: rgba(14, 44, 73, .7);
  }

  .share-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 62.5%;
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
        word-break: break-all;
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
      font-size: 16px;
      line-height: 36px;
      text-align: left;
    }
  }
</style>
