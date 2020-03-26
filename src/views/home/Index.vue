<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList" :key="i">
                  <li v-for="(sub,j) in item" :key="j">
                    <a :href="'/product/'+sub.id">
                      <img :src="sub.img">
                      {{sub.name}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList" :key="i">
                  <li v-for="(sub,j) in item" :key="j">
                    <a :href="'/product/'+sub.id">
                      <img :src="sub.img">
                      {{sub.name}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList" :key="i">
                  <li v-for="(sub,j) in item" :key="j">
                    <a :href="'/product/'+sub.id">
                      <img :src="sub.img">
                      {{sub.name}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList" :key="i">
                  <li v-for="(sub,j) in item" :key="j">
                    <a :href="'/product/'+sub.id">
                      <img :src="sub.img">
                      {{sub.name}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList" :key="i">
                  <li v-for="(sub,j) in item" :key="j">
                    <a :href="'/product/'+sub.id">
                      <img :src="sub.img">
                      {{sub.name}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList" :key="i">
                  <li v-for="(sub,j) in item" :key="j">
                    <a :href="'/product/'+sub.id">
                      <img :src="sub.img">
                      {{sub.name}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList" :key="i">
                  <li v-for="(sub,j) in item" :key="j">
                    <a :href="'/product/'+sub.id">
                      <img :src="sub.img">
                      {{sub.name}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList" :key="i">
                  <li v-for="(sub,j) in item" :key="j">
                    <a :href="'/product/'+sub.id">
                      <img :src="sub.img">
                      {{sub.name}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList" :key="i">
                  <li v-for="(sub,j) in item" :key="j">
                    <a :href="'/product/'+sub.id">
                      <img :src="sub.img">
                      {{sub.name}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOptions">
          <swiper-slide v-for=" item in slideList" :key="item.id">
            <a :href="'/prouct/'+item.id"><img :src="item.img"></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/product/'+item.id" v-for="(item,index) in adsList" :key="index">
          <img :src="item.img ">
        </a>
      </div>
      <div class="banner-box">
        <a href="/product/30">
          <img src="~assets/img/imgs/banner-1.png">
        </a>
      </div>
    </div>
      <div class="product-box">
       <div class= "container">
          <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/product/30">
              <img src="~assets/img/imgs/mix-alpha.jpg">
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr,a) in phoneList" :key="a">
              <div class="item" v-for="(item,i) in arr" :key="i">
                <span>新品</span>
                <div class="item-img">
                  <img :src="item.img">
                </div>
                <div class="item-info">
                  <h3>{{item.name}}</h3>
                  <p>{{item.text}}</p>
                  <p class="price">{{item.price}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    <service-bar/>
  </div>
</template>

<script>
import ServiceBar from 'components/service/ServiceBar'
import { swiper, swiperSlide  } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name:'Index',
  components:{
    swiper,
    ServiceBar,
    swiperSlide,
  },
  data(){
    return {
      swiperOptions:{
        autoplay: true,
        loop: true,
        effect : 'fade',
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable : true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList:[
        {
          id : '42',
          img : require('../../assets/img/imgs/slider/slide-1.jpg')
        },
        {
          id : '45',
          img : require('../../assets/img/imgs/slider/slide-2.jpg')
        },
        {
          id : '46',
          img : require('../../assets/img/imgs/slider/slide-3.jpg')
        },
        {
          id : '21',
          img : require('../../assets/img/imgs/slider/slide-4.jpg')
        },
        {
          id : '',
          img : require('../../assets/img/imgs/slider/slide-5.jpg')
        },
      ],
      menuList: [
        [
          {
            id:30,
            img: require('../../assets/img/imgs/item-box-1.png'),
            name: '小米CC9'
          },
          {
            id:31,
            img: require('../../assets/img/imgs/item-box-2.png'),
            name: '小米8青春版'
          },
          {
            id:32,
            img: require('../../assets/img/imgs/item-box-3.jpg'),
            name: '小米9青春版'
          },
          {
            id:33,
            img: require('../../assets/img/imgs/item-box-4.jpg'),
            name: '小米电视'
          },
        ],[
          {
            id:30,
            img: require('../../assets/img/imgs/item-box-1.png'),
            name: '小米CC9'
          },
          {
            id:31,
            img: require('../../assets/img/imgs/item-box-2.png'),
            name: '小米8青春版'
          },
          {
            id:32,
            img: require('../../assets/img/imgs/item-box-3.jpg'),
            name: '小米9青春版'
          },
          {
            id:33,
            img: require('../../assets/img/imgs/item-box-4.jpg'),
            name: '小米电视'
          },
        ],[
          {
            id:30,
            img: require('../../assets/img/imgs/item-box-1.png'),
            name: '小米CC9'
          },
          {
            id:31,
            img: require('../../assets/img/imgs/item-box-2.png'),
            name: '小米8青春版'
          },
          {
            id:32,
            img: require('../../assets/img/imgs/item-box-3.jpg'),
            name: '小米9青春版'
          },
          {
            id:33,
            img: require('../../assets/img/imgs/item-box-4.jpg'),
            name: '小米电视'
          },
        ],[
          {
            id:30,
            img: require('../../assets/img/imgs/item-box-1.png'),
            name: '小米CC9'
          },
          {
            id:31,
            img: require('../../assets/img/imgs/item-box-2.png'),
            name: '小米8青春版'
          },
          {
            id:32,
            img: require('../../assets/img/imgs/item-box-3.jpg'),
            name: '小米9青春版'
          },
          {
            id:33,
            img: require('../../assets/img/imgs/item-box-4.jpg'),
            name: '小米电视'
          },
        ],[
          {
            id:30,
            img: require('../../assets/img/imgs/item-box-1.png'),
            name: '小米CC9'
          },
          {
            id:31,
            img: require('../../assets/img/imgs/item-box-2.png'),
            name: '小米8青春版'
          },
          {
            id:32,
            img: require('../../assets/img/imgs/item-box-3.jpg'),
            name: '小米9青春版'
          },
          {
            id:33,
            img: require('../../assets/img/imgs/item-box-4.jpg'),
            name: '小米电视'
          },
        ],[
          {
            id:30,
            img: require('../../assets/img/imgs/item-box-1.png'),
            name: '小米CC9'
          },
          {
            id:31,
            img: require('../../assets/img/imgs/item-box-2.png'),
            name: '小米8青春版'
          },
          {
            id:32,
            img: require('../../assets/img/imgs/item-box-3.jpg'),
            name: '小米9青春版'
          },
          {
            id:33,
            img: require('../../assets/img/imgs/item-box-4.jpg'),
            name: '小米电视'
          },
        ]
      ],
      adsList: [
        {
          id: 33,
          img: require('../../assets/img/imgs/ads/ads-1.png')
        },
        {
          id: 48,
          img: require('../../assets/img/imgs/ads/ads-2.jpg')
        },
        {
          id: 45,
          img: require('../../assets/img/imgs/ads/ads-3.png')
        },
        {
          id: 47,
          img: require('../../assets/img/imgs/ads/ads-4.jpg')
        },
      ],
      phoneList: [
        [
          {
            id : 30,
            name: '小米10',
            img :  require('../../assets/img/imgs/phone.png'),
            text: '嘻嘻嘻嘻嘻嘻嘻嘻',
            price: '2999元'
          },
          {
            id : 30,
            name: '小米10',
            img :  require('../../assets/img/imgs/phone.png') ,
            text: '嘻嘻嘻嘻嘻嘻嘻嘻',
            price: '2999元'
          },
          {
            id : 30,
            name: '小米10',
            img : require('../../assets/img/imgs/phone.png'),
            text: '嘻嘻嘻嘻嘻嘻嘻嘻',
            price: '2999元'
          },
          {
            id : 30,
            name: '小米10',
            img : require('../../assets/img/imgs/phone.png'),
            text: '嘻嘻嘻嘻嘻嘻嘻嘻',
            price: '2999元'
          },
        ],[
          {
            id : 30,
            name: '小米10',
            img : require('../../assets/img/imgs/phone.png'),
            text: '嘻嘻嘻嘻嘻嘻嘻嘻',
            price: '2999元'
          },
          {
            id : 30,
            name: '小米10',
            img : require('../../assets/img/imgs/phone.png'),
            text: '嘻嘻嘻嘻嘻嘻嘻嘻',
            price: '2999元'
          },
          {
            id : 30,
            name: '小米10',
            img : require('../../assets/img/imgs/phone.png'),
            text: '嘻嘻嘻嘻嘻嘻嘻嘻',
            price: '2999元'
          },
          {
            id : 30,
            name: '小米10',
            img : require('../../assets/img/imgs/phone.png'),
            text: '嘻嘻嘻嘻嘻嘻嘻嘻',
            price: '2999元'
          },
        ]
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  @import 'assets/css/mixin.scss';
  @import 'assets/css/config.scss';
  @import 'assets/css/base.scss';
  .index{
    .swiper-box{
      position: relative ;
      .nav-menu{
        position : absolute;
        height: 451px;
        width: 264px;
        z-index: 7;
        padding : 20px 0;
        background-color: #33333345;
        box-sizing: border-box;
        .menu-wrap{
          .menu-item{
            height: 45px;
            line-height: 45px;
            a{
              position: relative ;
              font-size: 16px;
              color: #fff;
              display: block;
              padding-left: 30px;
              &:after{
                position: absolute;
                right: 30px;
                top: 17.5px;
                content: ' ';
                @include bgImg(10px,15px,'~assets/img/imgs/icon-arrow.png');
              }
            }
            &:hover{
              background-color: $colorA;
              .children{
                display: block;
              }
            }
            .children{
              display: none;
              width: 962px;
              height: 451px;
              background-color: #fff;
              position : absolute;
              top: 0;
              left: 264px;
              box-shadow: 6px 7px 6px 0px rgba(0,0,0,0.11);
              ul{
                display: flex;
                justify-content: space-between;
                height: 75px;
                li{
                  height: 75px;
                  line-height: 75px;
                  flex: 1;
                  padding-left: 23px;
                }
                img{
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
                a{
                  color: #000;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
      .swiper-container{
        height: 451px;
        .swiper-button-prev{
          left: 274px;
        }
        img{
          height: 100%;
          width: 100%;
        }
      }
    }
    .ads-box{
      @include flex();
      margin-top: 14px;
      margin-bottom: 31px;
      a{
        width: 296px;
        height: 167px;
      }
    }
    .banner-box{
      margin-bottom: 50px;
    }
    .product-box{
      background-color: $colorJ;
      padding: 30px 0 50px;
      h2{
        font-size: $fontF;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: 20px;
      }
      .wrapper{
        display: flex;
        .banner-left{
          margin-right: 16px;
          img{
            height: 619px;
            width: 224px;
          }
        }
        .list-box{
          .list{
            @include flex();
            width: 986px;
            margin-bottom: 14px;
            &:last-child{
              margin-bottom: 0;
            }
            .item{
              width: 236px;
              height: 302px;
              background-color: $colorG;
              text-align: center;
              .item-img{
                img{
                  width: 100%;
                  height: 195px;
                  margin-bottom: 10px;
                  }
                }
              .item-info{
                h3{
                  font-weight: bold;
                  font-size: $fontJ;
                  color: $colorB;
                  line-height: 14px;
                }
                p{
                  color: $colorD;
                  line-height: 13px;
                  font-weight: bold;
                  margin: 6px auto 13px;
                }
                .price{
                  color: #F20A0A;
                  font-size: 14px;
                  font-weight: bold;
                  cursor: pointer;
                  &:after{
                    content: ' ';
                    @include bgImg(22px,22px,'~assets/img/imgs/icon-cart-hover.png');
                    margin-left: 5px;
                    vertical-align: middle;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
