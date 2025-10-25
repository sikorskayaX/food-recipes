module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:storybook/recommended"
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        "@typescript-eslint/no-empty-function": 0,
        "semi": [2, "always"],
        "object-curly-spacing": [2, "always"],
        "no-tabs": 0,
        "dot-notation": 0,
        "indent": ["warn", "tab", { "SwitchCase": 1 }],
        "no-unused-vars": 0,
        "eol-last": 0,
        "no-return-assign": 0,
        "react/no-unknown-property": 0,
        "no-extra-boolean-cast": "off",
        '@typescript-eslint/no-unused-vars': 1,
        'no-case-declarations': 0,
        'no-mixed-spaces-and-tabs': 0
    },
}
