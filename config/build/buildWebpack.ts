import path from 'path';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';

export function buildWebpack(options: any) {
    return {
        mode: options.env.mode ?? 'development',
        entry: path.resolve(__dirname, 
          '../../src', 'index.tsx'),
        output: {
          path: path.resolve(__dirname, '../../build'),
          filename: '[name].[contenthash].js',
          clean: true,
        },
        plugins: buildPlugins(options),
        module: buildLoaders(options),
        resolve: {
          extensions: ['.tsx', '.ts', '.js'],
        },
        devtool:  options.isDev ?  'inline-source-map': false,
        devServer:  options.isDev ?  {
          port: options.env.port ?? 3000,
          open: true
        } : undefined
      };
}