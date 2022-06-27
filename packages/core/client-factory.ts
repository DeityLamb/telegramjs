import { Client } from './client';
import { Container } from 'inversify';
import { ClientConfig } from './client.config';

export class ClientFactoryStatic {
  public async create (options: any): Promise<Client> {

    const container = this.createContainer();

    const client = container.get(Client);
    const config = container.get(ClientConfig);

    config.setToken(options.token);

    return client;
  }

  private createContainer (): Container {
    const container = new Container({
      autoBindInjectable: true,
      defaultScope: 'Singleton'
    });

    container.bind(Container).toConstantValue(container);

    return container;
  }
}

export const ClientFactory = new ClientFactoryStatic();
