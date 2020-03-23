module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        'assets' : '@/assets',
        'api' : '@/api',
        'components' : '@/components',
        'storage' : '@/storage',
        'views' : '@/views',
        'util' : '@/util',
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
