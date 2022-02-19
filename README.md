# eslint-config

### Usage

1. Install the package and peer dependencies:

```bash
npm install -D coreymcg/eslint-config#v0.0.1 eslint prettier
```

2. Extend this package:

```json
{
  "extends": "@coreym/eslint-config-cm"
}
```

3. Update npm scripts

```json
{
  "scripts": {
    "lint": "eslint src",
    "lint:fix": "eslint src --fix"
  }
}
```
