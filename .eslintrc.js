module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    // 'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    // 'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  // parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  plugins: [
    'prettier', 
    // '@typescript-eslint/eslint-plugin'
  ],
  rules: {
    'camelcase': [2, {'properties': 'always'}],
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'func-names': 'off',
    // '@typescript-eslint/camelcase': 'error'
  },
  // settings: {
  //   'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  //   'import/parsers': {
  //     '@typescript-eslint/parser': ['.ts', '.tsx']
  //   },
  //   'import/resolver': {
  //     node: {
  //       extensions: ['.js', '.jsx', '.ts', '.tsx']
  //     }
  //   }
  // }
};
