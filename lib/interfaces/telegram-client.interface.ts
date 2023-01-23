import { Update } from './types';
import { TelegramBotApi } from '../telegram-bot-api';

export interface ITelegramClient {

  readonly api: TelegramBotApi;

  on<K extends keyof Update>(eventName: K, listener: (data: NonNullable<Update[K]>) => void): this;
  once<K extends keyof Update>(eventName: K, listener: (data: NonNullable<Update[K]>) => void): this;

  listen (): Promise<void>;
  stop (): void;
}
