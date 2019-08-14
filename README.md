# Usage

Put next lines into your _package.json_ file:
```
"eslintConfig": {
  "extends": [
    "./node_modules/infiniti008-eslint-config"
  ]
},
"devDependencies": {
  "infiniti008-eslint-config": "git+https://github.com/infiniti008/eslint-config.git"
}
```

### Node extends:
```
"eslintConfig": {
  "extends": [
    "./node_modules/infiniti008-eslint-config/node"
  ]
}
```

### Widget extends:
```
"eslintConfig": {
  "extends": [
    "./node_modules/infiniti008-eslint-config/widget"
  ]
}
```