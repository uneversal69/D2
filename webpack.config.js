const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public", "dist"),
    filename: "app.js",
  },
  devServer: {
    open: {
      target: ["inventory.html"],
    },
    static: {
      directory: path.join(__dirname, "./src"),
      watch: true,
    },
    watchFiles: ["./src/*"],
    liveReload: true,
  },
  target: "web",
};
