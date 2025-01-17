module.exports = {
  eslint: {
    enabled: false
  },
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.path = webpackConfig.output.path.replace('/build', '/docs')
      webpackConfig.resolve.alias['react/jsx-dev-runtime'] ="react/jsx-dev-runtime.js"
      webpackConfig.resolve.alias['react/jsx-runtime'] ="react/jsx-runtime.js"

      return webpackConfig
    }
  },
}
