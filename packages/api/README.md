# @telegramjs/api

## About
@telegramjs/api is a library simplifying interaction with the [Telegram bot API](https://core.telegram.org/bots/api)

- **100% Type-Safe**
- **100% documented**
- **100% coverage of the Telegram bot API**

## Installation

```sh-session
npm install @telegramjs/api
yarn add @telegramjs/api
```

## Example usage

### via Client
```js
import { Client } from '@telegramjs/api';

// Your super secret telegram bot token
const token = '866816396:2xT2prb0NNgxaqCZhqGO8Rw4SV-312iGnUL';
const client = Client.create({ token });

client.on('message', (message) => {

  if (message.text === 'ping') {
    client.api.sendMessage({ chatId: message.chat.id, text: `Pong 🏓` });  
  }

})

client.listen();
```

### Via TelegramBotApi only

```js
import { TelegramBotApi } from '@telegramjs/api';

// Your super secret telegram bot token
const token = '866816396:2xT2prb0NNgxaqCZhqGO8Rw4SV-312iGnUL';
const telegram = new TelegramBotApi(token);

async function main () {
  const me = await telegram.getMe();
  console.log(me.username, 'landed in Ohio !');
}

main();
```
