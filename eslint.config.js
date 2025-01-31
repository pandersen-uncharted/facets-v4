import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

// export default

export default [
    {
        ignores: [
            'dist/',
            '**/dist/**',
            '**/*.example.*',
            '**/vite.config.js'
        ]
    },
    {
        files: ['**/*.{ts,js,vue}'],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 0,
            '@typescript-eslint/no-var-requires': 2,
            '@typescript-eslint/no-non-null-assertion': 2,
            '@typescript-eslint/no-use-before-define': 2,
            '@typescript-eslint/camelcase': 0,
            '@typescript-eslint/no-empty-interface': 2,
            '@typescript-eslint/explicit-function-return-type': 2,
            '@typescript-eslint/ban-ts-ignore': 0,
            '@typescript-eslint/ban-ts-comment': 0,
            '@typescript-eslint/explicit-module-boundary-types': 0,
            '@typescript-eslint/no-inferrable-types': [2, {
                'ignoreParameters': true,
                'ignoreProperties': true,
            }],
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['error', {
                'argsIgnorePattern': '^_',
                'caughtErrors': 'none'
            }]
        }
    }
]
