import tsup, { Options } from 'tsup';
const ENV = process.env.NODE_ENV;
const { defineConfig } = tsup;

// 主要区分一下build时不执行onSuccess
function generateTsupConfig(options: Options) {
  const baseConfig = {
    entry: ['src/index.ts'],
    outDir: 'dist',
    format: ['esm'],
    dts: false,
    minify: options.minify,
    watch: options.watch,
    clean: true,
    platform: 'node',
    splitting: false,
  };

  return ENV === 'development'
    ? {
        ...baseConfig,
        onSuccess: 'node dist/index.mjs',
      }
    : baseConfig;
}
export default defineConfig(options => generateTsupConfig(options) as Options);
