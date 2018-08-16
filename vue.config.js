const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
module.exports = {
  pages: {
    index: {
      entry: "src/main.ts",
      template: "public/index.html"
    },
    preview: {
      entry: "src/preview.ts",
      template: "public/preview.html"
    }
  },
  configureWebpack: {
    plugins: [new MonacoWebpackPlugin()]
  },
  baseUrl: process.env.NODE_ENV === "production" ? "./" : "/"
};
