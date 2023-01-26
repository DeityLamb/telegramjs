/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  moduleNameMapper: {
    '@telegramjs/(.*)/package.json': '<rootDir>/packages/$1/package.json',
    '@telegramjs/(.*)': '<rootDir>/packages/$1/lib',
  },
  modulePathIgnorePatterns: [
    'dist/package.json',
    '<rootDir>/package.json',
  ],
  setupFiles: [
    '<rootDir>/tests/setup.ts',
  ],
};
