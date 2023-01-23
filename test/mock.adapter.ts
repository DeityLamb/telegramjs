import { EventSourceAdapter, TelegramEventEmitter, Update } from '../lib';

interface MockUpdate {
  data: Update;
  timeout: number;
}

export class MockAdapter implements EventSourceAdapter {
  
  private emitter: TelegramEventEmitter | null = null;
  private readonly updates: MockUpdate[]
  private stopped = false;
  private offset = 0;

  constructor(
    updates: (Update | MockUpdate)[]
  ) {
    this.updates = updates
      .map((update) => 'timeout' in update
        ? update
        : ({ data: update, timeout: 0 })
      )
  }

  public subscribeEmitter (emitter: TelegramEventEmitter): void {
    this.emitter = emitter;
  }

  public start(): void {
    this.process();
  }

  public stop(): void {
    this.stopped = true;
  }

  private process(): void {
    const [update] = this.updates.slice(this.offset);
    
    if (!update) return;
    
    setTimeout(() => {
      
      if (this.stopped) return;

      this.emitter!.emitUpdate(update.data);
      this.offset += 1;
      this.process;

    }, update.timeout);
  }
}
