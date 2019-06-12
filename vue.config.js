var path = require("path");
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
    outputDir: resolve("dist"),
    lintOnSave: false,
    runtimeCompiler: false,
    productionSourceMap: false,
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src'));
    },
    css: {
        sourceMap: process.env.NODE_ENV !== 'production',
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        },
        modules: false
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        hotOnly: true,
        open: true,
        // proxy: {
        //     '/api': {
        //         target: '',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': '/'
        //         }
        //     }
        // }
    }
}