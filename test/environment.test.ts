const TEST_BOT_TOKEN = process.env.TEST_BOT_TOKEN as string;
const TEST_ACCOUNT_ID = process.env.TEST_ACCOUNT_ID as string;

test('file ".env.test" must be filled', async () => {

  expect(TEST_BOT_TOKEN).toMatch(/\d+:\w+/);
  expect(TEST_ACCOUNT_ID).toMatch(/\d+/);
});
