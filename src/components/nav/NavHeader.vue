<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{username}}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username" @click="logout">退出</a>
          <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车({{cartCount}})</a></a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="~assets/img/imgs/nav-img/nav-1.png">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799.00元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="~assets/img/imgs/nav-img/nav-2.png">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799.00元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="~assets/img/imgs/nav-img/nav-3.png">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799.00元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="~assets/img/imgs/nav-img/nav-4.png">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799.00元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="~assets/img/imgs/nav-img/nav-5.png">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799.00元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="~assets/img/imgs/nav-img/nav-6.png">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799.00元起</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RenMi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>小米电视</span>
            <div class="children">
              <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="~assets/img/imgs/nav-img/nav-3-1.jpg">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799.00元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="~assets/img/imgs/nav-img/nav-3-2.jpg">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799.00元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="~assets/img/imgs/nav-img/nav-3-3.png">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799.00元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="~assets/img/imgs/nav-img/nav-3-4.jpg">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799.00元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="~assets/img/imgs/nav-img/nav-3-5.jpg">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799.00元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="~assets/img/imgs/nav-img/nav-3-6.png">
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword"/>
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name:"NavHeader",
  data(){
      return {
        phoneList:[]
      }
    },
    computed:{
      username(){
        return this.$store.state.username;
      },
      cartCount(){
        return this.$store.state.cartCount;
      },
    },
    filters:{
      currency(val){
        if(!val)return '0.00';
        return '￥' + val.toFixed(2) + '元';
      }
    },
    mounted(){
     /* this.getProductList();
      let params = this.$route.params;
      if(params && params.from == 'login'){
        this.getCartCount();
      }*/
    },
    methods:{
      login(){
        this.$router.push('/login');
      },
      /*getProductList(){
        this.axios.get('/products',{
          params:{
            categoryId:'100012',
            pageSize:6
          }
        }).then((res)=>{
          this.phoneList = res.list;
        })
      },*/
      getCartCount(){
        this.axios.get('/carts/products/sum').then((res=0)=>{
          this.$store.dispatch('saveCartCount',res);
        })
      },
      logout(){
        this.axios.post('/user/logout').then(()=>{
          this.$message.success('退出成功');
          this.$cookie.set('userId','',{expires:'-1'});
          this.$store.dispatch('saveUserName','');
          this.$store.dispatch('saveCartCount','0');
        })
      },
      goToCart(){
        this.$router.push('/cart');
      }
    }
}
</script>

<style lang="scss" scope>

  @import '~assets/css/base.scss';
  @import '~assets/css/mixin.scss';
  @import '~assets/css/config.scss';

  .header{
    .nav-topbar{
      height: 39px;
      line-height: 39px;
      background-color: #333333;
    .container{
      @include flex();
      a{
        display: inline-block;
        color: #B0B0B0;
        margin-right: 17px;
      }
      .my-cart{
        width: 110px;
        background-color: $colorA;
        text-align: center;
        color: #ffffff;
        margin-right: 0;
        .icon-cart{
          @include bgImg(16px,12px,'~assets/img/imgs/icon-cart-checked.png' );
          margin-right: 5px;
        }
      }
    }
    }
    .nav-header{
      .container{
        position: relative;
        height: 112px;
        @include flex();
        .header-logo{
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: $colorA;
          a{
            display: inline-block;
            width: 110px;
            height: 55px;
            &:before{
              content:'';
              @include bgImg(55px,55px,'~assets/img/imgs/mi-logo.png',55px);
              transition: margin .2s;
            }
            &:after{
              content:'';
              @include bgImg(55px,55px,'~assets/img/imgs/mi-home.png',55px);
            }
            &:hover:before{
              margin-left: -55px;
              transition: margin .2s;
            }
          }
        }
        .header-menu{
          display:inline-block;
          padding-left: 209px;
          width: 643px;
          .item-menu{
            display: inline-block;
            color: #333333;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-right: 20px;
            span{
              cursor: pointer;
            }
            &:hover{
              color: $colorA;
              .children{
                height:220px;
                opacity:1;
              }
            }
            .children{
              position:absolute;
              top: 112px;
              left: 0;
              width: 1226px;
              height: 0px;
              border-top: 1px solid #E5E5E5;
              box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
              z-index: 8;
              opacity:0;
              overflow:hidden;
              transition:all .5s;
              background-color: #ffffff;
              .product{
                position: relative;
                float: left;
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                a{
                  display: inline-block;
                }
                img{
                  width: auto;
                  height: 111px;
                  margin-top: 26px;
                }
                .pro-img{
                  height: 135px;
                }
                .pro-name{
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                }
                .pro-price{
                  color: $colorA;
                }
                &:before{
                  content: ' ';
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border-left: 1px solid $colorF;
                  height: 100px;
                  width: 1px;
                }
                &:last-child:before{
                  display: none;
                }
              }
            }
          }
        }
        .header-search{
          width: 319px;
          .wrapper{
            height: 50px;
            border: 1px solid #E0E0E0;
            display: flex;
            align-items: center;
            input{
              border: none;
              box-sizing: border-box;
              border-right: 1px solid #E0E0E0;
              width: 264px;
              height: 50px;
              padding-left: 14px;
            }
            a{
              @include bgImg(18px,18px,'~assets/img/imgs/icon-search.png' );
              margin-left: 17px;
            }
          }
        }
      }
    }
  }
</style>
