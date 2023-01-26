import { EventSourceAdapter, GetUpdatesOptions, TelegramEventEmitter } from '../interfaces';

export class PollingAdapter implements EventSourceAdapter {
  
  private emitter: TelegramEventEmitter | null = null;
  private timeout: NodeJS.Timeout | null = null;

  private offset = 0;

  constructor(
    private readonly options: Omit<GetUpdatesOptions, 'offset'> = {}
  ) {}

  public subscribeEmitter (emitter: TelegramEventEmitter): void {
    this.emitter = emitter;
  }

  public start(): void {
    if (this.timeout) {
      throw new Error('Polling is already starting');
    }

    this.processPolling();
  }

  public stop(): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = null;
  }


  private processPolling(): void {

    this.timeout = setTimeout(async () => {

      const updates = await this.emitter!.api.getUpdates({
        ...this.options,
        offset: this.offset + 1
      });

      for (const update of updates) {
        this.emitter!.emitUpdate(update);
        this.offset = update.updateId;
      }

      if (this.timeout) {
        this.processPolling();
      }
    }, 10);
  }
}
