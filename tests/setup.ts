import dotenv from 'dotenv';
import { resolve } from 'path';
import { existsSync } from 'fs';

const ENV_FILE_NAME = '.env.test';
const ENV_PATH = resolve(__dirname, ENV_FILE_NAME);

if (existsSync(ENV_PATH)) {
  dotenv.config({ path: ENV_PATH });
}
