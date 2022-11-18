// See https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration

module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
            alwaysTryTypes: true,
          },
        },
      },
    },
  ],
};
