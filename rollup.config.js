import resolve from '@rollup/plugin-node-resolve'
import localResolve from 'rollup-plugin-local-resolve'
import pkg from './package.json'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import filesize from 'rollup-plugin-filesize'
import minify from 'rollup-plugin-babel-minify'
import { terser } from 'rollup-plugin-terser'
const extensions = ['.js', '.ts']

const INPUT_FILE_PATH = 'src/index.ts'

const GLOBALS = {
  axios: 'axios',
}

const EXTERNAL = ['axios']

const OUTPUT_DATA = [
  {
    file: pkg.main,
    format: 'cjs',
  },
  {
    file: pkg.module,
    format: 'es',
  },
]

const PLUGINS = [
  json(),
  localResolve(),
  resolve({
    extensions,
  }),
  babel({
    exclude: 'node_modules/**',
    extensions,
  }),
  minify(),
  terser(),
  commonjs(),
  filesize(),
]

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    format,
    name: pkg.name,
    globals: GLOBALS,
  },
  external: EXTERNAL,
  plugins: PLUGINS,
}))

export default config
