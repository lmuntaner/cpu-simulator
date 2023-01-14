import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

module.exports = [
  {
    input: "./00-circuit/app.js",
    output: {
      file: "./00-circuit/public/bundle.js",
      format: "iife",
    },
    plugins: [commonjs(), nodeResolve()],
  },
  {
    input: "./01-logic_gates/app.js",
    output: {
      file: "./01-logic_gates/public/bundle.js",
      format: "iife",
    },
    plugins: [commonjs(), nodeResolve()],
  },
];
