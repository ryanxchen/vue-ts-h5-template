module.exports = {
  // publicPath: '/mec/',
  // pages: {
  //   app: {
  //     entry: 'src/index.js',
  //     template: 'src/index.html',
  //     filename: 'index.html'
  //   }
  // },
  // outputDir: 'dist/mec',
  // assetsDir: 'static',
  // runtimeCompiler: true,
  // productionSourceMap: false,
  // // 将neon源码包里的js进行babel-loader转译
  // transpileDependencies: [
  //   '@insaic'
  // ],
  configureWebpack: {
    performance: {
      hints: process.env.NODE_ENV === 'production' ? 'error' : false,
      maxEntrypointSize: 512000, // 500kb * 1024 = 512000字节
      maxAssetSize: 512000, // 500kb * 1024 = 512000字节
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  },
  // 将neon源码包里的scss变量引入，实现自定义样式主题
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/variables.sass";`
      }
    }
  },
  devServer: {
    proxy: {
      '/h5-api': {
        // target: 'https://mecsit.insaic.com',
        target: 'https://mecdev.insaic.com:9443',
        changeOrigin: true,
        pathRewrite: {
          '^/h5-api': '/h5-api'
        }
      }
    }
  },
  chainWebpack: config => {
    // version
    config
      .plugin('html')
      .tap(args => {
        args[0].htmlMeta = getMetaInfo()
        // 添加 build 时间 -- version
        args[0].version = getVersion()
        // 添加 CDN 参数到 htmlWebpackPlugin 配置中，见 src/index.html 修改
        if (process.env.NODE_ENV === 'production') {
          args[0].cdn = cdnConfig().build
        } else if (process.env.NODE_ENV === 'development') {
          args[0].cdn = cdnConfig().dev
        }
        return args
      })
    // 提取公共资源，并使用cdn加载
    // if (process.env.NODE_ENV === 'production') {
    //   config.externals({
    //     'babel-polyfill': 'window',
    //     'fastclick': 'FastClick',
    //     'vue': 'Vue',
    //     'vue-router': 'VueRouter',
    //     'vuex': 'Vuex'
    //   })
    // }

    if (process.env.npm_config_report) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  }
}

function getMetaInfo () {
  return {
    metaKeywords: '',
    metaDescription: ''
  }
}

function getVersion() {
  let date = new Date()
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset()) // toJSON 的时区补偿
  return date.toJSON().substr(0, 19).replace(/[-T:]/g, '')
}

function cdnConfig() {
  return {
    dev: {
      css: [],
      js: []
    },
    build: {
      css: [],
      js: [
        // 'https://cdn.bootcss.com/babel-polyfill/6.26.0/polyfill.min.js',
        // 'https://cdn.bootcss.com/fastclick/1.0.6/fastclick.min.js',
        // 'https://cdn.bootcss.com/vue/2.5.17/vue.min.js',
        // 'https://cdn.bootcss.com/vue-router/3.0.2/vue-router.min.js',
        // 'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js'
      ]
    }
  }
}
