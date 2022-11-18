module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-plugin-import/config/typescript',
    './rules/typescript',
    './rules/import',
    './rules/jest',
    './rules/overrides',
  ].map((path) => require.resolve(path)),
};
