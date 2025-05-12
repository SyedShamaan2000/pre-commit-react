# Pre-commit Setup with Husky, Prettier, and ESLint

This guide sets up a pre-commit hook using Husky, Prettier, and ESLint to ensure consistent code quality and formatting in the `frontend` folder of this repository.

---

## 1. Install Husky in the Git Root

Run the following commands in the root of your Git repository (where `.git` is located):

```bash
npm install husky
npx husky init
```

This will create a `.husky` folder and initialize Git hooks.

---

## 2. Configure Pre-commit Hook

Inside `.husky/pre-commit`, add the following line:

```bash
cd frontend && npm run precommit
```

---

## 3. Setup in Frontend Folder

### Install Required Packages

Navigate to the `frontend` directory and install the necessary packages:

```bash
npm install eslint @eslint/js prettier eslint-plugin-react-hooks eslint-plugin-react-refresh globals
```

### Add Precommit Script

In `frontend/package.json`, add the following script:

```json
"scripts": {
  "precommit": "prettier --write . && eslint ."
}
```

---

## 4. Add Configuration Files

### `frontend/prettier.config.js`

```js
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
}

export default config
```

---

### `frontend/eslint.config.js`

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-unused-vars': 'warn',
    },
  },
]
```

---

### `frontend/.prettierignore`

```
**/.git
**/.svn
**/.hg
**/node_modules
```

---

## ✅ Done

Now, every commit will trigger Prettier and ESLint on the frontend codebase automatically.
