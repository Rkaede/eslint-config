# eslint-config

### Usage

1. Install the package and peer dependencies:

```bash
npm install -D coreymcg/eslint-config#v0.0.2 eslint prettier
```

2. Create a config file:

```bash
touch .eslintrc
```

3. Extend this package:

```json
{
  "extends": "@coreym/eslint-config-cm"
}
```

4. Update npm scripts

```json
{
  "scripts": {
    "lint": "eslint src",
    "lint:fix": "eslint src --fix"
  }
}
```
