<template>
  <div class="product-param" :class="{'is_fixed' : isFixed}">
    <div class="container">
      <div class="pro-title">
        {{title}}
      </div>
      <div class="pro-param">
        <a href="javascripte:;">概述</a><span>丨</span>
        <a href="javascripte:;">参数</a><span>丨</span>
        <a href="javascripte:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"productParam",
  props:{
    title:String,
  },
  data() {
    return {
      isFixed : false
    }
  },
  mounted() {
    window.addEventListener('scroll',this.initHeight)
  },
  methods: {
    initHeight(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop
      this.isFixed = scrollTop > 152 ? true : false
    }
  },
  destroyed(){
    window.removeEventListener('scroll',this.initHeight,false)
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/config.scss';
  @import '~assets/css/mixin.scss';
  .product-param{
    height:70px;
    line-height:70px;
    border-top:1px solid $colorH;
    background-color: $colorG;
    &.is_fixed{
      position: fixed;
      top: 0;
      width: 100%;
      box-shadow: 0 3px 3px $colorE;
    }
    .container{
      @include flex();
      .pro-title{
        font-size:18px;
        color:$colorB;
        font-weight:bold;
      }
      .pro-param{
        font-size:14px;
        span{
          margin: 0 10px;
        }
        a{
          color:$colorC;
        }
      }
    }
  }
</style>
