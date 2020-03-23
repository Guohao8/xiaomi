module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        'assets' : '@/assets',
        'api' : '@/api',
        'components' : '@/components',
        'views' : '@/views',
        'util' : '@/util',
        'storage' : '@/../src/storage'
      }
    }
  },
  devServer:{
    host:'localhost',
    port:8000,
    proxy:{
      '/api':{
        target:'https://www.imooc.com',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  }
}
