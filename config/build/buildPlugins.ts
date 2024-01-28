import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IOptions } from '../../types/types';

export function buildPlugins(options: IOptions) {
    return  [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        options.isDev && new webpack.ProgressPlugin(),
        options.isProd && new MiniCssExtractPlugin(
          {
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
          }
        ) 
      ].filter(Boolean)
}