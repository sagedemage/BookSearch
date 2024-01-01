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
        'react/react-in-jsx-scope': 'off'
    }
}
