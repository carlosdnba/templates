module.exports = {
  env: {
    commonjs: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'arrow-parens': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    'no-await-in-loop': 'off',
    'no-console': 'off',
    'no-empty': 'off',
    'no-loop-func': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    camelcase: 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectPattern: { multiline: true, minProperties: 6 },
      },
    ],
  },
};
