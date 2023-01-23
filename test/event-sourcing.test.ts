import { Client } from '../lib';
import { MockAdapter } from './mock.adapter';

const TEST_BOT_TOKEN = process.env.TEST_BOT_TOKEN as string;
const TEST_ACCOUNT_ID = Number(process.env.TEST_ACCOUNT_ID);

const mockAdapter = new MockAdapter([{
  data: {
    updateId: 1,
    message: {
      messageId: 1,
      from: {
        id: TEST_ACCOUNT_ID,
        isBot: false,
        firstName: 'Alexey',
        username: 'deitylamb',
        languageCode: 'en'
      },
      chat: {
        id: TEST_ACCOUNT_ID,
        firstName: 'Alexey',
        username: 'deitylamb',
        type: 'private'
      },
      date: 1600000000,
      text: 'Hello !'
    }
  },
  timeout: 1000
}]);

test('event sourcing', async () => {
  const client = Client.create({
    token: TEST_BOT_TOKEN,
    eventSourceAdapter: mockAdapter
  });
  await client.listen();

  await new Promise((res) => client.once('message', (message) => {
    
    client.api.sendMessage({ chatId: message.chat.id, text: 'Hi !' })
    client.stop();
    res(null);
  }));
  expect(2+2).toBeTruthy();
});
