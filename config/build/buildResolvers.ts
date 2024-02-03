import webpack, { Configuration } from 'webpack';

export function buildResolvers():Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
      }
}