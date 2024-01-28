import { buildWebpack } from './config/build/buildWebpack';
import { EnvVariables } from './types/types';

export default (env: EnvVariables) => {
  const isDev = env.mode === 'development'
  const isProd = env.mode === 'production'

  const config = buildWebpack({env, isDev, isProd})
  return config
};
