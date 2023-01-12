const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');

module.exports = [
  {
    input: "./00-circuit/app-01.js",
    output: {
      file: "./00-circuit/public/bundle-01.js",
      format: "iife"
    },
    plugins: [commonjs(), nodeResolve()]
  },
  {
    input: "./00-circuit/app-02.js",
    output: {
      file: "./00-circuit/public/bundle-02.js",
      format: "iife"
    },
    plugins: [commonjs(), nodeResolve()]
  },
  {
    input: "./00-circuit/app-03.js",
    output: {
      file: "./00-circuit/public/bundle-03.js",
      format: "iife"
    },
    plugins: [commonjs(), nodeResolve()]
  }
]