module.exports = {
  "transpileDependencies": [
    "vuetify"
  ]
}

module.exports = {
  configureWebpack: {
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  }
};