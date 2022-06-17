import { Container } from 'inversify';
import { Client } from './client';
import { ClientConfig } from './client-config';

export class ClientFactoryStatic {
  public async create (): Promise<Client> {
    // const container = new Container({
    //   autoBindInjectable: true,
    //   defaultScope: 'Singleton'
    // })

    const config = new ClientConfig()
    const instance = new Client(config);

    return instance;
  }
}

export const ClientFactory = new ClientFactoryStatic();
