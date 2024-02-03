import type { Configuration } from "webpack-dev-server";

export function devServer(options: any): Configuration {
    return options.isDev ?  {
        port: 3000,
        open: true
      } : undefined
}