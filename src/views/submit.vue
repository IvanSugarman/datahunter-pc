<template>
  <div class="wrapper" id="submit" @scroll="prevent" @click="prevent" @mousewheel="prevent">
    <data-hunter-header title="可视化之星大赛"/>
    <data-hunter-banner/>
    <data-hunter-bar active="3"/>
    <div class="info">
      <div class="title">
        作品要求
      </div>
      <p>参赛作品必须保证原创性，不得抄袭，不违反任何中华人民共和国的有关法律，不侵犯任何第三方知识产权或者其他权利；一经发现或经权利人提出并查证，大赛组织方将取消其参赛资格。</p>
    </div>
    <div class="form-wrapper">
      <div class="form">
        <div class="title">
          信息提交
        </div>
        <div class="form-input">
          <label for="email" id="email-label">常用邮箱</label>
          <div>
            <input id="email" type="text" placeholder="请输入邮箱地址" v-model="item.email"
                   :class="{'input-error': !valid.email}">
          </div>
        </div>
        <div class="form-input">
          <label for="name" id="name-label">作品名称</label>
          <div>
            <input id="name" type="text" placeholder="请输入作品名称" v-model="item.name"
                   :class="{'input-error': !valid.name}">
          </div>
        </div>
        <div class="form-input">
          <label for="description" id="description-label">作品说明</label><span>（不少于80字，需要包含作品主题、作品逻辑以及数据分析说明等）</span>
          <div>
            <textarea name="description" id="description" placeholder="不少于80字" v-model="item.description"
                      :class="{'input-error': !valid.description}"></textarea>
          </div>
        </div>
        <div class="form-input">
          <label for="href" id="href-label">作品看板链接</label>
          <div>
            <textarea name="href" id="href" placeholder="可提交相同主题下，多个看板链接，用1、2、3标明" v-model="item.href"
                      :class="{'input-error': !valid.href}"></textarea>
          </div>
          <p class="tips">提示：作品收集截止后，将不得修改作品链接。请务必保证参赛期间，链接有效！</p>
        </div>
        <div class="form-input">
          <label for="cover" id="cover-label">作品封面</label>
          <div class="form-input__file">
            <img src="@/assets/upload.png" alt="" v-if="!item.cover">
            <img :src="item.cover" alt="" v-if="item.cover">
            <input type="file" name="cover" id="cover" @change="getImage" ref="fileInput">
          </div>
          <p class="tips">提示：请使用作品整体截图，建议尺寸1920x1080，1366x768，支持png，jpg格式</p>
        </div>
        <div class="form-input">
          <label>封面示意图</label>
          <div class="form-show-image">
            <img src="@/assets/exp.png" alt="">
          </div>
        </div>
        <div class="button" @click="submit">确定提交</div>
      </div>
    </div>
    <data-hunter-footer/>
    <data-hunter-dialog type="login" v-show="showLogin" @showDialog="showDialog"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import qs from 'qs';

  export default{
    mounted: function () {
      let uid = this.$store.getters.getUid;
      let router = this.$router;
      let url;
      document.getElementById("submit").style.minHeight = document.documentElement.clientHeight + 'px';

      if (!uid) {
          this.showLogin = true;
    } else {
        url = this.$store.getters.getUrl('isCommit?uid=' + uid);
        this.axios.get(url).then(response => {
          response = qs.parse(response.data);
          if (response.data.commit) {
            router.push('/submit-success/' + response.data.wid + '#success-image');
          }
        });
      }
    },
      data() {
        return {
          item: {
          email: '',
          name: '',
          description: '',
          href: '',
          cover: '',
          author: '',
        },
        valid: {
          email: true,
          name: true,
          description: true,
          href: true,
        },
        image: '',
        showLogin: false,
      };
    },
    methods: {
      getImage: function () {
        let image;

        if (this.$refs.fileInput.files.length !== 0) {
          image = new FormData();
          image.append('imageFile', this.$refs.fileInput.files[0]);
        }

        this.axios.post(this.$store.getters.getUrl('image/upload'), image, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(res => {
          if (res.data.code == -4) {
            alert('上传图片出错!');
          } else {
            this.item.cover = 'http://vote.datahunter.cn' + res.data.data.path;
          }
        });
      },
      showDialog(type) {
          if (type) {
              this.showLogin = true;
          } else {
              this.showLogin = false;
          }
      },
      prevent(e) {
        if (this.showLogin) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      },
      submit: function () {
        let result;
        let href;
        let uid = this.$store.getters.getUid;
        let author = this.$store.getters.getAuthor;
        let flag = true;

        if (!uid) {
            this.showLogin = true;
            return;
        }

        for (let [k, v] of Object.entries(this.item)) {
          if (!v) {
            this.valid[k] = false;
            flag = false;
            href = href ? href : k;
          } else {
            this.valid[k] = true;
          }
        }

        if (href) {
            this.$router.push('/submit#' + href + '-label');
        }

        if (this.item.description.length < 80) {
          this.valid.description = false;
          flag = false;
        }

        this.item.author = author;

        result = {
          uid: uid,
          content: JSON.stringify(this.item),
        };

        if (flag) {
          this.axios.post(this.$store.getters.getUrl('work'), qs.stringify(result),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(response => {
            if (response.data.code == '-3') {
              alert('此内容已上传过!');
            } else {
              this.$router.push('/submit-success/' + response.data.data.id + '#success-image');
            }
          });
        }
      }
    }
  };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  #submit {
    min-width: 1280px;
    margin: 0 auto;
    padding-bottom: 90px;
    background: rgb(16, 33, 49);
  }

  .title {
    margin: 80px 0 40px;
    text-align: center;
    font-size: 36px;
    color: #fff;
  }

  .info {
    width: 62.5%;
    min-width: 1200px;
    margin: 0 auto;
    p {
      width: 63%;
      margin: 0 auto;
      font-size: 16px;
      color: #fff;
    }
  }

  .form-wrapper {
    width: 62.5%;
    min-width: 1200px;
    margin: 0 auto;
  }

  .form {
    width: 63%;
    margin: 0 auto;

    label {
      display: inline-block;
      font-size: 20px;
      color: #fff;
      margin-bottom: 12px;
    }

    span {
      color: rgba(255, 255, 255, .6);
      font-size: 16px;
    }

    .tips {
      color: rgba(255, 255, 255, .6);
      font-size: 16px;
      margin-top: -20px;
      margin-bottom: 20px;
    }

    input:focus, textarea:focus {
      border: 1px solid #3674b0;
      color: #fff;
      opacity: .8;
    }

    .form-input__file {
      position: relative;
      width: 400px;
      margin-bottom: 35px;
      padding-bottom: 225px;

      input {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
      }

      img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }

    .form-show-image {
      position: relative;
      width: 400px;
      padding-bottom: 225px;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }

    textarea {
      height: 260px;
      overflow: auto;
    }

    #description {
      height: 100px;
    }

    input, textarea {
      border: 1px solid transparent;
      background: rgba(255, 255, 255, .06);
      width: 100%;
      margin-bottom: 35px;
      opacity: .6;
      font-size: 16px;
      padding: 10px 20px;
      color: #fff;
      border-radius: 4px;
      outline: none;
      resize: none;
    }

    .input-error {
      color: rgb(253, 72, 72);
      background: rgba(253, 72, 72, 0.06);
      border: 1px solid #fd4848;
      &::-webkit-input-placeholder {
        color: rgb(253, 72, 72);
      }
      &:focus {
        border: 1px solid #fd4848;
      }
    }
  }

  .button {
    cursor: pointer;
    margin: 60px 0 100px;
    width: 160px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    background-image: linear-gradient(37deg, #4DFF58 0%, #1ED884 94%);
    border-radius: 100px;
  }

</style>
