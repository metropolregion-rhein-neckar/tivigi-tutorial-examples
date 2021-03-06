module.exports = {

  runtimeCompiler: true,

  publicPath: './',

  configureWebpack: {
    module: {
      rules: [
        {
          test: /.html$/,
          loader: "vue-template-loader",
          exclude: /index.html/
        },
        {
          test: /\.(css|scss)$/,
          loaders: ["sass-loader"]
        }
      ]
    }
  }
}

