module.exports = {
    "env": {
        "browser": true,
        "es6": false,
        "commonjs": false,
        "node": false
    },
    "extends": ["eslint:recommended", "plugin:es5/no-es2015", "plugin:jquery/slim"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "define": false,
        "grecaptcha": false
    },
    "parserOptions": {
        "ecmaVersion": 2015
    },
    "plugins": ["es5", "jquery"],
    "rules": {
        "no-console": 2,
        "no-control-regex": 0,
        "no-useless-escape": 0,
        "no-unused-vars": 1,
        "space-before-blocks": ["error", "always"],
        "object-curly-spacing": ["error", "always"],
        "array-bracket-spacing": ["error", "always"],
        "computed-property-spacing": ["error", "never"],
        "space-in-parens": ["error", "never"]
    }
}