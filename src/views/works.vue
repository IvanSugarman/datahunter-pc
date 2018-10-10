<template>
  <div id="works">
    <data-hunter-header title="可视化之星大赛"/>
    <data-hunter-banner/>
    <data-hunter-bar active="4"/>
    <div class="works-list">
      <div class="title">
        参赛作品列表
      </div>
      <ul>
        <router-link tag="li" :to="'/share/' + item.id" class="list-item" v-for="item in workList" :key="item.id">
          <div class="list-item__wrap">
            <div class="list-item__img">
              <img :src="item.content.cover"/>
            </div>
            <div class="list-item__info">
              <div class="list-item__title">
                {{item.content.name || '暂无数据'}}
              </div>
              <div class="list-item__author">
                {{item.content.author || '暂无数据'}}
              </div>
              <div class="list-item__vote">
                当前票数 <span>{{item.votes}}</span>
              </div>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
    <data-hunter-footer/>
  </div>
</template>

<script type="text/ecmascript-6">
  import qs from 'qs';

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
        this.axios.get(this.$store.getters.getUrl('work/list')).then(response => {
          response = qs.parse(response.data);
          response.data.map(item => {
              if (item.content) {
                item.content = JSON.parse(item.content);
              }
          });
          this.workList = response.data;
        });
      }
    }
  };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  $browser-default-font-size: 192px !default;

  @function px2em($px) {
    @return $px / $browser-default-font-size * 1rem;
  }

  .list-item {
    cursor: pointer;
  }

  #works {
    position: relative;
    min-width: 1280px;
    margin: 0 auto;
    padding-bottom: 90px;
    background: rgb(16, 33, 49);
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
            font-size: 16px;
            color: rgba(255, 255, 255, .6);
          }
          .list-item__vote span {
            margin-left: 20px;
          }
        }
      }
    }
  }

</style>
