<template>
  <div id="works">
    <data-hunter-header title="可视化之星大赛"/>
    <div class="banner">
      <div class="content">
        <p>DataHunter</p>
        <p>首届数据可视化之星大赛</p>
        <p>助你C位出道！</p>
      </div>
    </div>
    <data-hunter-bar active="4"/>
    <div class="works-list">
      <div class="title">
        参赛作品列表
      </div>
      <ul>
        <li v-for="item in workList" :key="item.id">
          <div class="list-item__wrap">
            <div class="list-item__img">
              <img src="@/assets/1.jpg"/>
            </div>
            <div class="list-item__info">
              <div class="list-item__title">
                {{item.title}}
              </div>
              <div class="list-item__author">
                {{item.author}}
              </div>
              <div class="list-item__vote">
                当前票数 <span>{{item.votes}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <data-hunter-footer/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    mounted() {
      document.getElementById("works").style.minHeight = document.documentElement.clientHeight + 'px';
      this.getWorksList();
    },
    data() {
      return {
        workList: [],
      };
    },
    methods: {
      getWorksList: function () {
        this.workList = this.$store.getters.getWorksList;
      }
    }
  };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  $browser-default-font-size: 192px !default;

  @function px2em($px) {
    @return $px / $browser-default-font-size * 1rem;
  }

  #works {
    position: relative;
    min-width: 1280px;
    margin: 0 auto;
    padding-bottom: 90px;
    background: rgb(16, 33, 49);
  }


  .banner {
    width: 100%;
    height: 340px;
    .content {
      position: relative;
      margin: 0 auto;
      width: 62.5%;
      min-width: 1200px;
      padding: 4% 0 4% 4%;
      color: #fff;

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

  .title {
    margin: 80px 0 30px;
    text-align: center;
    font-size: 36px;
    color: #fff;
  }

  .works-list {
    margin: 0 auto;
    width: 62.5%;
    min-width: 1200px;
    ul {
      list-style-type: none;
      color: #fff;
      font-size: 20px;
      li {
        display: inline-block;
        margin-bottom: 30px;
        width: 31%;
        margin-right: 3%;
        &:nth-child(3n) {
          margin-right: 0;
        }
        .list-item__wrap {
          margin: 0 auto;
          background: #1D456E;
          .list-item__img {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%;
            img {
              position: absolute;
              width: 100%;
              height: 100%;
            }
          }
        }
        .list-item__info {
          padding: 15px 39px;
          .list-item__title {
            -ms-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          .list-item__author {
            color: rgba(255, 255, 255, .6);
          }
          .list-item__vote span{
            margin-left: 5px;
          }
        }
      }
    }
  }

</style>
