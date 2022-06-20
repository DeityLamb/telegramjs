import { Endpoints } from '@telegramjs/common';
import type { Message, UserMe, SendMessageOptions } from '@telegramjs/common';
import { join } from 'path';
import { ClientConfig } from '../client-config';
import { API_URL } from '../constants';

export class ApiService {

  constructor (
    private readonly config: ClientConfig
  ) {}

  public getMe (): Promise<UserMe> {
    return this.fetch<UserMe>(Endpoints.GET_ME);
  }

  /**
   * 
   * Use this method to log out from the cloud Bot API server before launching the bot locally.
   * You must log out the bot before running it locally,
   * otherwise there is no guarantee that the bot will receive updates.
   * After a successful call, you can immediately log in on a local server,
   * but will not be able to log in back to the cloud Bot API server for 10 minutes.
   * Returns True on success. Requires no parameters.
  */
  public async logOut (): Promise<void> {
    await this.fetch<void>(Endpoints.LOG_OUT);
  }

  /**
   * 
   * Use this method to close the bot instance before moving it from one local server to another.
   * You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart.
   * The method will return error 429 in the first 10 minutes after the bot is launched.
   * Returns True on success. Requires no parameters. 
  */
  public async close (): Promise<void> {
    await this.fetch<void>(Endpoints.CLOSE);
  }

  public sendMessage (options: SendMessageOptions): Promise<Message> {
    return this.fetch<Message>(Endpoints.SEND_MESSAGE, options)
  }

  private fetch<T>(
    method: Endpoints, data: Record<string, any> | null = null
  ): Promise<T> {
    
    const url = this.buildApiURL(method);
    
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((o) => o.json())
  }

  private buildApiURL (method: Endpoints): string {
    
    const path = join('bot' + this.config.getToken(), method);
    const url = new URL(path, API_URL);
    
    return url.toString();
  }
}
