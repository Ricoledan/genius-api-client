import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'
import babel from '@rollup/plugin-babel'
const extensions = ['.js', '.ts']

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'es',
      },
    ],
    plugins: [
      resolve({
        extensions,
      }),
      babel({
        exclude: 'node_modules/**',
        extensions,
      }),
    ],
  },
]
