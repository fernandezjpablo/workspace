module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("ts")
      .test(/\.ts$/)
      .use("ts-loader")
      .loader("ts-loader")
      .tap((options) => {
        options.transpileOnly = true;
        return options;
      });
  },
};
