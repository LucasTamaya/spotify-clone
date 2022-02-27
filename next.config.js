module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["d34qmkt8w5wll9.cloudfront.net"],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "url-loader",
      },
    });
    return config;
  },
};
