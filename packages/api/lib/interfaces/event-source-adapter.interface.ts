import { TelegramBotApi } from '../telegram-bot-api';
import { Update } from './types';

export interface TelegramEventEmitter {
  readonly api: TelegramBotApi;
  emitUpdate (update: Update): void;
}

export interface EventSourceAdapter {
  subscribeEmitter (emitter: TelegramEventEmitter): void;
  start (): void;
  stop (): void;
}
