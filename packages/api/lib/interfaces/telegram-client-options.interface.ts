import { EventSourceAdapter } from './event-source-adapter.interface';

export interface TelegramClientOptions {
  token: string;
  eventSourceAdapter?: EventSourceAdapter;
}
