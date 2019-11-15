module.exports = {
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures:  {
      jsx:  true,  // Allows for the parsing of JSX
    },
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
    'import/prefer-default-export': 'off',
    'no-useless-constructor': 'off'
    // '@typescript-eslint/camelcase': 'error'
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
