<template>
  <div class="Dialog__wrapper" @click="closeDialog">
    <div class="Dialog" @click="prevent">
      <div class="Dialog__img">
        <img src="@/assets/success.png" alt="" v-if="this.type == 'success'">
        <img src="@/assets/error.png" alt="" v-if="this.type == 'login' || this.type == 'error'">
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
      <div class="Dialog__login" v-if="this.type == 'success' || this.type == 'error'">
        <router-link tag="div" to="/works" class="Dialog__button">查看所有作品</router-link>
        <router-link tag="div" to="/" class="Dialog__button_join">我要参加</router-link>
      </div>
      <div class="Dialog__close" @click="closeDialog">×</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
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
    justify-content: space-between;
  }

  .Dialog__button,
  .Dialog__button_cancel,
  .Dialog__button_login,
  .Dialog__button_join {
    cursor: pointer;
    display: inline-block;
    text-align: center;
    width: 140px;
    height: 46px;
    line-height: 46px;
    font-size: 16px;
    border-radius: 100px;
  }

  .Dialog__button_cancel {
    border: 1px solid #999999;
    color: #999999;
    width: 120px;
  }

  .Dialog__button_login {
    background-image: linear-gradient(37deg, #4DFF58 0%, #1ED884 94%);
    color: #fff;
    width: 120px;
    margin-left: 20px;
  }

  .Dialog__button {
    background-image: linear-gradient(37deg, #1ED884 0%, #4DFF58 94%);
    color: #fff;
    margin-right: 20px;
  }

  .Dialog__button_join {
    border: 1px solid #23C132;
    color: #23C132;
  }

</style>
