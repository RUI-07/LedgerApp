module.exports = {
  root: true,
  extends: ['eslint:recommended', '@react-native-community'],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'prettier/prettier': 'error',
    semi: ['error', 'never'],
    'no-extra-semi': 'off',
    'react-native/no-inline-styles': 'off',
  },
}
