module.exports = {
    extends: "eslint-config-airbnb-base",
    rules: {
        "no-console": 2,
    },
    parserOptions: {
        ecmaVersion: 10,
        sourseType: "module",
    },
    env: {
        browser: true,
    },
};
