module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "unused-imports",
    ],
    "rules": {
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': ['warn', {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
            allowDirectConstAssertionInArrowFunctions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: false,
        }],
        '@typescript-eslint/explicit-module-boundary-types': ['warn', {
            allowArgumentsExplicitlyTypedAsAny: true,
            allowDirectConstAssertionInArrowFunctions: true,
            allowedNames: [],
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
        }],
        '@typescript-eslint/no-explicit-any': 'off',
        "@typescript-eslint/no-invalid-this": ["error"],
        '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '_' }],
        '@typescript-eslint/no-empty-function': ['warn'],
        'camelcase': 'off',
        'arrow-parens': ['error', 'always'],
        "indent": "off",
        "@typescript-eslint/indent": ["error", 2],
        // https://github.com/typescript-eslint/typescript-eslint/issues/1824
        // '@typescript-eslint/indent': ['error', 2],
        'max-len': [
            1,
            {
                code: 110,
                ignoreComments: true,
                ignorePattern: '^(\\s*[a-zA-Z_]+: \'[^\']+\'[,;]*)|(.*interpolate.*)|(.*require.*)|(.*_\\.template.*)|(<svg .*)|(<rect .*)|(<polygon .*)$',
                ignoreRegExpLiterals: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                tabWidth: 2,
            },
        ],
        'no-console': 'warn',
        'no-invalid-this': 'off',
        'no-mixed-operators': 'error',
        'no-multiple-empty-lines': ['warn', { max: 1 }],
        'no-nested-ternary': 'error',
        'no-param-reassign': 'error',
        'no-plusplus': 'error',
        'object-curly-spacing': ['warn', 'always'],
        'quote-props': ['error', 'as-needed'],
        'quotes': ['error', 'single'],
        'radix': [1, 'as-needed'],
        'react/display-name': 'off',
        'react/jsx-wrap-multilines': [
            'warn',
            {
                arrow: 'parens',
                assignment: 'parens',
                condition: 'parens',
                declaration: 'parens',
                logical: 'parens',
                prop: 'parens',
                return: 'parens-new-line',
            },
        ],
        'react/sort-comp': [
            'warn',
            {
                groups: {
                    lifecycle: [
                        'statics',
                        'displayName',
                        'propTypes',
                        'contextTypes',
                        'childContextTypes',
                        'mixins',
                        'defaultProps',
                        'constructor',
                        'getDefaultProps',
                        'state',
                        'getInitialState',
                        'getChildContext',
                        'getDerivedStateFromProps',
                        'componentWillMount',
                        'UNSAFE_componentWillMount',
                        'componentDidMount',
                        'componentWillReceiveProps',
                        'UNSAFE_componentWillReceiveProps',
                        'shouldComponentUpdate',
                        'componentWillUpdate',
                        'UNSAFE_componentWillUpdate',
                        'getSnapshotBeforeUpdate',
                        'componentDidUpdate',
                        'componentDidCatch',
                        'componentWillUnmount',
                    ],
                },
                order: [
                    'static-methods',
                    'instance-variables',
                    'lifecycle',
                    'everything-else',
                    'render',
                ],
            },
        ],
        'require-jsdoc': 'off',
        'semi': ['error', 'always'],
        'space-infix-ops': ['error', { int32Hint: false }],
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                args: 'after-used',
                argsIgnorePattern: '^_',
                vars: 'all',
                varsIgnorePattern: '^_',
            },
        ],
        'eqeqeq': ['error', 'always'],
    },
    "settings": {
        "react": {
            "version": 'detect',
        },
    }
};
