import { EventEmitter } from 'events';
import {
  TelegramEventEmitter, EventSourceAdapter,
  ITelegramClient, TelegramClientOptions, Update,
  ITelegramBotApi
} from '@telegramjs/common';
import { PollingAdapter } from './adapters';
import { TelegramBotApi } from './telegram-bot-api';

export class Client extends EventEmitter implements ITelegramClient, TelegramEventEmitter {

  private constructor(
    public readonly api: ITelegramBotApi,
    private readonly eventSourceAdapter: EventSourceAdapter
  ) {
    super();
    eventSourceAdapter.subscribeEmitter(this);
  }

  public static create(options: TelegramClientOptions): ITelegramClient {

    const api = new TelegramBotApi(options.token);
    const client = new Client(
      api,
      options.eventSourceAdapter || new PollingAdapter()
    );

    return client;
  }

  public override on<K extends keyof Update>(
    eventName: K,
    listener: (data: NonNullable<Update[K]>) => void
  ): this {
    return super.on(eventName, listener);
  }

  public override once<K extends keyof Update>(
    eventName: K,
    listener: (data: NonNullable<Update[K]>) => void
  ): this {
    return super.once(eventName, listener);
  }

  public async listen (): Promise<void> {
    const me = await this.api.getMe().catch(() => null);

    if (!me) {
      throw new Error('Telegram bot token is not valid.');
    }

    await this.eventSourceAdapter.start();
  }

  public stop (): void {
    this.eventSourceAdapter.stop();
  }

  /**
   * Emit update in EventSourceAdapter
   * @internal
   */
  public emitUpdate (update: Update): void {

    // Can be only one field in one update
    const [event] = Object.keys(update)
      .filter((key) => key != 'updateId') as (keyof Update)[];

    this.emit(event, update[event]);
  }
}
