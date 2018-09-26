<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="wrapper" id="index">
    <data-hunter-header title="可视化之星大赛"/>
    <div class="banner">
      <div class="content">
        <p>DataHunter</p>
        <p>首届数据可视化之星大赛</p>
        <p>助你C位出道！</p>
      </div>
    </div>
    <div class="bar">
      <ul>
        <li v-bind:class="{ active: active == 1}">大赛介绍</li>
        <li v-bind:class="{ active: active == 2}">注册报名</li>
        <li v-bind:class="{ active: active == 3}">作品提交</li>
        <li v-bind:class="{ active: active == 4}">作品展示</li>
      </ul>
    </div>
    <section class="description">
      <p> 随着企业各类业务数据不断增长，如何通过数据挖掘商业价值，并以统一、高效的形式呈现给管理者，从而提高分析决策效率以及加快市场影响速度，已成为所有企业最为关注的话题。这其中，数据可视化是必不可少的技术之一。
      </p>
      <p>
        2018年10月，由DataHunter主办的首届数据可视化之星大赛火热开启！即日起至11月18日，通过DataHunter数据可视化分析平台制作并提交看板，就有机会成为DataHunter产品代言人，更有万元大奖等你拿！
      </p>
    </section>
    <div class="info-wrapper">
      <div class="info">
        <div class="title">比赛流程</div>
        <div class="process">
          <ul>
            <li>
              <div class="step">1</div>
              <p>报名提交</p>
              <p>(10月10日-11月18日)</p>
            </li>
            <li>
              <div class="step">2</div>
              <p>网民投票</p>
              <p>(10月10日-11月20日)</p>
            </li>
            <li>
              <div class="step">3</div>
              <p>专家评审</p>
              <p>(11月21日-11月23日)</p>
            </li>
            <li>
              <div class="step">4</div>
              <p>分数统计</p>
              <p>(11月24日)</p>
            </li>
            <li>
              <div class="step">5</div>
              <p>奖项公示</p>
              <p>(11月26日)</p>
            </li>
          </ul>
        </div>
        <div class="title">参赛要求</div>
        <div class="request">
          <ul>
            <li>
              <div><i>01</i>比赛仅接受个人报名</div>
            </li>
            <li>
              <div><i>02</i>组织方员工及直系亲属不得参加比赛</div>
            </li>
            <li>
              <div><i>03</i>使用DataHunter平台制作可视化作品</div>
            </li>
          </ul>
        </div>
        <div class="title">评分标准</div>
        <div class="standard">
          <p> 评分实行百分制，即满分100分（占比70%评委评分，30%网络投票）</p>
          <div class="standard__title">
            作品评分标准主要由三部分构成
          </div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div class="title">数据要求</div>
        <div class="process__data">
          <p>1、参赛者可自行虚拟数据，或在确保数据脱敏的情况下使用自有数据，进行创意可视化展现。</p>
          <p>2、如参赛者没有虚拟数据，可使用DataHunter提供的示例数据：DataHunter所提供的数据，不得用于其他任何目的。</p>
          <p>3、参赛作品的知识产权归参赛作者所有。</p>
          <p>4、DataHunter有权免费的不受限制使用参赛作品（包括作品中所含的原始数据， 设计，图表， 照片、作品相关、作者信息）包括但不
            限于用于宣传品、指定及授权媒体发布、官方网站浏览及下载、 展览（含巡展）等活动项目。</p>
          <span>下载:demo数据</span>
        </div>
      </div>
    </div>
    <div class="award">
      <div class="title">奖项设置</div>
      <ul>
        <li>
          <img src="@/assets/reward1.png"/>
        </li>
        <li>
          <img src="@/assets/reward1.png"/>
        </li>
        <li>
          <img src="@/assets/reward1.png"/>
        </li>
      </ul>
      <ul>
        <li>
          <img src="@/assets/reward1.png"/>
        </li>
        <li>
          <img src="@/assets/reward1.png"/>
        </li>
      </ul>
    </div>
    <div class="judge">
      <div class="title">大赛评委</div>
      <ul class="judge__man">
        <li>
          <div class="judge__img">
            <img src="">
          </div>
          <div class="judge__name">韩要宾</div>
          <div class="judge__description">
            <p>杭州沐垚科技有限公司创始人</p>
            <p>零一数据 创始人</p>
          </div>
        </li>
        <li>
          <div class="judge__img">
            <img src="">
          </div>
          <div class="judge__name">屠志鹏</div>
          <div class="judge__description">
            人工智能和大数据专家
            国家系统分析员
          </div>
        </li>
        <li>
          <div class="judge__img">
            <img src="">
          </div>
          <div class="judge__name">
            郑来轶
          </div>
          <div class="judge__description">
            浙江执（JollyChic）数据分析总监
          </div>
        </li>
        <li>
          <div class="judge__img">
            <img src="">
          </div>
          <div class="judge__name">
            程凯征
          </div>
          <div class="judge__description">
            DataHunter CEO
          </div>
        </li>
        <li>
          <div class="judge__img">
            <img src="">
          </div>
          <div class="judge__name">
            许双六
          </div>
          <div class="judge__description">
            DataHunter 高级数据分析师
          </div>
        </li>
      </ul>
      <div class="judge__rule">
        <p>组委会权利</p>
        <ul>
          <li>大赛组委会保留修改比赛作品提交的截至日期、获奖名单公布日期的权利</li>
          <li>大赛组委会保留收回或拒绝授予选手奖项的权利</li>
          <li>大赛组委会保留对该大赛规则修订的权利，并拥有对大赛规则的最终解释权。</li>
        </ul>
      </div>
    </div>
    <div class="organizer_wrapper">
      <div class="organizer">
        <div class="title">主办单位</div>
        <div class="organize organizer_center">
          <img src="" alt="">
        </div>
        <div class="title">联合主办</div>
        <div class="organize organizer_center">
          <img src="" alt="">
        </div>
        <div class="title">特别鸣谢</div>
        <ul>
          <li>
            <div class="organize"></div>
          </li>
          <li>
            <div class="organize"></div>
          </li>
          <li>
            <div class="organize"></div>
          </li>
          <li>
            <div class="organize"></div>
          </li>
          <li>
            <div class="organize"></div>
          </li>
          <li>
            <div class="organize"></div>
          </li>
          <li>
            <div class="organize"></div>
          </li>
          <li>
            <div class="organize"></div>
          </li>
          <li>
            <div class="organize"></div>
          </li>
          <li>
            <div class="organize"></div>
          </li>
          <li>
            <div class="organize"></div>
          </li>
          <li>
            <div class="organize"></div>
          </li>
        </ul>
      </div>
    </div>
    <data-hunter-footer/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    mounted() {
      document.getElementById("index").style.minHeight = document.documentElement.clientHeight + 'px';
    },
    data() {
      return {
        active: 1,
      };
    },
  };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  $browser-default-font-size: 192px !default;

  @function px2em($px) {
    @return $px / $browser-default-font-size * 1rem;
  }

  #index {
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

  .bar {
    width: 100%;
    background-color: #0E2C49;
    ul {
      margin: 0 auto;
      width: 62.5%;
      min-width: 1200px;
      height: 60px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style-type: none;
      li {
        flex: 0 0 25%;
        color: #fff;
        font-size: px2em(24px);
        line-height: 60px;
        text-align: center;
        &.active {
          background: #1C3C5A;
        }
      }
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 62.5%;
    min-width: 1200px;
    height: 332px;
    font-size: px2em(20px);
    color: #fff;
    line-height: 28px;
    p {
      width: 100%;
      margin-bottom: 40px;
    }
  }

  .info-wrapper {
    background-color: #0E2C49;
  }

  .info {
    width: 62.5%;
    min-width: 1200px;
    padding: 5% 0;
    margin: 0 auto;
  }

  .title {
    margin: 80px 0 40px;
    text-align: center;
    font-size: px2em(36px);
    color: #fff;
    &:first-child {
      margin: 0 0 40px;
    }
  }

  .process {
    ul {
      display: flex;
      justify-content: space-around;
      list-style-type: none;
      li {
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        flex: 0 0 20%;
        p {
          font-size: 16px;
          line-height: 30px;
          color: #fff;
        }
        &:after {
          position: absolute;
          left: calc(50% + 22px);
          top: 22px;
          content: '';
          width: calc(100% - 44px);
          border-top: 2px solid #23c132;
        }
        &:nth-last-child(1):after {
          border: none;
        }
        .step {
          margin-bottom: 14px;
          border: 2px solid #23c132;
          width: 44px;
          height: 44px;
          font-size: 16px;
          color: #23c132;
          text-align: center;
          line-height: 44px;
          border-radius: 50%;
        }
      }
    }
  }

  .request ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    li {
      width: 360px;
      height: 180px;
      flex: 0 0 30%;
      background-color: #123354;
    }
  }

  .standard {
    text-align: center;
    font-size: 20px;
    color: rgba(255, 255, 255, .6);
    line-height: 36px;
    p:first-child {
      margin: -30px;
    }
    .standard__title {
      margin: 50px 0 40px 0;
      font-size: 24px;
      color: #fff;
      line-height: 33px;
    }
    ul {
      display: flex;
      justify-content: space-around;
      list-style-type: none;
      li {
        width: 360px;
        height: 180px;
        flex: 0 0 30%;
        background-color: #123354;
      }
    }
  }

  .process__data {
    margin-top: -10px;
    font-size: 20px;
    line-height: 36px;
    color: rgba(255, 255, 255, .6);
    span {
      font-size: 16px;
      text-decoration: underline;
    }
  }

  .award {
    padding-top: 80px;
    margin: 0 auto;
    width: 62.5%;
    min-width: 1200px;
    ul {
      width: 100%;
      margin-bottom: 50px;
      list-style-type: none;
      display: flex;
      justify-content: space-around;
      li {
        flex: 0 0 380px;
        display: inline-block;
        position: relative;
        width: 380px;
        padding-bottom: 240px;
        img {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    }
    ul:last-child {
      justify-content: center;
      li + li {
        margin-left: 30px;
      }
    }
  }

  .judge {
    width: 62.5%;
    min-width: 1200px;
    margin: 0 auto 70px;
    .judge__man {
      list-style-type: none;
      display: flex;
      li {
        display: flex;
        flex: 0 0 20%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        .judge__img {
          width: 190px;
          height: 190px;
          border-radius: 50%;
          background-color: #d8d8d8;
        }
        .judge__name {
          margin-top: 30px;
          font-size: 24px;
          color: #fff;
          line-height: 33px;
        }
        .judge__description {
          padding: 0 20px;
          margin-top: 10px;
          color: rgba(255, 255, 255, .6);
          font-size: 20px;
          line-height: 28px;
        }
      }
    }
  }

  .judge__rule{
    margin-top: 50px;
    p {
      text-align: center;
      margin-bottom: 24px;
      font-size: 24px;
      color: #fff;
    }
    ul {
      width: 680px;
      margin: 0 auto;
      list-style-type: none;
      li {
        margin: 0 auto;
        position: relative;
        color: rgba(255, 255, 255, .6);
        line-height: 36px;
        font-size: 20px;
        &:before {
          position: absolute;
          top: 15px;
          left: -18px;
          content: " ";
          width: 6px;
          height: 6px;
          background: #23c132;
          border-radius: 50%;
        }
      }
    }
  }


  .organizer_wrapper {
    width: 100%;
    background: #0E2C49;
  }

  .organizer {
    width: 62.5%;
    min-width: 1200px;
    margin: 0 auto;
    padding-top: 90px;
    .organize {
      width: 260px;
      height: 90px;
      background: #fff;
      border:1px solid #d8d8d8;
      border-radius: 4px;
      margin: 0 auto;
    }

    ul {
      list-style-type: none;
      li {
        width: 24.5%;
        margin-bottom: 40px;
        display: inline-block;
      }
    }
  }
</style>
