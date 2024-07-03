module.exports = {
    parser: '@babel/eslint-parser',
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
        requireConfigFile: false,
    },
    plugins: [
        'react',
    ],
    rules: {
        'no-unused-vars': 'warn',
        'react/prop-types': 'off',
        'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
        'no-undef': 'error',
        'no-constant-condition': ['error', { 'checkLoops': false }],
        'react/no-unescaped-entities': 'off'
    },
    globals: {
        module: 'writable',
        require: 'writable'
    }
}