// module.exports = {
//     devServer: {
//         proxy: {
//             'api':{
//                 target: "https://hm.baidu.com",
//                 changeOrigin:true,
//                 pathRewrite:{
//                     '^api':''
//                 }
//             }
//         }
//     }
// }
const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    //解决打包后文件读取不到问题
    // baseUrl: './',

    //解决设置预渲染后在子页面刷新应用不到外部文件的问题（因为路径改变了，所以用绝对路径即可）
    baseUrl: '/',


    //全局引入scss
    // chainWebpack: config => {
    //     const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    //     types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    // },
    // // pluginOptions: {
    // //     'style-resources-loader': {
    // //         'patterns': [
    // //             path.resolve(__dirname, './src/assets/scss/variable.scss'),
    // //             path.resolve(__dirname, './src/assets/scss/mixin.scss'),
    // //         ]
    // //     }
    // // }
    // css: {
    //     extract: false
    // }

    //预渲染
    configureWebpack: {
        plugins: [
            // new CopyWebpackPlugin([{
            //     from: 'src/static'
            // }]),
            new PrerenderSpaPlugin(
                path.join(__dirname, 'dist'),
                ['/', '/Msg', '/Load']
            )
        ]
    }

}

// function addStyleResource(rule) {
//     rule.use('style-resource')
//         .loader('style-resources-loader')
//         .options({
//             patterns: [
//                 path.resolve(__dirname, './src/assets/css/variable.scss'),
//                 path.resolve(__dirname, './src/assets/css/mixin.scss'),
//             ],
//         })
// }