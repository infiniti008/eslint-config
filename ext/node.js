module.exports = {
    "env": {
      "browser": false,
      "commonjs": true,
      "es6": true,
      "node": true
    },
    "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": false
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "rules": {
      "no-unreachable": "warn",
		  "no-unused-vars": "warn",
    }
  }