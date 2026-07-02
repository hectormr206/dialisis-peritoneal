const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'

  const plugins = [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      favicon: 'public/favicon.ico'
    }),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css'
    }),
    // Copies the PWA manifest + icon set (referenced from public/index.html
    // and public/manifest.json) into dist. These were never emitted before
    // this PR — the manifest link and touch icons silently 404'd in
    // production. Skipped: index.html (handled by HtmlWebpackPlugin above)
    // and favicon.ico (already emitted via the `favicon` option above).
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: '.',
          globOptions: {
            ignore: ['**/index.html', '**/favicon.ico']
          }
        }
      ]
    })
  ]

  if (isProduction) {
    plugins.push(
      // Real offline support. GenerateSW must run last so it sees every
      // asset emitted by the plugins above (including the copied manifest
      // icons) when building the precache manifest.
      //
      // Caching strategy:
      // - Precache: JS/CSS bundles + index.html + manifest/icons (the app
      //   shell). Poster images are small enough to be inlined as base64 by
      //   url-loader (see the asset rule below, limit: 90000) so they ride
      //   along inside the precached JS — no separate poster entries needed.
      // - Runtime, CacheFirst: step videos (`.webm`). These are large
      //   (hundreds of KB to a few MB each) and excluded from precache so
      //   installing the app doesn't force-download every video up front;
      //   each video is cached the first time it's actually watched, with a
      //   capped entry count + expiration so storage doesn't grow unbounded
      //   on older/low-storage devices. Range requests are enabled so video
      //   seeking works against the cache.
      // - Runtime, stale-while-revalidate: Google Fonts stylesheet (served
      //   fresh from cache immediately, revalidated in the background).
      // - Runtime, CacheFirst: Google Fonts webfont files (rarely change,
      //   long-lived cache is safe).
      // - navigateFallback: any SPA navigation offline falls back to the
      //   precached index.html, EXCEPT requests for the service worker
      //   itself and any request with a file extension (static assets),
      //   which must resolve to the real asset, never the HTML shell.
      new GenerateSW({
        swDest: 'service-worker.js',
        clientsClaim: true,
        skipWaiting: true,
        cleanupOutdatedCaches: true,
        // entry.[contenthash].js grows past the 2 MiB default cap because
        // small poster images are inlined into it as base64; raise the cap
        // instead of excluding the app's own entry bundle from precache.
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        exclude: [
          /\.map$/,
          /^manifest.*\.js$/,
          /\.webm$/,
          /\.LICENSE\.txt$/
        ],
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [
          /^\/service-worker\.js$/,
          // any request ending in a file extension is a static asset, not
          // a SPA route — never serve it the HTML fallback
          /\.[^/?]+$/
        ],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === 'https://fonts.googleapis.com',
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts-stylesheets'
            }
          },
          {
            urlPattern: ({ url }) => url.origin === 'https://fonts.gstatic.com',
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              cacheableResponse: { statuses: [0, 200] },
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          },
          {
            urlPattern: /\.webm$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'step-videos',
              cacheableResponse: { statuses: [0, 200] },
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 30
              },
              rangeRequests: true
            }
          }
        ]
      })
    )
  }

  return {
    entry: {
      entry: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true
    },
    devServer: {
      historyApiFallback: true,
      static: {
        directory: path.resolve(__dirname, 'public')
      }
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCSSExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCSSExtractPlugin.loader
            },
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: MiniCSSExtractPlugin.loader
            },
            'css-loader',
            'less-loader'
          ]
        },
        {
          test: /\.styl$/,
          use: [
            {
              loader: MiniCSSExtractPlugin.loader
            },
            'css-loader',
            'stylus-loader'
          ]
        },
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 90000
            }
          }
        }
      ]
    },
    plugins,
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  }
}
