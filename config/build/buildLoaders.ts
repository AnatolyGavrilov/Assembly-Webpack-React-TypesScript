import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IOptions } from '../../types/types'

export function buildLoaders(options: IOptions) {
    return   {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
      }
}