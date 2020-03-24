 //使用CORS和JSONP的情况才使用

 let baseURL

 switch (process.env.NODE_ENV) {
   case 'development':
     baseURL = 'http://dev-mall-pre.springboot.cn/api'
     break;
   case 'test' :
     baseURL = 'http://test-mall-pre.springboot.cn/api'
     break;
   case 'prev' :
     baseURL = 'http://prev-mall-pre.springboot.cn/api'
     break;
   case 'prod' :
     baseURL = 'http://mall-pre.springboot.cn/api'
     break;
   default:
     baseURL = 'http://mall-pre.springboot.cn/api'
     break;
 }

 export default {
   baseURL
 }
