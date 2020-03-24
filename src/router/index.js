import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Cart = () => import('views/cart/Cart')
const Home = () => import('views/home/Home')
const Index = () => import('views/home/Index')
const Order =() => import('views/order/Order')
const Login = () => import('views/login/Login')
const Detail = () => import('views/detail/Detail')
const AliPay = () => import ('views/alipay/AliPay')
const OrderPay =() => import('views/order/OrderPay')
const Product = () => import('views/product/Product')
const OrderList =() => import('views/order/OrderList')
const OrderConfirm =() => import('views/order/OrderConfirm')

const routes = [
  {
    path:'/',
    name:'home',
    component:Home,
    children:[
      {
        path:'/index',
        name:'index',
        component:Index
      },
      {
        path:'/product/:id',
        name:'product',
        component:Product
      },
      {
        path:'/detail',
        name:'detail',
        component:Detail
      }
    ]
  },
  {
    path:'/cart',
    name:'cart',
    component:Cart
  },
  {
    path:'/order',
    name:'order',
    component:Order,
    children:[
      {
        path:'/list',
        name:'order-list',
        component:OrderList
      },
      {
        path:'/confirm',
        name:'order-confirm',
        component:OrderConfirm
      },
      {
        path:'/pay',
        name:'order-pay',
        component:OrderPay
      },
      {
        path:'/alipay',
        name:'alipay',
        component:AliPay
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
