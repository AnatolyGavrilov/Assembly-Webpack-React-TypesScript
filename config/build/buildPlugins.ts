import path from 'path';
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IBuildOptions } from './types/types';

export function buildPlugins(options: IBuildOptions):Configuration['plugins'] {

  const {paths} = options

  const plugins: Configuration['plugins'] = [new HtmlWebpackPlugin({
    template: paths.html,
  }),]

  if (options.isDev) {
    plugins.push(new webpack.ProgressPlugin())
  }

  if (options.isProd) {
    plugins.push(new MiniCssExtractPlugin(
      {
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      }
    ))
  }

    return plugins
}