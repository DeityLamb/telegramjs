import { TelegramBotApi } from '@telegramjs/api';
import { createReadStream } from 'fs';
import { join } from 'path';
import FormData from 'form-data';

const TEST_BOT_TOKEN = process.env.TEST_BOT_TOKEN as string;
const TEST_ACCOUNT_ID = process.env.TEST_ACCOUNT_ID as string;

const telegram = new TelegramBotApi(TEST_BOT_TOKEN);

it('must send a file', async () => {

  // all fields in snake_case
  const form = new FormData();
  form.append('chat_id', TEST_ACCOUNT_ID);
  form.append('photo', createReadStream(join(__dirname, 'image.png')));

  const message = await telegram.sendPhoto(form);
  expect(message.chat.id).toBeDefined();
});
