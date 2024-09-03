const withCSS = require('@zeit/next-css');
const cssnano = require('cssnano');

module.exports = withCSS({
  webpack(config, { isServer }) {
    if (!isServer) {
      // Disable cssnano in development
      config.optimization.minimizer.push(
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                mergeLonghand: false,
                cssnano: {
                  preset: ['default', {
                    discardComments: { removeAll: true },
                    discardUnused: false,
                  }],
                },
              },
            ],
          },
        })
      );
    }
    return config;
  },
});
