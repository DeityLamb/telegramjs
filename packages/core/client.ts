import { injectable } from 'inversify';
import { ClientConfig } from './client.config';
import { ApiService } from './services'

export class Client {

  constructor (
    private readonly config: ClientConfig,
    private readonly api: ApiService
  ) {}

  public useCustomEntities (options: []) {
    return this.config.useCustomEntities(options);
  }
}
