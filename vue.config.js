// vue.config.js
module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('file-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://open.douyucdn.cn/api/RoomApi',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/category': {
        target: 'https://m.douyu.com/category',
        changeOrigin: true,
        pathRewrite: {
          '^/category': ''
        }
      }
    }
  }
}