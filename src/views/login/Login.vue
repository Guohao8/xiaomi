<template>
  <div class="login">
    <div class="container">
      <a href="/index"><img class="login-img" src="~assets/img/imgs/login-logo.png" alt=""></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <p class="login-text">
            <span class="checked">账号登录</span><span class="sep-line">丨</span><span>扫码登录</span>
          </p>
          <div class="input">
            <input type="text" placeholder="请输入账号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box"><a href="javascript:;" class="btn" @click="login">登录</a></div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">立即注册<span>丨</span>忘记密码</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="" target="_blank">WeiBo</a><span>|</span>
        <a href="" target="_blank">Github</a><span>|</span>
        <a href="" target="_blank">WeChat</a><span>|</span>
        <a href="" target="_blank">Twitter</a>
      </div>
      <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"Login",
  data(){
    return {
      username: '',
      password: '',
      userId: ''
    }
  },
  methods:{
    login(){
      let {username,password} = this
      this.axios.post('/user/login',{
        username,
        password
      }).then((res) => {
        this.$cookie.set('userId',res.id,{expires: '1M'})
        this.$router.push('/index')
      })
    },
    register(){
      let {username,password} = this
      this.axios.post('/user/login',{
        username : 'xx',
        password : 'xx',
        email: 'xx@163.com'
      }).then((res) => {
        alert('注册成功')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/css/base.scss';
  .login{
  .container{
    height:113px;
      .login-img{
        width:234px;
        height:100%;
        margin-left: 66px;
      }

  }
  .wrapper{
    background:url('~assets/img/imgs/login-bg.jpg') no-repeat center;
    .container{
      height:576px;
      .login-form{
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width:410px;
        height:510px;
        background-color:#ffffff;
        position:absolute;
        bottom:29px;
        right:0;
        .login-text{
          line-height:23px;
          font-size:24px;
          text-align:center;
          margin:40px auto 49px;
          font-weight: 0;
          .checked{
            color:#FF6600;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:20px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          margin-top:10px;
          font-size:16px;
        }
        .tips{
          margin-top:14px;
          display:flex;
          justify-content:space-between;
          font-size:14px;
          cursor:pointer;
          .sms{
            color:#FF6600;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height:100px;
    padding-top:60px;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}
</style>
