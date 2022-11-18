module.exports = {
  rules: {
    // Override eslint-config-airbnb-base variables rules (https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/variables.js)
    'no-shadow': 'off',
    // Override eslint-config-airbnb-base style rules (https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js)
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    // Override eslint-config-airbnb-base best practices rules (https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js)
    curly: ['error', 'all'],
    // Override eslint-config-airbnb-base es6 rules (https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js)
    'arrow-body-style': 'off',
    // Override eslint-config-airbnb-base errors rules (https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/errors.js)
    'no-await-in-loop': 'off',
    // Override eslint-config-airbnb-base imports rules (https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js)
    'import/extensions': ['error', 'never'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          'test.{js,jsx,ts,tsx}', // repos with a single test file
          'test-*.{js,jsx,ts,tsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.{js,ts}', // jest config
          '**/jest.setup.{js,ts}', // jest setup
          '**/vue.config.{js,ts}', // vue-cli config
          '**/webpack.config.{js,ts}', // webpack config
          '**/webpack.config.*.{js,ts}', // webpack config
          '**/rollup.config.{js,ts}', // rollup config
          '**/rollup.config.*.{js,ts}', // rollup config
          '**/gulpfile.{js,ts}', // gulp config
          '**/gulpfile.*.{js,ts}', // gulp config
          '**/Gruntfile{,.{js,ts}}', // grunt config
          '**/protractor.conf.{js,ts}', // protractor config
          '**/protractor.conf.*.{js,ts}', // protractor config
          '**/karma.conf.{js,ts}', // karma config
          '**/.eslintrc.{js,ts}', // eslint config
        ],
        optionalDependencies: false,
      },
    ],
  },
};
