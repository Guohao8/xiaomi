<template>
  <div class="modal" v-show="showModal">
    <div class="mask"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span>提示</span>
        <a href="javascript:;" class="icon-close"></a>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <div class="btn-group">
          <a href="javascript:;" class="btn">确定</a>
          <a href="javascript:;" class="btn btn-default">取消</a>
        </div>
      </div>
    </div>
  </div>
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


