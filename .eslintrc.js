module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react', 'simple-import-sort'],
  rules: {
    // increase the severity of rules so they are auto-fixable
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
