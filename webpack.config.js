var path = require("path");
var webpack = require("webpack");

var APP_DIR = path.resolve(__dirname, "src/");

module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: ["webpack-hot-middleware/client", "./src/index"],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/static/"
    },
    resolve: {
        root: [APP_DIR, "node_modules"],
        extensions: ["", ".js", ".jsx"]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ["react-hot", "babel"],
                include: APP_DIR
            }
        ]
    }
};
