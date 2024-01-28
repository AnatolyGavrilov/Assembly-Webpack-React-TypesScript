export type Mode = 'production' | 'development'

export interface EnvVariables {
  mode: Mode
  port: number
}

export interface IOptions {
    isDev: boolean,
    isProd: boolean,
}

export interface IOptionsWithEnv extends IOptions {
    env: EnvVariables
}