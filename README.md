# Steps to add precommit

-   In the git repo(where .git is located) install husky
-   Husky Installation --> npm i husky, npx husky init.
-   In .husky file write cd frontend && npm run precommit
-   In Frontend install eslint, @eslint/js, prettier
-  In frontend/package.json add in scripts --> "precommit" : "prettier --write . && eslint ."