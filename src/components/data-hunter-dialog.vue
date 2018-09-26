<template>
  <div class="Dialog__wrapper" @click="closeDialog">
    <div class="Dialog" @click="prevent">
      <div class="Dialog__img">
        <img src="@/assets/success.png" alt="" v-if="this.type == 'success'">
        <img src="@/assets/error.png" alt="" v-if="this.type == ('login' || 'error')">
      </div>
      <div class="Dialog__title">
        <p v-if="this.type == 'success'">投票成功!</p>
        <p v-if="this.type == 'error'">投票次数已达到上限，请明天再投!</p>
        <p v-if="this.type == 'login'">您尚未登录，请登录后操作！</p>
      </div>
      <div class="Dialog__login" v-if="this.type == 'login'">
        <div class="Dialog__button_cancel" @click="closeDialog">返回</div>
        <router-link tag="div" to="/works" class="Dialog__button_login">去登录</router-link>
      </div>
      <router-link tag="div" to="/works" class="Dialog__button" v-if="this.type == ('success' || 'error')">查看所有作品</router-link>
      <div class="Dialog__close" @click="closeDialog">×</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
      mounted(){
        console.log(this.type);
      },
    props: ['type', 'title'],
    data() {
      return {
          showDialog: false,
      };
    },
    methods: {
      closeDialog() {
        this.$emit('showDialog');
      },
      prevent(e) {
          e.preventDefault();
          e.stopPropagation();
          return false;
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  .Dialog__wrapper {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 9999;
  }

  .Dialog {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 50%;
    top: 50%;
    width: 460px;
    height: 280px;
    background: #fff;
    padding: 30px;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    overflow: auto;
  }

  .Dialog__img {
    position: relative;
    margin: 0 auto 16px;
    width: 60px;
    padding-bottom: 60px;
  }

  .Dialog__img img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .Dialog__title {
    font-size: 16px;
    color: #333;
  }

  .Dialog__title p {
    text-align: center;
  }

  .Dialog__button {
    cursor: pointer;
    margin-top: 31px;
    width: 160px;
    height: 36px;
    text-align: center;
    background-image: linear-gradient(37deg, #1ED884 0%, #4DFF58 94%);
    color: #fff;
    font-size: 14px;
    line-height: 36px;
    border-radius: 100px;
  }

  .Dialog__close {
    position: absolute;
    right: 5px;
    top: 0;
    color: #979797;
    font-size: 28px;
    text-shadow: 0 1px 0 #fff;
  }

  .Dialog__login {
    display: flex;
    margin-top: 25px;
    justify-content: space-around;
  }

  .Dialog__button_cancel {
    cursor: pointer;
    display: inline-block;
    text-align: center;
    width: 120px;
    height: 46px;
    line-height: 46px;
    border-radius: 100px;
    border: 1px solid #999999;
    font-size: 16px;
    color: #999999;
  }

  .Dialog__button_login {
    cursor: pointer;
    display: inline-block;
    margin-left: 20px;
    background-image: linear-gradient(37deg, #4DFF58 0%, #1ED884 94%);
    width: 120px;
    height: 46px;
    line-height: 46px;
    border-radius: 100px;
    color: #fff;
    font-size: 16px;
    text-align: center;
  }

</style>
