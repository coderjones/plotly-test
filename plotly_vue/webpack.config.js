const path = require('path');

module.exports = {


    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'ify-loader'
            }
        ]
    }

}