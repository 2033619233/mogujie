module.exports = {
    configureWebpack: {
        resolve: {
            // extensions: ['.js', '.json', '.wasm'],
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'network': '@/network',
                'common': '@/common',
                'views': '@/views'
            },
        },
    }
}