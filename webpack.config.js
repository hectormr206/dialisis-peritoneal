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
      // - Precache: JS/CSS bundles + index.html + manifest/icons + every
      //   step poster .jpg (the app shell). Posters used to be inlined as
      //   base64 by url-loader, which bloated entry.[contenthash].js to
      //   ~2.13 MiB; the asset rule below now emits them as real files
      //   (see the module rule's `type: 'asset'` + 4 KiB inline threshold),
      //   so GenerateSW picks each one up as its own precache entry
      //   instead — smaller entry bundle to parse on first load, and the
      //   precache manifest total actually shrank too (no more base64
      //   overhead) even with 47 extra poster entries.
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
        // Posters no longer ride inside entry.[contenthash].js (now a real
        // file emitted per image, see the asset rule below), so nothing in
        // the precache set is anywhere near Workbox's 2 MiB default anymore
        // — the largest entry is vendors.js at ~220 KiB. Kept above the
        // default (2.5 MiB, not 5 MiB) as a small safety margin for future
        // dependency/content growth rather than tuning it to today's exact
        // sizes.
        maximumFileSizeToCacheInBytes: 2.5 * 1024 * 1024,
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
      // Absolute asset URLs so nested SPA routes (/cuidados/higiene) resolve
      // scripts from the root instead of the current path segment
      publicPath: '/',
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
          // Webpack 5 Asset Modules replace url-loader here. Previously
          // every file matching this rule (including every step poster
          // .jpg, none of which exceeds ~44 KiB) was inlined as base64
          // under a 90000-byte limit, which is why entry.[contenthash].js
          // ballooned to ~2.13 MiB — a slow parse on the low-end/older
          // phones this app targets. `maxSize: 4096` keeps genuinely tiny
          // assets (small icons/SVGs) inlined to avoid an extra request,
          // while every poster and video now emits as a real, separately
          // cacheable file under dist/ (and gets its own Workbox precache
          // entry instead of riding along inside the JS bundle).
          test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024
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
