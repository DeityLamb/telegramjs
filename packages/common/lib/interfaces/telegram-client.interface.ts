import { Update } from './types';
import { ITelegramBotApi } from './telegram-bot-api.interface';

export interface ITelegramClient {

  readonly api: ITelegramBotApi;

  on<K extends keyof Update>(eventName: K, listener: (data: NonNullable<Update[K]>) => void): this;
  once<K extends keyof Update>(eventName: K, listener: (data: NonNullable<Update[K]>) => void): this;

  listen (): Promise<void>;
  stop (): void;
}
