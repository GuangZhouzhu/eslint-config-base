module.exports = {
  extends: ['.', 'eslint-config-prettier'].map((path) => require.resolve(path)),
};
