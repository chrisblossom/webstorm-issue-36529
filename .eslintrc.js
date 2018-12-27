'use strict';

const path = require('path');

module.exports = {
    extends: [
        // webstorm ignores this
        path.resolve(__dirname, 'typescript-eslint.js'),
    ],
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    env: {
        browser: false,
        node: true,
        es6: true,
    },

    rules: {
        'no-console': 'error',
    },

    // webstorm ignores this
    overrides: [
        {
            files: '*.{ts,tsx}',
            parser: 'typescript-eslint-parser',
        },
    ],
};