import { Update } from './types';
import { ITelegramBotApi } from './telegram-bot-api.interface';

export interface TelegramEventEmitter {
  readonly api: ITelegramBotApi;
  emitUpdate (update: Update): void;
}

export interface EventSourceAdapter {
  subscribeEmitter (emitter: TelegramEventEmitter): void;
  start (): void;
  stop (): void;
}
