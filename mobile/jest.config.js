/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const esModules = [
  '@react-navigation', 
  '@react-native', 
  'react-native', 
  '@expo', 
  'expo-font', 
  'expo-modules-core', 
  'expo-asset',
  'expo-constants',
  'expo-file-system',
].join('|');

/** @type {import('jest').Config} */
const config = {
  // A preset that is used as a base for Jest's configuration
  preset: 'jest-expo',

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.js$": "babel-jest"
  },

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
};

module.exports = config;
