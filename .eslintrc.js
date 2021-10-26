module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
	  // "prettier/prettier": "off",
	  // "indent": 'off'
  }
};
