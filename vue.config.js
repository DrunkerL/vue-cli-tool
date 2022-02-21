module.exports = {
    pages: {
        index: {
            //入口
            entry: '17_src_配置代理服务器/main.js',
        },
    },
    //开启代理服务器
    /*devServer: {
        proxy: 'http://localhost:8080'
    },*/
    //方式二
    devServer: {
        proxy: {
            '/api': {
                target: '<url>',
                pathRewrite: {'^/drunkerl':''},
                ws: true, //用于支持websocket
                changeOrigin: true  //用于控制请求头中的host值
            }
        }
    },
    lintOnSave: false //关闭语法检查
}