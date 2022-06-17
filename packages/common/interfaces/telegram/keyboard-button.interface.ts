import type { KeyboardButtonPollType } from './keyboard-button-poll-type.interface';
import type { WebAppInfo } from './web-app-info.interface';

export interface KeyboardButton {
  text: string;
  request_contact?: boolean;
  request_location?: boolean;
  request_poll?: KeyboardButtonPollType;
  web_app?: WebAppInfo;
}