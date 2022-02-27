module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["storage.googleapis.com"],
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
