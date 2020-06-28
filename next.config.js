const webpack = require('webpack');

const isProduction = (process.env.NODE_ENV || 'production') === 'production';

const assetPrefix = isProduction ? '/editorials' : '';

module.exports = {
    exportTrailingSlash: true,
    assetPrefix: assetPrefix,
    webpack: config => {
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
            }),
        )    
        return config
    },
}