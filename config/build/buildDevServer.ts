import { IOptionsWithEnv } from "../../types/types";

export function devServer(options: IOptionsWithEnv) {
    return options.isDev ?  {
        port: options.env.port ?? 3000,
        open: true
      } : undefined
}