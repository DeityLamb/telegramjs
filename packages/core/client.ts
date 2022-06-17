import { injectable } from 'inversify';
import { ClientConfig } from './client-config';
import { ApiService } from './services'

export class Client {
  public readonly api = new ApiService()

  constructor (
    private readonly config: ClientConfig
  ) {}
}
