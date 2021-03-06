const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkbboxWebpackPlugin = require("workbox-webpack-plugin");
const path = require("path");
module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath:'/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: "Petgram - Tú app de fotos de mascotas",
      short_name:"Petgram",
      description:"Con Petgram puedes encontrar fotos de animales domésticos",
      background_color:'#fff',
      theme_color:"#b1a",
      icons:[
        {
          src:path.resolve("src/assets/icon.png"),
          sizes:[96,128,192,256,384,512],
          ios:true
        }
      ]
    }),
    new WorkbboxWebpackPlugin.GenerateSW({
      runtimeCaching:[
        {
          urlPattern:new RegExp("https://(res.cloudinary.com|images.unsplash.com)"),
          handler:"CacheFirst",
          options:{
            cacheName:"images"
          }
        },
        {
          urlPattern:new RegExp("https://https://petgram.jhosuap97.vercel.app/"),
          handler:"NetworkFirst",
          options:{
            cacheName:"api"
          }
        },
        
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
