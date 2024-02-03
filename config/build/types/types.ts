export interface IBuildPaths {
    entry: string,
    html: string,
    output: string
}

export type buildMode = 'production' | 'development'

export interface IBuildOptions {
    buildMode: string,
    port: number,
    paths: IBuildPaths
    isDev: boolean,
    isProd: boolean,
}