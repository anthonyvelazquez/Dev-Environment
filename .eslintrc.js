module.exports = {
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  extends: [
    'eslint:recommended',
    "./node_modules/eslint-config-airbnb-base/rules/best-practices.js",
    "./node_modules/eslint-config-airbnb-base/rules/errors.js",
    "./node_modules/eslint-config-airbnb-base/rules/node.js",
    "./node_modules/eslint-config-airbnb-base/rules/style.js",
    "./node_modules/eslint-config-airbnb-base/rules/variables.js",
    "./node_modules/eslint-config-airbnb-base/rules/es6.js",
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: "./tsconfig.json",
    ecmaFeatures:  {
      jsx:  true,  // Allows for the parsing of JSX
    },
  },
  plugins: [
    'prettier',
    '@typescript-eslint/eslint-plugin'
  ],
  rules: {
    'camelcase': [2, {'properties': 'always'}],
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'func-names': 'off',
    'import/prefer-default-export': 'off',
    'no-useless-constructor': 'off',
    'lines-between-class-members': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': 'error'
  },
  settings: {
    // 'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts', '.tsx']
    // },
    // 'import/resolver': {
    //   node: {
    //     extensions: ['.js', '.jsx', '.ts', '.tsx']
    //   }
    // }
  }
};
