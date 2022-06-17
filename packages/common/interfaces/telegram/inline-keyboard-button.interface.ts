import { WebAppInfo } from './web-app-info.interface';
import { LoginUrl } from './login-url.interface';
import { CallbackGame } from './callback-game.interface';

export interface InlineKeyboardButton {
  text: string;
  url?: string;
  callback_data?: string;
  web_app?: WebAppInfo;
  login_url?: LoginUrl;
  switch_inline_query?: string;
  switch_inline_query_current_chat?: string;
  callback_game?: CallbackGame;
  pay?: boolean;
}
