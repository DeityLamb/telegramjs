export class ClientConfig {
  private token = '';

  public setToken (token: string): void {
    this.token = token;
  }

  public getToken (): string {
    return this.token;
  }
}
