import { Container, injectable } from 'inversify';

@injectable()
export class ClientConfig {
  private token = '';

  constructor (private readonly container: Container) {}

  public setToken (token: string): void {
    this.token = token;
  }

  public getToken (): string {
    return this.token;
  }

  // TODO: realize
  public useCustomEntities (options: []) { }
}
