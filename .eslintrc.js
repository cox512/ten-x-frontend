module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  root: true,
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "jest"],
  rules: {
    "prettier/prettier": 1,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/forbid-prop-types": [0, { forbid: ["any"] }],
    "react/prop-types": 0,
    "no-unused-vars": [1, { vars: "all", args: "after-used", ignoreRestSiblings: false }],
    "arrow-body-style": [0, "always"],
    "react/jsx-props-no-spreading": "off",
  },
};
