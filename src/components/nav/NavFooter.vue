<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="~assets/img/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="">WeiBo</a><span>|</span>
      <a href="">Github</a><span>|</span>
      <a href="">WeChat</a><span>|</span>
      <a href="">Twitter</a>
    </div>
    <div class="copyright"><span class="domian">© mi.com</span> 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号
（京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京)-非经营性-2014-0090 </div>
  </div>
</template>

<script>
export default {
  name:"NavFooter"
}
</script>

<style lang="scss" scoped>
  .footer{
    height:234px;
    border-top: 4px solid #FF6600;
    background-color: #333333;
    font-size: 16px;
    text-align: center;
    color: #999999;
    .footer-logo{
      margin-top: 46px;
      margin-bottom: 31px;
      img{
        height: 53px;
        width: 63px;
        margin-bottom: 13px;
      }
    }
    .footer-link{
      a{
        color: #999999;
        display: inline-block;
      }
      span{
        margin:0 10px;
      }
      margin-bottom:13px;
    }
    .copyright{
       .domian{
         color:#FF6600
       }
    }
  }
</style>
