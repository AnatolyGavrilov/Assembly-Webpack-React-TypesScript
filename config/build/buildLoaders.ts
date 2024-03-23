import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { IBuildOptions } from "./types/types";

export function buildLoaders(options: IBuildOptions): {
  rules: ModuleOptions["rules"];
} {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoadersWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: "[path][name]__[local]",
      },
    },
  };

  const stylesLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoadersWithModules,
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return {
    rules: [tsLoader, stylesLoaders],
  };
}
