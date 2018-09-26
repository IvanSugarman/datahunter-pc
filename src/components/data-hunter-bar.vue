<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div class="bar">
      <ul>
        <li v-bind:class="{ active: active == 1}">大赛介绍</li>
        <li v-bind:class="{ active: active == 2}">注册报名</li>
        <li v-bind:class="{ active: active == 3}">作品提交</li>
        <li v-bind:class="{ active: active == 4}">作品展示</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: ['active'],
    data() {
      return {};
    },
  };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
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
        cursor: pointer;
        color: #fff;
        font-size: 24px;
        line-height: 60px;
        text-align: center;
        &.active {
          background: #1C3C5A;
        }
      }
    }
  }

</style>
