module.exports = {
    parser: '@babel/eslint-parser',
    env: {
        browser: true,
        es6: true,
        node: true // Adicionar isso
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
        'quotes': ['error', 'single'],
        'no-undef': [
            'error', 
            {
                "typeof": true
            }
        ],
        'no-constant-condition': [
            'error',
            {
                "checkLoops": false
            }
        ],
    },
    globals: {
        module: 'writable',
        require: 'writable'
    }
}