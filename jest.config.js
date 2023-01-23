const dotenv = require('dotenv');
const { resolve } = require('path');
const { existsSync } = require('fs');

const ENV_PATH = resolve(__dirname, '.env.test');

if (existsSync(ENV_PATH)) {
  dotenv.config({ path: ENV_PATH });
}

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true
};
