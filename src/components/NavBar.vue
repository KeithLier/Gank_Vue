<template>
  <header class="m-header" :class="{'is-bg':bg,'is-fixed':fixed}">
    <div class="m-header-content" :class="{'is-bg':bg,'is-fixed':fixed}">
      <div class="m-header-button is-left" v-show="leftShow">
        <slot name="left"></slot>
      </div>
      <div class="m-header-title">
        <img v-if="titleIsImg" class="logo" :src="title" alt />
        <h1 v-if="!titleIsImg" v-text="title"></h1>
        <div class="is-center">
          <slot name="center"></slot>
        </div>
      </div>
      <div class="m-header-button is-right">
        <slot name="right"></slot>
      </div>
    </div>
  </header>
</template>
<script >
/**
 * @param title - header显示的标题
 * @param bg - header是否显示的标题背景
 * @param {slot} [left] - 左侧的图片内容和文字
 * @param {slot} [right] - 右侧的图片内容和文字
 * @exmaple
 * <m-header title="豆瓣app" :bg="true">
 *        <a href="javascript:;" slot="left"><img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png"/>返回</a>
 *        <a href="javascript:;" slot="right">分享</a>
 * </m-header>
 */
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    titleIsImg: {
      type: Boolean,
      default: false
    },
    bg: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    leftShow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      
    }
  },
  destroyed: function () {
    // // 清空之前存储的标题
    // this.$store.dispatch("setTitle", "");
  },
  methods: {
    
  }
}
</script>

<style lang="less" >
/*导入颜色变量*/
.m-header {
  margin-bottom: -1px;
}

.m-header-content {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 15px;
  color: rgb(73,73,73);
  position: relative;
  background: #fff;
  a {
    color: rgb(73,73,73);
  }
  .m-header-button {
    width: 70px;
    align-items: stretch;
    &.is-left {
      text-align: left;
    }
    &.is-right {
      text-align: right;
    }
    .m-icon-img {
      width: 22px;
      height: 22px;
      position: relative;
      left: -5px;
      top: 1px;
    }
    .margin-right-10 {
      margin-right: 10px;
    }
  }
  .m-header-title {
    flex: 1;
    text-align: center;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    letter-spacing: 1px;
    h1 {
      font-size: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #000;
      font-weight: normal;
      letter-spacing: 0px;
    }
  }
  &.is-bg {
    background: #000000;
    color: #fff;
    a {
      color: #fff;
    }
    .m-header-title {
      color: #fff;
    }
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 0px;
      background: #e4e4e4;
      transform: scaleY(0.5);
    }
  }
}
.logo {
  max-width: 100%;
  max-height: 44px;
}
</style>
