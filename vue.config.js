const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // lintOnSave:false, //关闭语法检查

  //开启代理服务器，解决跨域问题(也就是改变端口号不同)
  // devServer:{
  //   proxy: 'http://localhost:8080'
  // }

  devServer:{
    proxy:{
      '/shiCi':{
        target:'http://localhost:8080',
        //重写路径，去掉自定义的网络前缀
        pathRewrite:{'^/shiCi':''},
        ws: true, //用于支持websocket
        changeOrigin: true //用于控制请求头中的host值
      },
      '/shiCi2':{
        target:'http://localhost:5000',
        //重写路径，去掉自定义的网络前缀
        pathRewrite:{'^/shiCi2':''},
        ws: true, //用于支持websocket
        changeOrigin: true //用于控制请求头中的host值
      },
    }
  }
})
// 调整脚手架的工作模式