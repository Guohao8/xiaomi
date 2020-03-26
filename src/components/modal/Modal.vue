<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
            <a href="javascript:;" class="btn" v-if="btnType == 1" @click="$emit('submit')">{{sureText}}</a>
            <a href="javascript:;" class="btn btn-default" v-if="btnType == 2" @click="$emit('cancel')">{{cancelText}}</a>
          <div class="btn-group" v-if="btnType == 3">
            <a href="javascript:;" class="btn">{{sureText}}</a>
            <a href="javascript:;" class="btn btn-default">{{cancelText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name:"Modal",
  props:{
    // 弹框类型： 小small，中middle，大large，表单form 
    modlType:{
      type:String,
      default: 'form'
    },
    //弹框标题
    title: String,
    //按钮类型 1确定 2取消 3确定取消
    btnType: String,

    sureText:{
      type: String,
      default: '确定'
    },
    cancelText:{
      type: String,
      default: '取消'
    },
    showModal : Boolean 
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/config.scss';
  @import '~assets/css/mixin.scss';
  @import '~assets/css/modal.scss'
</style>


