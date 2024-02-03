import path from 'path';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { devServer } from './buildDevServer';
import { buildResolvers } from './buildResolvers';
import { IBuildOptions } from './types/types';

export function buildWebpack(options: IBuildOptions) {
    const {paths} = options

    return {
        mode: options.buildMode ?? 'development',
        entry: paths.entry,
        output: {
          path: paths.output,
          filename: '[name].[contenthash].js',
          clean: true,
        },
        plugins: buildPlugins(options),
        module: buildLoaders(options),
        resolve: buildResolvers(),
        devtool:  options.isDev ?  'inline-source-map': false,
        devServer:  devServer(options)
      };
}