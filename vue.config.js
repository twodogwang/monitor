const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "./",
  productionSourceMap: false, //build之后的sourcemap
  devServer: {
    proxy: {
      "/api": {
        target: "http://aqjc.patec.net",
        changeOrigin: true
      }
    }
  },
  lintOnSave: process.env.NODE_ENV !== "production",
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("utils", resolve("src/utils"))
      .set("comp", resolve("src/components"));
  }
};
