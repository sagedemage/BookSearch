module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
          "version": "detect"
        }
    },
    "rules": {
        'eqeqeq': 'error',
        'curly': 'error',
        'quotes': [
            'error',
            'single'
        ],
        'no-unused-vars': [
            'error',
            {
                'vars': 'all',
                'args': 'after-used',
                'ignoreRestSiblings': false
            }
        ],
        "prefer-const": "error",
        "no-var": "error",
        "no-lone-blocks": "error",
		"no-eq-null": "error",
		"new-cap": "error",
		"dot-notation": "error",
		"block-scoped-var": "error",
		"no-await-in-loop": "error",
		"no-constructor-return": "error",
		"no-duplicate-imports": "error",
        'react/react-in-jsx-scope': 'off'
    }
}
