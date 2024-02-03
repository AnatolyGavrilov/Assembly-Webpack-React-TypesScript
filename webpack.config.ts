import path from 'path';
import { buildWebpack } from './config/build/buildWebpack';
import { IBuildPaths } from './config/build/types/types';

export default (env: any) => {
  const isDev = env.mode === 'development'
  const isProd = env.mode === 'production'

  const paths: IBuildPaths = {
    output: path.resolve(__dirname,'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }

  const config = buildWebpack({
    port : 3000,
    buildMode: env.mode ?? 'development',
    paths,
    isDev,
    isProd
  })
  return config
};
