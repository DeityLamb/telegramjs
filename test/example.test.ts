import { TelegramBotApi } from '../lib';

const TEST_BOT_TOKEN = process.env.TEST_BOT_TOKEN as string;
const telegram = new TelegramBotApi(TEST_BOT_TOKEN);

it('example', async () => {
  const me = await telegram.getMe();

  expect(me.id).toBeDefined();
  expect(me.username).toBeDefined();
  expect(me.isBot).toBeTruthy();
});
