/**
 * @file Rollup configuration.
 * @author Huan Luo
 */

import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'lib/index.js',
    output: [
      {
        format: 'cjs',
        file: 'dist/index.cjs',
        banner:
          '/*! @author Huan Luo <dukeluo@outlook.com> (https://shaiwang.life) */',
      },
      {
        format: 'es',
        file: 'dist/index.js',
        banner:
          '/*! @author Huan Luo <dukeluo@outlook.com> (https://shaiwang.life) */',
      },
    ],
    plugins: [terser()],
    external: ['is-glob', 'micromatch', 'path'],
  },
  {
    input: 'lib/index.js',
    output: [
      {
        format: 'cjs',
        file: 'dist/index.d.cts',
        banner:
          '/*! @author Huan Luo <dukeluo@outlook.com> (https://shaiwang.life) */',
      },
      {
        format: 'es',
        file: 'dist/index.d.ts',
        banner:
          '/*! @author Huan Luo <dukeluo@outlook.com> (https://shaiwang.life) */',
      },
    ],
    plugins: [dts()],
  },
];
