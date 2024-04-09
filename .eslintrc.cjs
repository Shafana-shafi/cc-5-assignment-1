module.exports = {
    env: {
        es2021: true,
        node: true,
        "vitest-globals/env": true
    },
    extends: ['airbnb-base', 'prettier', "plugin:vitest-globals/recommended"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {},
};