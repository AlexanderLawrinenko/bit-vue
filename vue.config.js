module.exports = {
    devServer: {
        proxy: {
            '': {
                target: 'https://testnet.bitmex.com/api/v1',
                ws: true,
                changeOrigin: true
            }
        }
    }
}