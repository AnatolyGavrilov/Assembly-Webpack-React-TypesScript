import { buildWebpack } from './config/build/buildWebpack';

type Mode = 'production' | 'development'

interface EnvVariables {
  mode: Mode
  port: number
}

export default (env: EnvVariables) => {
  const isDev = env.mode === 'development'
  const isProd = env.mode === 'production'

  const config = buildWebpack({env, isDev, isProd})
  return config
};
